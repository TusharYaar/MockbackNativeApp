import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { Title, Card, Paragraph, Caption } from "react-native-paper";

import Accordion from "../components/Accordion";

import { ACCESSLEVEL } from "../data/mappings";

import { useSelector } from "react-redux";
const OverviewScreen = () => {
  const mockspace = useSelector((state) => state.mockspaces.currentMockspace);
  const userEmail = useSelector((state) => state.user.email);

  if (!mockspace._id) {
    return <View />;
  }
  const accessDetails = mockspace.hasAccess.map((u) => (
    <View key={u.email} style={styles.accessUser}>
      <Caption>{u.email}</Caption>
      <View style={styles.accessLevelContainer}>
      {userEmail === u.email ? <View style={styles.myLevel} /> : null}
      <Caption>{ACCESSLEVEL[u.accessLevel]}</Caption>
      </View>
    </View>
  ));
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}> {mockspace.mockspaceName} </Text>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Routes</Title>
            <Paragraph>{`${mockspace?.routes?.length} out of ${mockspace?.maxRoutes} routes used`}</Paragraph>
          </Card.Content>
        </Card>
        <View style={{ width: 10 }} />
        <Card style={styles.card}>
          <Card.Content>
            <Title>Routes History</Title>
            <Paragraph>{`${mockspace?.routeHistory?.length} out of ${mockspace?.maxRouteHistory} history showing`}</Paragraph>
          </Card.Content>
        </Card>
      </View>
      <Accordion title="Acess Details" icon="account-group" style={styles.accordion}>
        {accessDetails}
      </Accordion>
    </ScrollView>
  );
};

export default OverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: "WorkSans_500Medium",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
  },
  accessUser: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
  },
  accessLevelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  myLevel: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#00b0ff",
    marginRight: 5,
  },
  accordion: {
    marginVertical: 10,
  }
});
