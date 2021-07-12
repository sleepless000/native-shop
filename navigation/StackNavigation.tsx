import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import colors from "../constants/colors";
import DetailsScreen from "../screens/DetailsScreen";
import ProductListScreen from "../screens/ProductListScreen";
import CartScreen from "../screens/CartScreen";
import { StackParamList, List } from "../types";

const isAndroid = Platform.OS === "android";

const Stack = createStackNavigator<StackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="ProductList">
      <Stack.Screen
        name="ProductList"
        component={ProductListNavigator}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: "",
          headerTintColor: colors.app.primary,
          ...(isAndroid && { safeAreaInsets: { top: 25 } }),
        }}
      />
    </Stack.Navigator>
  );
}

const ListStack = createStackNavigator<List>();

function ProductListNavigator() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="List"
        component={ProductListScreen}
        options={{
          headerShown: false,
        }}
      />
      <ListStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: "",
          headerTintColor: colors.app.primary,
          ...(isAndroid && { safeAreaInsets: { top: 25 } }),
        }}
      />
    </ListStack.Navigator>
  );
}
