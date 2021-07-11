import * as React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../constants/colors";
import Details from "../components/Details";
import ProductList from "../screens/ProductList";
import CartScreen from "../screens/CartScreen";
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  List,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: colors.app.primary }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Entypo
              name="list"
              color={color}
              size={35}
              style={{ position: "absolute", top: 5 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="shoppingcart"
              size={40}
              color={color}
              style={{ position: "absolute", top: 5 }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabOneStack.Screen name="ProductList" component={ListStackNavigator} />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabTwoStack.Screen name="CartScreen" component={CartScreen} />
    </TabTwoStack.Navigator>
  );
}

const ListStack = createStackNavigator<List>();

function ListStackNavigator() {
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
