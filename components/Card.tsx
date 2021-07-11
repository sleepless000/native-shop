import React from "react";
import {
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from "react-native";

import AppText from "./AppText";
import colors from "../constants/colors";

const Card: React.FC<{
  title: string;
  subTitle: string;
  image: any;
  onPress: () => void;
}> = ({ title, subTitle, image, onPress }) => {
  const windowWidth = useWindowDimensions().width;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, { width: windowWidth - 40 }]}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.app.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  subTitle: {
    color: colors.app.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
    fontWeight: "bold",
  },
});

export default Card;
