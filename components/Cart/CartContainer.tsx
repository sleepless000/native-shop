import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

const CartContainer: React.FC = ({ children }) => {
  return (
    <SafeAreaView>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default CartContainer;
