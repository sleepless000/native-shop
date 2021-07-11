import React from "react";
import { FlatList } from "react-native";

import { useCartContext } from "../hooks/useCart";
import * as Cart from "../components/Cart/index";

const CartScreen = () => {
  const { addToCart, data } = useCartContext();

  return (
    <Cart.CartContainer>
      <FlatList
        data={data}
        renderItem={(item) =>
          item.item.quantity > 0 ? (
            <Cart.CartRow item={item.item} addToCart={addToCart} />
          ) : null
        }
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <Cart.CartHeader />}
        ListFooterComponent={() => <Cart.CartFooter />}
      />
    </Cart.CartContainer>
  );
};

export default CartScreen;
