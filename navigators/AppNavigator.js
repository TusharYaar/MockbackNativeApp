import React, { useEffect } from "react";

import { Appearance } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  noUser,
  autoLoginUser,
  updateUserTheme,
  setOnboarding,
} from "../store/actions/user";

import AsyncStorage from "@react-native-async-storage/async-storage";

import DrawerNavigator from "../navigators/DrawerNavigator";
import LoadingScreen from "../screens/LoadingScreen";
import { AuthStackNavigator } from "../navigators/StackNavigators";
import OnboardingScreen from "../screens/OnboardingScreen";
const AppNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const value = await AsyncStorage.getItem("@user_details");
        if (value !== null) {
          const data = JSON.parse(value);
          if (data.email && data.token) return dispatch(autoLoginUser(data));
          else if (data.theme) {
            dispatch(updateUserTheme(data.theme));
          }
          if (!data.onboardingDone) {
            dispatch(setOnboarding(false));
          }
        } // value previously stored
        else {
          const color = Appearance.getColorScheme();
          if (color === "dark")
            dispatch(updateUserTheme("darkBlue"));
          else dispatch(updateUserTheme("lightBlue"));
          dispatch(setOnboarding(false));
        }
        return dispatch(noUser());
      } catch (e) {
        return dispatch(noUser()); // error reading value
      }
    };
    getUser();
  }, [dispatch]);

  const user = useSelector((state) => state.user);

  if (!user.onboardingDone) return <OnboardingScreen />;
  if (user.autoLogin) return <LoadingScreen />;
  else if (!user.email) return <AuthStackNavigator />;
  else if (user.email) return <DrawerNavigator />;
};

export default AppNavigator;
