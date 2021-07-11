import React from "react";
import { SafeAreaView } from "react-native";

const CartContainer: React.FC = ({ children }) => {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
};

export default CartContainer;
