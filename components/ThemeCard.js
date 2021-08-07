import React from 'react'
import { StyleSheet, View,Dimensions  } from 'react-native'

const windowWidth = Dimensions.get('window').width;

import {Title,Paragraph} from "react-native-paper"
const ThemeCard = ({theme}) => {
    return (
        <View style={styles.card}>
            <View style={[styles.imageContainer,{backgroundColor: theme.colors.accent}]}>

            </View>
            <View style={styles.textContainer}>
            <Title>{theme.label}</Title>
            <Paragraph>{theme.description}</Paragraph>
            </View>
        </View>
    )
}

export default ThemeCard

const styles = StyleSheet.create({
    card: {
        width: windowWidth,
        padding: 40,
        justifyContent: 'space-between',
     
    },
    imageContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderRadius: 4,
    },
    textContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
    }
})
