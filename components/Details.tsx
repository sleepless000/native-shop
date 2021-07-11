import React from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { useRoute } from "@react-navigation/native";

import colors from "../constants/colors";
import Text from "../components/AppText";
import AppButton from "../components/AppButton";
import { useCartContext } from "../hooks/useCart";

interface IParams {
  key: string;
  name: string;
  params: {
    id: string;
    title: string;
    image: ImageSourcePropType;
    description: string;
    price: string;
  };
}

const Details: React.FC = () => {
  const { params } = useRoute<IParams>();
  const { addToCart, data } = useCartContext();
  const currentItem = data.find((item) => item.id === params.id);

  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <Image style={styles.image} source={params.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.desc}>{params.description}</Text>

        <Text style={styles.price}>
          £ {parseFloat(params.price).toFixed(2)}
        </Text>
        {currentItem?.quantity ? (
          <Text style={styles.secondTitle}>
            Currently in cart {currentItem?.quantity} {params.title}
          </Text>
        ) : (
          <View style={{ height: 25 }}></View>
        )}
      </View>
      <View style={styles.button}>
        <AppButton
          onPress={() => addToCart({ id: params.id })}
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

export default Details;
