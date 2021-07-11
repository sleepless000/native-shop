import React, { useState, createContext, useContext, FC } from "react";

import products from "../constants/products";

const defaultCart: {
  products: any;
} = {
  products: {},
};

const CartContext = createContext({} as ReturnType<typeof useCartState>);

const CartContextProvider: FC = ({ children }) => {
  const cart = useCartState();
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

const useCartContext = () => useContext(CartContext);

const useCartState = () => {
  const [cart, updateCart] = useState(defaultCart);

  const cartItems = Object.keys(cart.products).map((key) => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return {
      ...cart.products[key],
      pricePerUnit: product?.price,
    };
  });

  const subtotal = cartItems.reduce(
    (accumulator, { pricePerUnit, quantity }) => {
      return accumulator + pricePerUnit * quantity;
    },
    0
  );

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

  return {
    cart,
    cartItems,
    data,
    subtotal,
    quantity,
    addToCart,
    checkout,
  };
};

export { CartContextProvider, useCartState, useCartContext };
