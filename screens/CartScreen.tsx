import React from "react";

import { useCartContext } from "../hooks/useCart";
import * as Cart from "../components/Cart/index";

const CartScreen = () => {
  const { addToCart, data } = useCartContext();

  return (
    <Cart.CartContainer>
      <Cart.CartHeader />
      {data?.map(
        (item) =>
          item.quantity > 0 && (
            <Cart.CartRow item={item} addToCart={addToCart} key={item.id} />
          )
      )}
      <Cart.CartFooter />
    </Cart.CartContainer>
  );
};

export default CartScreen;
