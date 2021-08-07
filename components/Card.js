import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { Title } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
const Card = (props) => {
  const { colors } = useTheme();

  return (
    <View
      style={[styles.card, { backgroundColor: colors.surface }, props.style]}
    >
      <Title style={props.titleColor ? {color: props.titleColor} : null}>{props.title}</Title>
      <View>{props.children}</View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    elevation: 2,
    padding: 10,
  },
});
