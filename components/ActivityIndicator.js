import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {ActivityIndicator} from "react-native-paper";
import { useTheme } from '@react-navigation/native';
const AI = ({color, size}) => {
    const {colors } = useTheme();
    return (
        <ActivityIndicator style={styles.indicator} animating={true} size={size} color={color === "secondary" ? colors.accent : colors.primary} />

    )
}

export default AI;

const styles = StyleSheet.create({
    indicator: {
        marginVertical: 24,
    }
    
})
