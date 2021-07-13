import * as React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { useCartContext } from "../hooks/useCart";

const Header: React.FC = () => {
  const navigation = useNavigation();
  const { subtotal } = useCartContext();
  return (
    <View style={styles.container}>
      <View style={styles.shopName}>
        <Text style={styles.text}>Space Jelly Shop</Text>
      </View>
      <TouchableOpacity
        style={styles.cart}
        onPress={() =>
          navigation.navigate("CartScreen", { screen: "CartScreen" })
        }
      >
        <Entypo name="shopping-bag" color={colors.app.black} size={24} />
        <Text>{"  "}</Text>
        <Text style={[styles.text, { color: colors.app.black }]}>
          £ {parseFloat(subtotal).toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: colors.app.light,
    paddingVertical: 20,
    paddingTop: Platform.OS === 'android' ? 35 : 20,
  },
  cart: {
    flexDirection: "row",
    backgroundColor: colors.app.light,
    justifyContent: "flex-end",
    width: "50%",
  },
  shopName: {
    flexDirection: "row",
    backgroundColor: colors.app.light,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.app.primary,
  },
});

export default Header;
