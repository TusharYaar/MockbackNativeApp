import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import { LoginStackNavigator } from "../navigators/StackNavigators";

import {useSelector } from "react-redux";


const AppChild = () => {
  const user = useSelector(state => state.user);
  return (
    <PaperProvider>
        <StatusBar style="auto" />
      <NavigationContainer>

        {(user.autoLogin || !user.email) && <LoginStackNavigator />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppChild;

