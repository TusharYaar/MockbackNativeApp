import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";

import { useTheme } from '@react-navigation/native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Accordion = (props) => {
  const [expand, setExpand] = useState(false);
  const {dark,colors} = useTheme();
  const toggleAccordion = () => {
    setExpand(!expand);
  };

  return (
    <View style={[styles.accordionContainer, {backgroundColor: colors.surface},props.style]}>
      <TouchableNativeFeedback onPress={toggleAccordion} background={TouchableNativeFeedback.Ripple(dark? "black": "gray", false)}>
        <View style={[styles.accordion,{backgroundColor: colors.surface}]}>
          <View style={styles.header}>
            <View style={styles.title}>
              <MaterialCommunityIcons
                style={styles.titleIcon}
                name={props.icon}
                size={24}
                color={props.color ? props.color : "gray"}
              />
              <Text style={[styles.titleText,{color: colors.text}]}>{props.title}</Text>
            </View>
            <MaterialCommunityIcons
              name={expand ? "menu-up" : "menu-down"}
              size={24}
              color={ colors.text}
            />
          </View>
          {expand ? <View style={styles.body}>{props.children}</View> : null}
          <View></View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  accordionContainer: {
    borderRadius: 5,
    overflow: "hidden",
    elevation: 2,
  },
  accordion: {
    padding: 20,
    borderRadius: 4,
    
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
    flexDirection: "row",
  },
  titleText: {
    fontSize: 16,
    fontFamily: "WorkSans_500Medium",
    marginHorizontal: 10,
  },
  body: {
    paddingLeft: 20,
    marginTop: 10,
  },
});
