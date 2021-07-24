import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login, {loginOptions} from "../screens/Login";
import LoginLoading from "../screens/LoginLoading";

const LoginStack = createStackNavigator();

export const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Home" component={Login} options={loginOptions}/>
      <LoginStack.Screen name="Loading" component={LoginLoading} options={loginOptions}/>
    </LoginStack.Navigator>
  );
}