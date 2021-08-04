import React,{useEffect}  from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {IconButton} from 'react-native-paper'

import {useDispatch }from "react-redux";
import {setCurrentMockspace} from "../store/actions/mockspaces";

import TabNavigator from "./TabNavigator"
import RouteDetailScreen from '../screens/RouteDetailScreen';
import RouteHistoryDetailScreen from '../screens/RouteHistoryDetailScreen';
const MockspaceStack = createStackNavigator();

export const MockspaceStackNavigator = ({mockspaceId, mockspaceName}) => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentMockspace(mockspaceId));
  }, [mockspaceId]);

  const screenOptions = ({navigation}) => ({
    title: mockspaceName,
    headerLeft: () => (
      <IconButton icon="menu" size={24} color="black" onPress={()=> navigation.toggleDrawer() } />
    ),
  })
  
  return (
    <MockspaceStack.Navigator >
      <MockspaceStack.Screen name="Mockspace" component={TabNavigator} options={screenOptions}/>
      <MockspaceStack.Screen name="RouteDetail" component={RouteDetailScreen}/>
      <MockspaceStack.Screen name="RouteHistoryDetail" component={RouteHistoryDetailScreen}/>

    </MockspaceStack.Navigator>
  );
}
