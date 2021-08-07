import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigationState, useTheme } from "@react-navigation/native";

import { IconButton } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentMockspace } from "../store/actions/mockspaces";

import TabNavigator from "./TabNavigator";
import RouteDetailScreen from "../screens/RouteDetailScreen";
import RouteHistoryDetailScreen from "../screens/RouteHistoryDetailScreen";
import Login from "../screens/Login";
import SignupScreen from "../screens/SignupScreen";
import SettingScreen from "../screens/SettingScreen";
import ThemesScreen from "../screens/ThemesScreen";

const MockspaceStack = createStackNavigator();
const AuthStack = createStackNavigator();
const SettingsStack = createStackNavigator();

export const MockspaceStackNavigator = ({ mockspaceName }) => {
  const { colors } = useTheme();
  const currentMockspaceId = useSelector(
    (state) => state.mockspaces.currentMockspaceId
  );
  const dispatch = useDispatch();
  const state = useNavigationState((state) => state);
  const { history, routes } = state;
  useEffect(() => {
    const item = history[history.length - 1];
    if (!item.key || item.type !== "route") return;
    const route = routes.find((r) => r.key === item.key);
    if (
      ["Settings"].includes(route.name) ||
      currentMockspaceId === route.params.mockspaceId
    )
      return;
    dispatch(setCurrentMockspace(route.params.mockspaceId));
  }, [history, routes]);

  return (
    <MockspaceStack.Navigator
    screenOptions={headerBackground(colors)}
    >
      <MockspaceStack.Screen
        name="Mockspace"
        component={TabNavigator}
        options={({ navigation }) =>
        screenOptions(navigation, colors, mockspaceName)
      }
      />
      <MockspaceStack.Screen name="RouteDetail" component={RouteDetailScreen} />
      <MockspaceStack.Screen
        name="RouteHistoryDetail"
        component={RouteHistoryDetailScreen}
      />
    </MockspaceStack.Navigator>
  );
};

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

export const SettingsStackNavigator = () => {
  const { colors } = useTheme();
  return (
    <SettingsStack.Navigator screenOptions={headerBackground(colors)}>
      <SettingsStack.Screen
        name="Setting"
        component={SettingScreen}
        options={({ navigation }) =>
          screenOptions(navigation, colors, "Settings")
        }
      />
      <SettingsStack.Screen
        name="Themes"
        component={ThemesScreen}
        
      />
    </SettingsStack.Navigator>
  );
};

const headerBackground = (colors) => ({
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTitleStyle: { fontFamily: "WorkSans_500Medium" },
  headerTintColor: colors.headerText,
});

const screenOptions = (navigation, colors, title) => ({
  title,
  headerLeft: () => (
    <IconButton
      icon="menu"
      size={24}
      color={colors.text}
      onPress={() => navigation.toggleDrawer()}
    />
  )
});
