import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppNavigator from "../navigators/AppNavigator";

import {useSelector} from "react-redux";

import Themes from "../data/themes";
const AppChild = () => {
  const theme = Themes[0];
  const currentTheme = useSelector(state => state.user.theme);
  return (
    <PaperProvider theme={theme}>
      <StatusBar style={theme.dark ? "light": "dark"} />
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default AppChild;
