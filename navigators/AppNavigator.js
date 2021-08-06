import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { noUser, autoLoginUser } from "../store/actions/user";

import AsyncStorage from "@react-native-async-storage/async-storage";

import Login from "../screens/Login";
import DrawerNavigator from "../navigators/DrawerNavigator";
import LoadingScreen from "../screens/LoadingScreen";

const AppNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const value = await AsyncStorage.getItem("@user_details");
        if (value !== null) return dispatch(autoLoginUser(JSON.parse(value))); // value previously stored

        return dispatch(noUser());
      } catch (e) {
        return dispatch(noUser()); // error reading value
      }
    };
    getUser();
  }, [dispatch]);

  const user = useSelector((state) => state.user);

  if (user.autoLogin) return <LoadingScreen />;
  else if (!user.email) return <Login />;
  else if (user.email) return <DrawerNavigator />;
};

export default AppNavigator;

const styles = StyleSheet.create({});
