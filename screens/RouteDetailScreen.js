import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import * as WebBrowser from "expo-web-browser";

import {
  Paragraph,
  Headline,
  Subheading,
  IconButton,
} from "react-native-paper";
import { useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";

import { subDays, format, parseISO, getDate, parse } from "date-fns";
import { RESPONSE } from "../data/mappings";
import ServerGenResponse from "../components/ServerGenResponse";
import CustomHeader from "../components/CustomHeader";
import DisplayCode from "../components/DisplayCode";
import LastView from "../components/LastView";

const windowWidth = Dimensions.get("window").width;

const RouteDetailScreen = ({ route, navigation }) => {
  const routeId = route.params.routeId;
  const routeDetail = useSelector((state) =>
    state.mockspaces.currentMockspace.routes.find(
      (route) => route._id === routeId
    )
  );
  const routeCalls = useSelector((state) =>
    state.mockspaces.currentMockspace.routeHistory.filter(
      (route) => route.pathname === routeDetail.pathname
    )
  );
  const mockspaceName = useSelector(
    (state) => state.mockspaces.currentMockspace.mockspaceName
  );
  const { colors } = useTheme();

  const days = [6, 5, 4, 3, 2, 1, 0].map((day) =>
    format(subDays(new Date(), day), "d-MMM")
  );
  const lineDataset = [0].map((route, index) => {
    let arr = [0, 0, 0, 0, 0, 0, 0];
    routeCalls.forEach((r) => {
      let diff = getDate(parseISO(r.createdOn));
      let index = days.findIndex(
        (day) => getDate(parse(day, "d-MMM", new Date())) === diff
      );
      if (index > -1) arr[index]++;
    });
    return {
      data: arr,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 4,
    };
  });
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
      <LineChart
        data={{
          labels: days,
          datasets: lineDataset,
        }}
        width={windowWidth - 20} // from react-native
        height={220}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <Subheading>
        Created On:
        {format(parseISO(routeDetail.createdOn), "dd-MMM-y h:mm:ss a")}
      </Subheading>
      <Subheading>Method Accepted: {routeDetail.method}</Subheading>
      <Subheading>Response HTTP Status: {routeDetail.httpStatus}</Subheading>
      <Subheading>
        Require Authorization: {routeDetail.authorization ? "True" : "False"}
      </Subheading>
      <Subheading>
        Custom Headers: {routeDetail.customHeader ? "True" : "False"}
      </Subheading>
      {routeDetail.customHeader && (
        <CustomHeader headerPairs={routeDetail.responseHeader} />
      )}
      <Subheading>
        Response Type: {RESPONSE[routeDetail.responseType]}
      </Subheading>
      {routeDetail.responseType === "serverGenerated" && (
        <ServerGenResponse customBody={routeDetail.customBody} />
      )}
      {routeDetail.responseType === "customResponse" && (
        <DisplayCode code={routeDetail.customBody} title="Custom Body" />
      )}
      <LastView />
    </ScrollView>
  );
};

export default RouteDetailScreen;

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
  customResponse: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
