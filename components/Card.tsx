import React from "react";
import { View, StyleSheet, Image, useWindowDimensions } from "react-native";

import AppText from "./AppText";
import colors from "../constants/Colors";

const Card: React.FC<{ title: string, subTitle: string, image: any }> =
  ({ title, subTitle, image }) => {
    const windowWidth = useWindowDimensions().width;

    return (
      <View style={[styles.card, { width: windowWidth - 40 }]}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.app.white,
    marginBottom: 30,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  subTitle: {
    color: colors.app.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
    fontWeight: 'bold'
  },
});

export default Card;