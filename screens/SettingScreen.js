import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import Button from '../components/Button';
const SettingScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Button onPress={()=> navigation.navigate("Themes")}>Go to Themes</Button>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    screen: {   
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})
