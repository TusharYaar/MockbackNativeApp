import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import { useNavigation, useTheme } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";

import { Text, IconButton } from "react-native-paper";
import {format,parseISO} from "date-fns";
import Accordion from "./Accordion";
import Button from "../components/Button";
const windowWidth = Dimensions.get("window").width;

const RouteHistoryCard = ({ route, mockspace }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const openLink = () => {
    WebBrowser.openBrowserAsync(
      `https://mockback.herokuapp.com/${mockspace}/r/${route.pathname}`
    );
  };
  return (
    <Accordion
      title={`/${route.pathname}`}
      icon={route.authorization ? "lock" : "lock-open-variant"}
      style={styles.card}
    >
      <View style={styles.urlContainer}>
        <Text>
          {`https://mockback.herokuapp.com/${mockspace}/r/` + route.pathname}
        </Text>
        <IconButton
          icon="monitor-share"
          color={colors.accent}
          size={20}
          onPress={openLink}
        />
      </View>
      <Text>{route.method} {route.httpStatus}</Text>
      <Text>{format(parseISO(route.createdOn), "dd-MMM-y h:mm:ss a")}</Text>
      <Button
        onPress={() => {
          navigation.navigate("RouteHistoryDetail",{routeId: route._id});
        }}
        style={styles.btn}
      >
        inspect
      </Button>
    </Accordion>
  );
};

export default RouteHistoryCard;

const styles = StyleSheet.create({
  cardContainer: { marginVertical: 5, marginHorizontal: 5 },
  card: {
    marginVertical: 5,
  },
  urlContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    width: windowWidth - 120,
  },
  btn: {
    alignSelf: "flex-end",
    marginVertical: 10,
  },
});
