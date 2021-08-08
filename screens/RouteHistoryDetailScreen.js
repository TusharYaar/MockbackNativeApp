import React from "react";
import { StyleSheet, Text, View, ScrollView,Dimensions } from "react-native";
import * as WebBrowser from "expo-web-browser";

import {
  Paragraph,
  Headline,
  Subheading,
  IconButton,
} from "react-native-paper";
import { useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";
import { format, parseISO} from "date-fns";

import DisplayCode from "../components/DisplayCode";
import LastView from "../components/LastView";

const windowWidth = Dimensions.get("window").width;
const RouteHistoryDetailScreen = ({ route }) => {
  const { routeId } = route.params;
  const { colors } = useTheme();
  const routeDetail = useSelector((state) =>
    state.mockspaces.currentMockspace.routeHistory.find(
      (route) => route._id === routeId
    )
  );
  const mockspaceName = useSelector(
    (state) => state.mockspaces.currentMockspace.mockspaceName
  );
  const openLink = () => {
    WebBrowser.openBrowserAsync(
      `https://mockback.herokuapp.com/${route.params.mockspace}/r/${routeDetail.pathname}`
    );
  };
  return (
    <ScrollView style={styles.screen}>
            <Text style={[styles.title, { color: colors.text }]}>
        {`/${routeDetail.pathname}`}
      </Text>
      <Headline> {mockspaceName} </Headline>
      <View style={styles.urlContainer}>
        <Paragraph style={{ width: windowWidth - 63 }}>
          {`https://mockback.herokuapp.com/${route.params.mockspace}/r/${routeDetail.pathname}`}
        </Paragraph>
        <IconButton
          icon="monitor-share"
          color={colors.accent}
          size={20}
          onPress={openLink}
        />
      </View>
      <Subheading>
        Created On:
        {format(parseISO(routeDetail.createdOn), "dd-MMM-y h:mm:ss a")}
      </Subheading>
      <Subheading>Method Accepted: {routeDetail.method}</Subheading>
      <Subheading>Response HTTP Status: {routeDetail.httpStatus}</Subheading>
    <DisplayCode code={routeDetail.requestHeader} title="Request Headers"/>
    <DisplayCode code={routeDetail.requestBody} title="Request Body"/>
    <DisplayCode code={routeDetail.responseHeader} title="Response Headers"/>
    <DisplayCode code={routeDetail.responseBody} title="Response Body"/>
    <LastView/>
    </ScrollView>
  );
};

export default RouteHistoryDetailScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
        paddingBottom: 40,
      },
        title: {
        fontSize: 30,
        fontFamily: "WorkSans_500Medium",
      },
      urlContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginVertical: 5,
      },
      view: {
        marginVertical: 10,
        height: 10,
      },
});
