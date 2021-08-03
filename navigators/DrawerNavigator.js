import React from "react";
import { StyleSheet } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";

import MockspaceLoadingScreen from "../screens/MockspaceLoadingScreen";
import NoMockspaceScreen from "../screens/NoMockspaceScreen";

import { useSelector } from "react-redux";

import { MockspaceStackNavigator } from "./StackNavigators";
import SettingScreen from "../screens/SettingScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
  const mockspaces = useSelector((state) => state.mockspaces);

  if (!mockspaces.loaded) return <MockspaceLoadingScreen />;
  else if (mockspaces.mockspaces.length === 0) return <NoMockspaceScreen />;

  const mockspaceDrawerItems = mockspaces.mockspaces.map((space) => (
    <Drawer.Screen
      name={space.mockspaceName}
      key={space._id}
      
  >
   {(props) => <MockspaceStackNavigator {...props} mockspaceName= {space.mockspaceName} mockspaceId={space._id}/> }
    </Drawer.Screen>
  ));

  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      {mockspaceDrawerItems}
      <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
