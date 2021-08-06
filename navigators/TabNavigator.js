import React from 'react';
import {StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {Text} from "react-native-paper"

import RoutesHistoryScreen from "../screens/RoutesHistoryScreen"

import RoutesScreen from "../screens/RoutesScreen";
import OverviewScreen from "../screens/OverviewScreen";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
<Tab.Navigator>
      <Tab.Screen name="Overview" component={OverviewScreen} options={{ tabBarLabel:({focused}) => <Text style={focused ? styles.focusedTab : null} >OVERVIEW</Text>}} />
      <Tab.Screen name="Routes" component={RoutesScreen} />
      <Tab.Screen name="History" component={RoutesHistoryScreen} options={{ tabBarLabel:({focused}) => <Text style={focused ? styles.focusedTab : null}>HISTORY</Text> }}/>
    </Tab.Navigator>
  );
}



export default TabNavigator;

const styles = StyleSheet.create({
  focusedTab: {
    color: "orange",
  },
})