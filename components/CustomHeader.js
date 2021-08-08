import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Paragraph} from "react-native-paper";
import Accordion from './Accordion';

const ServerGenResponse = ({headerPairs}) => {
    const pairs = JSON.parse(headerPairs);
    const mapPairs = pairs.map((pair, index) => {
        return (
            <Paragraph key={index}>
                {pair.key} : {pair.value}
            </Paragraph>
        );
    })
    return (
        <Accordion title="Custom Headers" style={styles.accordion}>
            {mapPairs}
        </Accordion>
    )
}

export default ServerGenResponse

const styles = StyleSheet.create({
    accordion: {marginVertical:10}
})
