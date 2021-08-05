import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Accordion = (props) => {

    const [expand, setExpand] = useState(false);
    const toggleAccordion = () => {
        setExpand(!expand);
    }

    return (
        <View  style={styles.accordionContainer}>
        <TouchableNativeFeedback onPress={toggleAccordion}>
            <View style={styles.accordion}>
                <View style={styles.header}>
                    <View style={styles.title}>
                    <MaterialCommunityIcons style={styles.titleIcon} name={props.icon} size={24} color={props.color ? props.color : "gray"} />
                    <Text style={styles.titleText}>{props.title}</Text>
                    </View>
                <MaterialCommunityIcons name={expand ? "menu-up":"menu-down"} size={24} color="black" />
                </View>
                {expand ? 
                <View style={styles.body}>

                {props.children}

                </View>
                    : null}
                <View>
            </View>
        </View>
        </TouchableNativeFeedback>
    </View>
    )
}

export default Accordion

const styles = StyleSheet.create({
    accordionContainer: {
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: 10,
    },
    accordion: {
        padding: 20,
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        flex: 1,
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 16,
        fontFamily: "WorkSans_500Medium",
        marginHorizontal: 10,
    },
    body: {
        paddingLeft: 20,
        marginTop: 10,
    }
})
