import React from 'react';
import { StyleSheet,FlatList} from 'react-native'

import {useSelector} from 'react-redux';

import RouteCard from "../components/RouteCard";


const Routes = () => {

    const routes = useSelector(state => state.mockspaces.currentMockspace.routes);
    return (
        <FlatList data={routes} keyExtractor={item => item._id} renderItem = {({item}) => <RouteCard route={item} /> } />
    )
}

export default Routes

const styles = StyleSheet.create({})
