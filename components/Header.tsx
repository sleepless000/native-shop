import * as React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { useCartContext } from "../hooks/useCart";

interface IProps {
  flatListRef: React.MutableRefObject<FlatList<any>>;
}

const Header: React.FC<IProps> = ({ flatListRef }) => {
  const navigation = useNavigation();
  const { subtotal } = useCartContext();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.shopName}
        onPress={() =>
          flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
        }
      >
        <Text style={styles.text}>Space Jelly Shop</Text>
      </TouchableOpacity>
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
