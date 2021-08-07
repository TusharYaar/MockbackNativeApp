import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import {Button} from "react-native-paper";

const SignupScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text>Sign up</Text>
            <Button onPress={() => {navigation.goBack();}}>Back</Button>
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
