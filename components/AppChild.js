import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useSelector } from "react-redux";

import { LoginStackNavigator } from "../navigators/StackNavigators";
import DrawerNavigator from "../navigators/DrawerNavigator";

const AppChild = () => {
  const user = useSelector((state) => state.user);
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <NavigationContainer>
          {!user.autoLogin && user.email && <DrawerNavigator />}
          {(user.autoLogin || !user.email) && <LoginStackNavigator />}
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default AppChild;
