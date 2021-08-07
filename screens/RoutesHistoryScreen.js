import React from "react";
import { StyleSheet, FlatList,View } from "react-native";
import { Paragraph } from "react-native-paper";

import RouteHistoryCard from "../components/RouteHistoryCard";

import { useSelector } from "react-redux";
const RoutesHistoryScreen = () => {
  const routeHistory = useSelector(
    (state) => state.mockspaces.currentMockspace.routeHistory
  );


  if (routeHistory.length === 0) {
    return <View style={styles.textContainer}><Paragraph  style={styles.text}>No routes called. Call some routes and monitor them here </Paragraph></View>;
}

  return (
    <FlatList
      style={styles.screen}
      data={routeHistory}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <RouteHistoryCard route={item} />}
    />
  );
};

export default RoutesHistoryScreen;

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
}    ,
text: {
    textAlign: 'center',
    maxWidth: "70%"
}
});
