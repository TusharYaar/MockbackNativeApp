import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import RoutesHistoryScreen from "../screens/RoutesHistoryScreen"

import RoutesScreen from "../screens/RoutesScreen";
import OverviewScreen from "../screens/OverviewScreen";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Routes" component={RoutesScreen} />
      <Tab.Screen name="History" component={RoutesHistoryScreen} />
    </Tab.Navigator>
  );
}



export default TabNavigator;