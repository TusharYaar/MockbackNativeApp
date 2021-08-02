import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

import Login from "../screens/Login";
import Routes from "../screens/Routes";
const Drawer = createDrawerNavigator();


const DrawerNavigator = (props) => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Feed" component={Routes}  />
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
