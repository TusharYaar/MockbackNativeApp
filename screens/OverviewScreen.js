import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { Title, Paragraph, Caption, Button } from "react-native-paper";

import Card from "../components/Card";
import Accordion from "../components/Accordion";

import { ACCESSLEVEL } from "../data/mappings";
import { useSelector, useDispatch } from "react-redux";

import { useTheme } from '@react-navigation/native';

import { updateMockspaces } from "../store/actions/mockspaces";
const OverviewScreen = () => {
  const mockspace = useSelector((state) => state.mockspaces.currentMockspace);
  const userEmail = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  
  const {colors} = useTheme();
  if (!mockspace._id) {
    return <View />;
  }
  const accessDetails = mockspace.hasAccess.map((u) => (
    <View key={u.email} style={styles.accessUser}>
      <Caption>{u.email}</Caption>
      <View style={styles.accessLevelContainer}>
      {userEmail === u.email ? <View style={[styles.myLevel,{backgroundColor:colors.accent}]} /> : null}
      <Caption>{ACCESSLEVEL[u.accessLevel]}</Caption>
      </View>
    </View>
  ));
  return (
    <ScrollView style={styles.screen}>
      <Text style={[styles.title, {color: colors.text}]}> {mockspace.mockspaceName} </Text>
      <View style={styles.cardContainer}>
        <Card style={styles.card} title="Routes">     
            <Paragraph >{`${mockspace?.routes?.length} out of ${mockspace?.maxRoutes} routes used`}</Paragraph>
        </Card>
        <View style={{ width: 10 }} />
        <Card style={styles.card} title="Route History"> 
            <Paragraph>{`${mockspace?.routeHistory?.length} out of ${mockspace?.maxRouteHistory} history showing`}</Paragraph>
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
