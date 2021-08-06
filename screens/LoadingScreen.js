import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { useTheme } from "@react-navigation/native";


const LoadingScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Loading</Text>
        </View>
    )
}

export default LoadingScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
