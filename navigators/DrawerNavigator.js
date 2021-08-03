import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

// import TabNavigator from "./TabNavigator"

import {MockspaceStackNavigator} from "./StackNavigators"
import SettingScreen from '../screens/SettingScreen';

const Drawer = createDrawerNavigator();


const DrawerNavigator = (props) => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} >
        <Drawer.Screen name="Feed" component={MockspaceStackNavigator}  />
        <Drawer.Screen name="Settings" component={SettingScreen}  />
      </Drawer.Navigator>
    )
}

export default DrawerNavigator

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red"
    }
})
