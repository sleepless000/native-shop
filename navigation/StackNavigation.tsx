import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../constants/colors";
import Details from "../components/Details";
import ProductList from "../screens/ProductList";
import CartScreen from "../screens/CartScreen";
import { StackParamList, List } from "../types";

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
        component={ProductList}
        options={{
          headerShown: false,
        }}
      />
      <ListStack.Screen
        name="Details"
        component={Details}
        options={{
          title: "",
          headerTintColor: colors.app.primary,
        }}
      />
    </ListStack.Navigator>
  );
}
