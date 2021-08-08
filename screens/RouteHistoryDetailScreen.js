import React from 'react';
import { StyleSheet, Text, View } from 'react-native'


import {useSelector} from 'react-redux';

const RouteHistoryDetailScreen = ({route}) => {
   const { routeId } = route.params
    const routeDetail = useSelector(state => state.mockspaces.currentMockspace.routeHistory.find(route => route._id === routeId));
    console.log(routeDetail.pathname);  
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default RouteHistoryDetailScreen

const styles = StyleSheet.create({})
