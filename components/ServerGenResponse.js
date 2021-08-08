import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Paragraph } from "react-native-paper";
import Accordion from "./Accordion";

const ServerGenResponse = ({ customBody }) => {
  const { pairs } = JSON.parse(customBody);
  const mapPairs = pairs.map((pair, index) => {
    return (
      <Paragraph key={index}>
        {pair.key} : {pair.display}
      </Paragraph>
    );
  });
  return (
    <Accordion title="Pairs" style={styles.accordion}>
      {mapPairs}
    </Accordion>
  );
};

export default ServerGenResponse;

const styles = StyleSheet.create({
  accordion: { marginVertical: 10 },
});
