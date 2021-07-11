import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import colors from "../../constants/colors";
import { useCartContext } from "../../hooks/useCart";

const CartFooter: React.FC = () => {
  const { subtotal, checkout, clearCart } = useCartContext();

  return subtotal > 0 ? (
    <>
      <View style={styles.separator} />

      <View style={[styles.container]}>
        <View style={styles.total} />
        <View style={styles.button}>
          <Button
            title="CLEAR CART"
            onPress={clearCart}
            color={colors.app.secondary}
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.total}>
          <Text style={{ fontSize: 25 }}>
            Total £ {parseFloat(subtotal).toFixed(2)}
          </Text>
        </View>
        <View style={styles.button}>
          <Button
            title="CHECK OUT"
            onPress={checkout}
            color={colors.app.primary}
          />
        </View>
      </View>
    </>
  ) : (
    <Text style={styles.noItems}>No items in Cart</Text>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 20,
  },
  container: {
    height: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    flex: 1,
    padding: 2,
    justifyContent: "space-around",
  },
  total: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  noItems: {
    fontSize: 35,
    textAlign: "center",
    paddingTop: 40,
  },
});

export default CartFooter;
