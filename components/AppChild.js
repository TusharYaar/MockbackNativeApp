import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import { LoginStackNavigator } from "../navigators/StackNavigators";

const AppChild = () => {
  return (
    <PaperProvider>
        <StatusBar style="auto" />
      <NavigationContainer>
        <LoginStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppChild;

