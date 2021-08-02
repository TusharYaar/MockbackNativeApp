import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppNavigator from "../navigators/AppNavigator";

import {useSelector} from "react-redux";

const AppChild = () => {

  const theme = useSelector(state => state.user.theme);
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
