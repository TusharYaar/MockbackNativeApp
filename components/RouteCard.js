import React from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Accordion from "./Accordion";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Subheading, Text } from "react-native-paper";

import { RESPONSE } from "../data/mappings";
import Button from "../components/Button";
const RouteCard = ({ route, mockspace }) => {
  const navigation = useNavigation();
  return (
    <Accordion
      title={`/${route.pathname}`}
      icon={route.authorization ? "lock" : "lock-open-variant"}
      style={styles.card}
    >
      <Text>
        {`https://mockback.herokuapp.com/${mockspace}/r/` + route.pathname}
      </Text>
      <Text>
        {route.method} {route.httpStatus}
      </Text>
      {route.customHeader && <Text>Has custom headers</Text>}
      <Text>{RESPONSE[route.responseType]}</Text>
      <Button
        style={styles.btn}
        onPress={() => {
          navigation.navigate("RouteDetail", { routeId: route._id });
        }}
      >
        View Details
      </Button>
    </Accordion>
  );
};

export default RouteCard;

const styles = StyleSheet.create({
  cardContainer: { marginVertical: 5, marginHorizontal: 5 },
  card: {
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    alignSelf: "flex-end",
    marginVertical: 10,
  },
});
