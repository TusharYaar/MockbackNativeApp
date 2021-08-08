import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import { useNavigation,useTheme } from "@react-navigation/native";
import * as WebBrowser from 'expo-web-browser';

import { Paragraph,IconButton } from "react-native-paper";

import { RESPONSE } from "../data/mappings";
import Button from "../components/Button";
import Accordion from "./Accordion";



const windowWidth = Dimensions.get('window').width;
const RouteCard = ({ route, mockspace }) => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  const openLink = () => {
    WebBrowser.openBrowserAsync(`https://mockback.herokuapp.com/${mockspace}/r/${route.pathname}`);
  }
  
  return (
    <Accordion
      title={`/${route.pathname}`}
      icon={route.authorization ? "lock" : "lock-open-variant"}
      style={styles.card}
    >
      <View style={styles.urlContainer}>
      <Paragraph>
        {`https://mockback.herokuapp.com/${mockspace}/r/` + route.pathname}
      </Paragraph>
      <IconButton icon="monitor-share"
      color={colors.accent}
    size={20}
    onPress={openLink} />
      </View>
      <Paragraph>
        {route.method} {route.httpStatus}
      </Paragraph>
      {route.customHeader && <Paragraph>Has custom headers</Paragraph>}
      <Paragraph>{RESPONSE[route.responseType]}</Paragraph>
      <Button
        style={styles.btn}
        onPress={() => {
          navigation.navigate("RouteDetail", { routeId: route._id, header: `/${route.pathname}`, mockspace});
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
  urlContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5, 
    width: windowWidth - 120
  }
});
