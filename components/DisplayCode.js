import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Caption, Paragraph  } from 'react-native-paper'
import { useTheme } from '@react-navigation/native'
const DisplayCode = ({code,title="Code"}) => {
    const {colors} = useTheme();
    return (
        <View  style={[styles.customResponse, { backgroundColor: colors.surface }]}>
            <Paragraph >{title}</Paragraph >
            <Caption>{code}</Caption>
        </View>
    )
}

export default DisplayCode

const styles = StyleSheet.create({
    customResponse: {
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
      },
})
