import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login, {loginOptions} from "../screens/Login";
import LoginLoading from "../screens/LoginLoading";

const LoginStack = createStackNavigator();

export const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator initialRouteName="Loading">
      <LoginStack.Screen name="Loading" component={LoginLoading} options={loginOptions}/>
      <LoginStack.Screen name="Login" component={Login} options={loginOptions}/>
    </LoginStack.Navigator>
  );
}