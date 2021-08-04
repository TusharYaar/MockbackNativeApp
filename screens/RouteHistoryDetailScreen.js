import React from 'react';
import { StyleSheet, Text, View } from 'react-native'


import {useSelector} from 'react-redux';

const RouteHistoryDetailScreen = ({route}) => {
   const routeHistoryId = route.params.routeHistoryId
    const routeDetail = useSelector(state => state.mockspaces.currentMockspace.routeHistory.find(route => route._id === routeHistoryId));

    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default RouteHistoryDetailScreen

const styles = StyleSheet.create({})
