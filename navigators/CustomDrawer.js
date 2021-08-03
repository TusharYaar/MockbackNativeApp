import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../components/Button';
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
    return (
        <View {...props} style={styles.screen}>
            <DrawerContentScrollView {...props}>
            <Text>Logged In user: {user.email}</Text>
            <View style={styles.flex}>            
                <DrawerItemList {...props} />
            </View>
            </DrawerContentScrollView>
            <Button onPress={handleLogoutBtnClick}>Logout</Button>
        </View>

    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    flex: {
        flex: 1,
    }
})
