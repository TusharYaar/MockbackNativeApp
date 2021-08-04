import React from 'react';
import { StyleSheet, FlatList } from 'react-native'
import RouteHistoryCard from '../components/RouteHistoryCard';

import {useSelector } from 'react-redux'
const RoutesHistoryScreen = () => {

    const routes = useSelector(state => state.mockspaces.currentMockspace.routeHistory);
    return (
        <FlatList data={routes} keyExtractor={item => item._id} renderItem = {({item}) => <RouteHistoryCard route={item} /> } />
    )
}

export default RoutesHistoryScreen

const styles = StyleSheet.create({})
