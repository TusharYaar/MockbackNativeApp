import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {IconButton} from 'react-native-paper'

import RoutesHistoryScreen from "../screens/RoutesHistoryScreen"

import RoutesScreen from "../screens/RoutesScreen"

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Routes" component={RoutesScreen} />
      <Tab.Screen name="History" component={RoutesHistoryScreen} />
    </Tab.Navigator>
  );
}

export const screenOptions = ({navigation}) => ({
  headerLeft: () => (
    <IconButton icon="menu" size={24} color="black" onPress={()=> navigation.toggleDrawer() } />
  ),
})

export default TabNavigator;