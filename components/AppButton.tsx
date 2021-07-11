import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../constants/colors";

interface IProps {
  title: string;
  onPress: () => void;
  color?: keyof {
    primary: string;
    secondary: string;
    black: string;
    white: string;
    medium: string;
    light: string;
    danger: string;
  };
}

const AppButton: React.FC<IProps> = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.app[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.app.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.app.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
