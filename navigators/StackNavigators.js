import React,{useEffect}  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigationState  } from '@react-navigation/native';

import {IconButton} from 'react-native-paper';

import {useDispatch, useSelector }from "react-redux";
import {setCurrentMockspace} from "../store/actions/mockspaces";

import TabNavigator from "./TabNavigator"
import RouteDetailScreen from '../screens/RouteDetailScreen';
import RouteHistoryDetailScreen from '../screens/RouteHistoryDetailScreen';
import Login from '../screens/Login';
import SignupScreen from '../screens/SignupScreen';


const MockspaceStack = createStackNavigator();
const AuthStack = createStackNavigator();



export const MockspaceStackNavigator = ({ mockspaceName}) => {
  const currentMockspaceId = useSelector(state => state.mockspaces.currentMockspaceId);
  const dispatch = useDispatch();
  const state = useNavigationState(state => state);
  const {history,routes} = state;
  useEffect(() => {
    const item = history[history.length - 1];
    if(!item.key || item.type !== "route")
      return;
    const route = routes.find(r => r.key === item.key);
    if(["Settings"].includes(route.name) || currentMockspaceId === route.params.mockspaceId ) return;
    dispatch(setCurrentMockspace(route.params.mockspaceId));
  }, [history, routes]);
  const screenOptions = ({navigation}) => ({
    title: mockspaceName,
    headerLeft: () => (
      <IconButton icon="menu" size={24} color="white" onPress={()=> navigation.toggleDrawer() } />
    ),
  })
  
  return (
    <MockspaceStack.Navigator screenOptions={{headerTitleStyle: {fontFamily: "WorkSans_500Medium"}}}>
      <MockspaceStack.Screen name="Mockspace" component={TabNavigator} options={screenOptions}/>
      <MockspaceStack.Screen name="RouteDetail" component={RouteDetailScreen}/>
      <MockspaceStack.Screen name="RouteHistoryDetail" component={RouteHistoryDetailScreen}/>
    </MockspaceStack.Navigator>
  );
}

export const AuthStackNavigator = () => {

  return (
    <AuthStack.Navigator >
      <AuthStack.Screen name="Login" component={Login}/>
      <AuthStack.Screen name="Signup" component={SignupScreen}/>
    </AuthStack.Navigator>
  );
}
