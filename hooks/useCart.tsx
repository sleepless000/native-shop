import React, {
  useState, createContext, useContext, useMemo, FC, useCallback,
} from 'react';

import products from "../constants/products";

interface IContextValue {
  cartItems: any[];
  data: {
    id: any;
    title: string | undefined;
    quantity: any;
    pricePerUnit: any;
    total: string;
  }[];
  subtotal: any;
  quantity: any;
  addToCart: ({ id, add }: { id: string; add?: boolean | undefined }) => void;
  checkout: () => void;
  clearCart: () => void;
}

const defaultCart: { products: any } = { products: {} };

const CartContext = createContext({} as IContextValue);

const useCartContext = () => useContext(CartContext);

const CartContextProvider: FC = ({ children }) => {
  const [cart, updateCart] = useState(defaultCart);

  const cartItems = Object.keys(cart.products).map((key) => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return {
      ...cart.products[key],
      pricePerUnit: product?.price,
    };
  });

  const subtotal = cartItems.reduce(
    (accumulator, { pricePerUnit, quantity }) => accumulator + pricePerUnit * quantity,
    0,
  );

  const clearCart = () => updateCart({ products: {} });

  const data = cartItems.map(({ id, quantity, pricePerUnit }) => {
    const product = products.find(({ id: pid }) => pid === id);
    const { title } = product || {};

    return {
      id,
      title,
      quantity,
      pricePerUnit: pricePerUnit.toFixed(2),
      total: (quantity * pricePerUnit).toFixed(2),
    };
  });

  const quantity = cartItems.reduce((accumulator, { quantity: qty }) => accumulator + qty, 0);

  const addToCart = ({ id, add = true }: { id: string; add?: boolean }) => {
    updateCart((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart.products[id] && add === true) {
        newCart.products[id].quantity += 1;
      } else if (newCart.products[id] && add === false) {
        if (newCart.products[id].quantity === 0) return newCart;

        newCart.products[id].quantity -= 1;
      } else {
        newCart.products[id] = {
          id,
          quantity: 1,
        };
      }

      return newCart;
    });
  };

  const checkout = useCallback(() => {
    // eslint-disable-next-line no-alert
    alert(
      cartItems
        .filter(({ quantity: qty }) => qty > 0)
        .map(({ id, qty }) => JSON.stringify(
          {
            price: id,
            quantity: qty,
          },
          null,
          2,
        )),
    );
  }, [cartItems]);

  const value = useMemo(
    () => ({
      cartItems,
      data,
      subtotal,
      quantity,
      addToCart,
      clearCart,
      checkout,
    }), [cartItems, checkout, data, quantity, subtotal],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContextProvider, useCartContext };

