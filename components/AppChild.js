import React, {useEffect, useState} from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppNavigator from "../navigators/AppNavigator";

import {useSelector} from "react-redux";

import Themes from "../data/themes";
const AppChild = () => {
  const[appliedTheme,setAppliedTheme] = useState(Themes[1]);
  const currentTheme = useSelector(state => state.user.theme);

  useEffect(() => {
    const index = Themes.findIndex(t => t.label === currentTheme);
    setAppliedTheme(Themes[index]);

  },[currentTheme]);

  return (
    <PaperProvider theme={appliedTheme}>
      <StatusBar style={appliedTheme.dark ? "light": "dark"} backgroundColor={appliedTheme.primary}/>
      <SafeAreaProvider>
        <NavigationContainer theme={appliedTheme}>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default AppChild;
