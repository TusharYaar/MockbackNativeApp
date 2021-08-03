import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import {useSelector} from 'react-redux';


const Routes = () => {

    const routes = useSelector(state => state.mockspaces.currentMockspace.routes);
    console.log(routes);

    return (
        <View>
            <Text>Routes</Text>
        </View>
    )
}

export default Routes

const styles = StyleSheet.create({})
