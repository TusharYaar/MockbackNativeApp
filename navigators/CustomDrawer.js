import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Avatar, Button,Headline  } from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';



import {useSelector,useDispatch} from 'react-redux';

import {logoutUser} from "../store/actions/user"

const CustomDrawer = (props) => {

    const dispatch = useDispatch();

    const handleLogoutBtnClick = () => {
        dispatch(logoutUser());
    }

    const user = useSelector(state => state.user);
    const mockspacesData = useSelector(state => state.mockspaces);
    return (
        <SafeAreaView {...props} style={styles.screen}>
            <View style={{backgroundColor: "red"}}>
                <View style={styles.userDetails}>
                <Avatar.Icon size={36} icon="account" />
                    <Headline  style={styles.userName}>{user.firstName + " " + user.lastName}</Headline >
                </View>
            <Text>{user.email}</Text>
            <View>
                <Text>{mockspacesData.mockspaces.length} Mockspaces</Text>
            </View>
            </View>
            <DrawerContentScrollView {...props}>
            <View style={styles.flex}>            
                <DrawerItemList {...props} />
            </View>
            </DrawerContentScrollView>
            <Button onPress={handleLogoutBtnClick} icon="logout-variant">Logout</Button>
        </SafeAreaView>

    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    flex: {
        flex: 1,
    },
    userDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    userName: {
        padding: 10,
    }
})
