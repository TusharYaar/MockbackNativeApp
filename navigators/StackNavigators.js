import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


// import Login, {loginOptions} from "../screens/Login";
// import LoginLoading from "../screens/LoginLoading";
import TabNavigator from "./TabNavigator"

const MockspaceStack = createStackNavigator();

export const MockspaceStackNavigator = () => {
  return (
    <MockspaceStack.Navigator >
      <MockspaceStack.Screen name="Mockspace" component={TabNavigator}/>
      {/* <MockspaceStack.Screen name="Loading" component={LoginLoading} options={loginOptions}/> */}
    </MockspaceStack.Navigator>
  );
}