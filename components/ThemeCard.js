import React from 'react'
import { StyleSheet, View,Dimensions  } from 'react-native'

const windowWidth = Dimensions.get('window').width;

import {Title} from "react-native-paper"
const ThemeCard = ({theme}) => {
    return (
        <View style={styles.card}>
            <Title>{theme.label}</Title>
        </View>
    )
}

export default ThemeCard

const styles = StyleSheet.create({
    card: {
        width: windowWidth,
        padding: 40,
    }
})
