import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Text, View } from '../components/Themed';
import colors from '../constants/Colors';
import Card from '../components/Card';

const products = [
  {
    "id": "price_abcd0001",
    "title": "Space Jelly Tshirt",
    "description": "Bring Cosmo the space Jellyfish to your wardrobe with this high quality tshirt.",
    "image": require("../assets/images/spacejelly-tshirt.jpg"),
    "price": 20.00
  },
  {
    "id": "price_abcd0002",
    "title": "Space Jelly Stickers",
    "description": "Add some flare to your laptop with a sticker of Cosmo the Space Jellyfish.",
    "image": require("../assets/images/spacejelly-stickers.jpg"),
    "price": 10.00
  },
  {
    "id": "price_abcd0003",
    "title": "Space Jelly Combo",
    "description": "Show your love for Cosmo with a tshirt and sticker combo pack!",
    "image": require("../assets/images/spacejelly-combo.jpg"),
    "price": 25.00
  },
  {
    "id": "price_abcd0004",
    "title": "Space Jelly Tshirt",
    "description": "Bring Cosmo the space Jellyfish to your wardrobe with this high quality tshirt.",
    "image": require("../assets/images/spacejelly-tshirt.jpg"),
    "price": 40.00
  },
  {
    "id": "price_abcd0005",
    "title": "Space Jelly Stickers",
    "description": "Add some flare to your laptop with a sticker of Cosmo the Space Jellyfish.",
    "image": require("../assets/images/spacejelly-stickers.jpg"),
    "price": 17.00
  },
  {
    "id": "price_abcd0006",
    "title": "Space Jelly Combo",
    "description": "Show your love for Cosmo with a tshirt and sticker combo pack!",
    "image": require("../assets/images/spacejelly-combo.jpg"),
    "price": 60.00
  }
]
export default function TabOneScreen() {
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
          <Card image={item.image} title={`£ ${item.price}`} subTitle={item.title} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.app.light,
  },
  title: {
    paddingTop: 50, paddingBottom: 20, width: '100%',
    backgroundColor: colors.app.light,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: colors.app.primary,
    alignSelf: 'center',
  },
  list: { paddingHorizontal: 20, height: '100%' },
});
