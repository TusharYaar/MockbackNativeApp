import React from 'react';
import { StyleSheet,FlatList, View} from 'react-native'

import { Paragraph } from 'react-native-paper';
import {useSelector} from 'react-redux';

import RouteCard from "../components/RouteCard";


const Routes = () => {

    const routes = useSelector(state => state.mockspaces.currentMockspace.routes);
    if (routes.length === 0) {
        return <View style={styles.textContainer}><Paragraph  style={styles.text}>No routes found. Head to the website to create some routes</Paragraph></View>;
    }
    return (
        <FlatList style={styles.screen} data={routes} keyExtractor={item => item._id} renderItem = {({item}) => <RouteCard route={item} /> } />
    )
}

export default Routes

const styles = StyleSheet.create({
    screen: {
        paddingVertical: 5,
        paddingHorizontal:10,
    },textContainer: {
        alignItems: 'center',
        marginTop: 10,
    }    ,
    text: {
        textAlign: 'center',
        maxWidth: "70%"
    }
})
