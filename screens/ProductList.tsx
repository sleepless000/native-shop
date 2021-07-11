import * as React from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";

import colors from "../constants/colors";
import products from "../constants/products";
import Card from "../components/Card";
import Header from "../components/Header";

export default function ProductList({
  navigation,
}: {
  navigation: { navigate: (route: string, param: any) => void };
}) {
  const flatListRef = React.useRef<any>();

  return (
    <SafeAreaView style={styles.container}>
      <Header flatListRef={flatListRef} navigation={navigation} />
      <FlatList
        ref={flatListRef}
        style={styles.list}
        data={products}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate("Details", item)}
            image={item.image}
            title={`£ ${parseFloat(`${item.price}`).toFixed(2)}`}
            subTitle={item.title}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
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
    paddingTop: 40,
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
  cart: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 20,
    backgroundColor: colors.app.light,
    paddingVertical: 10,
  },
  list: { paddingHorizontal: 20, height: "100%" },
});
