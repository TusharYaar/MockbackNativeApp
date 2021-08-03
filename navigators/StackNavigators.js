import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';



import TabNavigator, { screenOptions } from "./TabNavigator"
const MockspaceStack = createStackNavigator();

export const MockspaceStackNavigator = () => {

  return (
    <MockspaceStack.Navigator >
      <MockspaceStack.Screen name="Mockspace" component={TabNavigator} options={screenOptions}/>
    </MockspaceStack.Navigator>
  );
}