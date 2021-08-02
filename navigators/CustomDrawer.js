import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';



import {useSelector} from 'react-redux';


const CustomDrawer = (props) => {
    console.log(props);
    const user = useSelector(state => state.user);
    return (
        <SafeAreaView>
            <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <Text>Logged In user: {user.email}</Text>
            </DrawerContentScrollView>
        </SafeAreaView>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
})
