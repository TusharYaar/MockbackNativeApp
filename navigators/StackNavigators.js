import React, {useEffect, useCallback} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from "react-redux";

import TabNavigator, { screenOptions } from "./TabNavigator"
import MockspaceLoadingScreen from '../screens/MockspaceLoadingScreen';
import NoMockspaceScreen from '../screens/NoMockspaceScreen';


const MockspaceStack = createStackNavigator();

export const MockspaceStackNavigator = () => {
  const mockspaces = useSelector(state => state.mockspaces);

  if (!mockspaces.loaded) return <MockspaceLoadingScreen />;
  else if (mockspaces.loaded) return <NoMockspaceScreen />;
    


  return (
    <MockspaceStack.Navigator >
      <MockspaceStack.Screen name="Mockspace" component={TabNavigator} options={screenOptions}/>
    </MockspaceStack.Navigator>
  );
}