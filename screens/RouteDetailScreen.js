import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import {useSelector} from 'react-redux';

const RouteDetailScreen = ({route}) => {
    routeId = route.params.routeId
    const routeDetail = useSelector(state => state.mockspaces.currentMockspace.routes.find(route => route._id === routeId));

    return (
        <View>
            <Text>
                {routeDetail.pathname}
            </Text>
        </View>
    )
}

export default RouteDetailScreen

const styles = StyleSheet.create({})
