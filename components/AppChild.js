import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useSelector } from "react-redux";

import Login from "../screens/Login";
import DrawerNavigator from "../navigators/DrawerNavigator";
import Routes from "../screens/Routes";

import AppNavigator from "../navigators/AppNavigator";

const AppChild = () => {

  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>

      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default AppChild;
