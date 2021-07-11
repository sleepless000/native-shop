import React from "react";
import { Text, StyleSheet, Platform, StyleProp, TextStyle } from "react-native";

const AppText: React.FC<{ style: StyleProp<TextStyle> }> = ({
  children,
  style,
}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
