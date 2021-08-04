import React from "react";
import { StyleSheet, View,TouchableNativeFeedback } from 'react-native'

import { useNavigation } from '@react-navigation/native';



import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card, Button, Subheading } from 'react-native-paper';
const RouteHistoryCard = ({route}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.cardContainer}>
        <TouchableNativeFeedback onPress={() => {navigation.navigate("RouteHistoryDetail", {routeHistoryId: route._id})}} >
            <Card style={styles.card}>
                <View style={styles.row}>
                <MaterialCommunityIcons name={route.authorization ? "lock" : "lock-open-variant"} size={20} color={route.authorization ? "green" : "red"} />
            <Subheading>/{route.pathname}</Subheading>

                </View>
            </Card>
        </TouchableNativeFeedback>
        </View>
    )
}

export default RouteHistoryCard;

const styles = StyleSheet.create({
    cardContainer: {marginVertical:5,
        marginHorizontal:5,
},
card: {
    padding: 10, 
},
 row: {
     flexDirection: 'row',
     alignItems: 'center',
 }
})