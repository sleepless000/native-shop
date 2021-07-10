import * as React from "react";
import { StyleSheet, FlatList } from "react-native";

import { Text, View } from "../components/Themed";
import colors from "../constants/Colors";
import products from "../constants/products";
import Card from "../components/Card";

export default function TabOneScreen({
  navigation,
}: {
  navigation: { navigate: (route: string, param: any) => void };
}) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Space Jelly</Text>
        <Text style={styles.text}>Shop</Text>
      </View>
      <FlatList
        style={styles.list}
        data={products}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate("Details", item)}
            image={item.image}
            title={`£ ${item.price}`}
            subTitle={item.title}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.app.light,
  },
  title: {
    paddingTop: 50,
    paddingBottom: 20,
    width: "100%",
    backgroundColor: colors.app.light,
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: colors.app.primary,
    alignSelf: "center",
  },
  list: { paddingHorizontal: 20, height: "100%" },
});
