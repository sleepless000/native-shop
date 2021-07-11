import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../constants/colors";

interface IProps {
  item: any;
  addToCart: ({ id, add }: { id: string; add?: boolean }) => void;
}

const CartRow: React.FC<IProps> = ({ item, addToCart }) => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={{ color: colors.app.black }}>{item.title}</Text>
    </View>
    <View style={styles.total}>
      <Text>£ {item.total}</Text>
    </View>
    <View style={styles.quantity}>
      <TouchableOpacity>
        <AntDesign
          name="minuscircleo"
          size={30}
          color={colors.app.black}
          onPress={() => addToCart({ id: item.id, add: false })}
        />
      </TouchableOpacity>
      <Text style={styles.qtyText}>{item.quantity.toString()}</Text>
      <TouchableOpacity>
        <AntDesign
          name="pluscircleo"
          size={30}
          color={colors.app.black}
          onPress={() => addToCart({ id: item.id })}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    flex: 1,
    padding: 2,
    justifyContent: "space-around",
  },
  title: {
    flex: 4,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
  },
  total: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10,
  },
  quantity: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: {
    textAlign: "center",
    fontSize: 16,
    width: 30,
  },
});

export default CartRow;
