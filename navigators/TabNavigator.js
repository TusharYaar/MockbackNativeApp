import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { useTheme } from "@react-navigation/native";

import { Text } from "react-native-paper";

import RoutesHistoryScreen from "../screens/RoutesHistoryScreen";

import RoutesScreen from "../screens/RoutesScreen";
import OverviewScreen from "../screens/OverviewScreen";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions(theme)}>
      <Tab.Screen
        name="Overview"
        component={OverviewScreen}
        options={tabOption("Overview",theme)}
      />
      <Tab.Screen
        name="Routes"
        component={RoutesScreen}
        options={tabOption("Routes",theme)}
      />
      <Tab.Screen
        name="History"
        component={RoutesHistoryScreen}
        options={tabOption("History",theme)}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  focusedTab: {
  },
});

const tabBarOptions = (theme) => ({
  indicatorStyle: {
    backgroundColor: theme.colors.accent,
  },
});

const tabOption = (route,theme=null) => ({
  tabBarLabel: ({ focused }) => (
    <Text style={focused ? {color: theme.colors.accent} : null}>
      {route.toUpperCase()}
    </Text>
  ),
});
