import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { useSelector } from "react-redux";

import Login from "../screens/Login";
import DrawerNavigator from "../navigators/DrawerNavigator";
import Routes from "../screens/Routes";


const AppNavigator = () => {
    const user = useSelector((state) => state.user);
    console.log("From Appchild", user.token);

    if(user.autoLogin) return <Login />
    else if (!user.email) return <Login />;
    else if(user.email) return <Routes />; 
}

export default AppNavigator

const styles = StyleSheet.create({})
