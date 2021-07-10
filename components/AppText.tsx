import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const AppText: React.FC<{ style: object}> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;