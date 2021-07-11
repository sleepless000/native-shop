import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../../constants/colors";

const CartHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 4,
          alignItems: "flex-start",
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Text style={styles.headerText}>Name</Text>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: "flex-end",
          justifyContent: "center",
          paddingRight: 10,
        }}
      >
        <Text style={styles.headerText}>Total</Text>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.headerText}>Quantity</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    padding: 2,
    justifyContent: "space-around",
    backgroundColor: "black",
  },
  headerText: { color: colors.app.white, fontSize: 16 },
});

export default CartHeader;
