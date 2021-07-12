import * as React from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../constants/colors";
import products from "../constants/products";
import Card from "../components/Card";
import Header from "../components/Header";

const ProductList: React.FC = () => {
  const navigation = useNavigation();
  const flatListRef = React.useRef<any>();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
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
        ListHeaderComponent={() => (
          <Text style={styles.listHeader}>Space Jelly Shop</Text>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity>
            <Text
              style={styles.listFooter}
              onPress={() =>
                flatListRef.current.scrollToOffset({
                  animated: true,
                  offset: 0,
                })
              }
            >
              Scroll to top
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

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
  listHeader: {
    fontSize: 60,
    fontWeight: "bold",
    paddingBottom: 30,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  listFooter: {
    paddingBottom: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductList;
