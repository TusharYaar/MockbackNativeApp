import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import {useSelector} from 'react-redux';
const OverviewScreen = () => {

    const route = useSelector(state => state.mockspaces.currentMockspace);
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default OverviewScreen

const styles = StyleSheet.create({})
