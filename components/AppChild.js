import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import { LoginStackNavigator } from "../navigators/StackNavigators";

const AppChild = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <LoginStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppChild;

