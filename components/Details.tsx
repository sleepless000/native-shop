import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../constants/Colors";
import Text from "../components/AppText";
import Button from "../components/Button";

function ListingDetailsScreen({ route }: { route: any }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>£ {listing.price}</Text>
      </View>
      <View style={styles.button}>
        <Button onPress={() => {}} title="add to cart" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: 400,
    height: 400,
    alignSelf: "center",
  },
  price: {
    color: colors.app.secondary,
    fontWeight: "bold",
    fontSize: 40,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  button: {
    marginHorizontal: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
