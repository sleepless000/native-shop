import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors.app.primary }}
      >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Entypo name="list" color={color} size={35} style={{ position: 'absolute', top: 5 }} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Entypo name="shopping-bag" color={color} size={35} style={{ position: 'absolute', top: 5 }} />,
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
        headerShown: false
      }}
    >
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
      />
    </TabTwoStack.Navigator>
  );
}
