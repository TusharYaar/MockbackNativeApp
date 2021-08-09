import React from 'react'
import { StyleSheet, View,Dimensions,ImageBackground  } from 'react-native';

import {Title,Paragraph} from "react-native-paper"

import Images from "../data/themeImages"

const windowWidth = Dimensions.get('window').width;
const ThemeCard = ({theme}) => {
    return (
        <View style={styles.card}>
            <View style={[styles.container]}>
            <ImageBackground
        style={styles.themeImage}
        source={Images[theme.label]}
        resizeMode="center"
      />
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
    container: {
        position: 'relative',
        flexGrow: 1,
        height: "80%",
        borderRadius: 4,

    },
    textContainer: {
        height: "20%",
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    themeImage: {
        width: "100%",
        height: "100%",
        borderRadius: 4,
        top: 0,
        position: "absolute",
    
    //    top: "20%",
    }

})
