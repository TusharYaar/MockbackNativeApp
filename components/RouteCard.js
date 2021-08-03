import React from "react";
import { StyleSheet, View,TouchableNativeFeedback } from 'react-native'

import { Card, Button, Subheading } from 'react-native-paper';
const RouteCard = ({route}) => {
    return (
        <View style={styles.cardContainer}>
        <TouchableNativeFeedback onPress={() => {console.log(route._id)}} >
            <Card style={styles.card}>
            <Subheading>{route.pathname}</Subheading>
            </Card>
        </TouchableNativeFeedback>
        </View>
    )
}

export default RouteCard;

const styles = StyleSheet.create({
    cardContainer: {marginVertical:5,
        marginHorizontal:5,
},
card: {
    padding: 10,
}
})
