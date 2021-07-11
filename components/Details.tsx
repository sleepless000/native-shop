import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../constants/colors";
import Text from "../components/AppText";
import AppButton from "../components/AppButton";
import { useCartContext } from "../hooks/useCart";

const ListingDetailsScreen: React.FC<{ route: any }> = ({ route }) => {
  const listing = route.params;
  const { addToCart, data } = useCartContext();
  const currentItem = data.find((item) => item.id === listing.id);

  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <Image style={styles.image} source={listing.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.desc}>{listing.description}</Text>

        <Text style={styles.price}>
          £ {parseFloat(listing.price).toFixed(2)}
        </Text>
        {currentItem?.quantity ? (
          <Text style={styles.secondTitle}>
            Currently in cart {currentItem?.quantity} {listing.title}
          </Text>
        ) : (
          <View style={{ height: 25 }}></View>
        )}
      </View>
      <View style={styles.button}>
        <AppButton
          onPress={() => addToCart({ id: listing.id })}
          title="add to cart"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
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
    paddingBottom: 10,
  },
  desc: {
    fontSize: 16,
    fontWeight: "300",
    paddingBottom: 10,
  },
  secondTitle: {
    color: colors.app.grey,
  },
  button: {
    marginHorizontal: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
