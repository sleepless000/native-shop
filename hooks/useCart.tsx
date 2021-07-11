import React, { useState, createContext, useContext, useMemo, FC } from "react";

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
    (accumulator, { pricePerUnit, quantity }) =>
      accumulator + pricePerUnit * quantity,
    0
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

  const quantity = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  const addToCart = ({ id, add = true }: { id: string; add?: boolean }) => {
    updateCart((prev) => {
      let cart = { ...prev };

      if (cart.products[id] && add === true) {
        cart.products[id].quantity = cart.products[id].quantity + 1;
      } else if (cart.products[id] && add === false) {
        if (cart.products[id].quantity === 0) return cart;
        cart.products[id].quantity = cart.products[id].quantity - 1;
      } else {
        cart.products[id] = {
          id,
          quantity: 1,
        };
      }

      return cart;
    });
  };

  const checkout = () => {
    alert(
      cartItems
        .filter(({ quantity }) => quantity > 0)
        .map(({ id, quantity }) => {
          return JSON.stringify(
            {
              price: id,
              quantity,
            },
            null,
            2
          );
        })
    );
  };

  const value = useMemo(
    () => ({
      cartItems,
      data,
      subtotal,
      quantity,
      addToCart,
      clearCart,
      checkout,
    }),
    [cart]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContextProvider, useCartContext };
