import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

import { Paragraph, Caption } from "react-native-paper";

import Card from "../components/Card";


import { ACCESSLEVEL } from "../data/mappings";
import LineColors from "../data/lineColors";
import { useSelector } from "react-redux";

import { useTheme } from '@react-navigation/native';
import { subDays, format, parseISO, getDate, parse } from "date-fns";


import {
  LineChart,
  ProgressChart,
} from "react-native-chart-kit";


const OverviewScreen = () => {
  const mockspace = useSelector((state) => state.mockspaces.currentMockspace);
  const userEmail = useSelector((state) => state.user.email);
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

  const days = [6, 5, 4, 3, 2, 1, 0].map((day) =>
    format(subDays(new Date(), day), "d-MMM")
  );
  const lineDataset = mockspace.routes.map((route, index) => {
      let arr = [0, 0, 0, 0, 0, 0, 0];
      mockspace.routeHistory.forEach((r) => {
        if (r.pathname === route.pathname) {
          let diff = getDate(parseISO(r.createdOn));
          let index = days.findIndex(
            (day) => getDate(parse(day, "d-MMM", new Date())) === diff
          );
          if (index > -1) arr[index]++;
        }
      });
      return {
        data: arr,
        color: () => `${LineColors[index % (LineColors.length - 1)]}`,
        strokeWidth:1
      };
    })

  return (
    <ScrollView style={styles.screen}>
      <Text style={[styles.title, {color: colors.text}]}> {mockspace.mockspaceName} </Text>
      <View style={styles.cardContainer}>
        <Card style={styles.card} title="Routes">     
            <Paragraph >{`${mockspace?.routes?.length} out of ${mockspace?.maxRoutes} routes used`}</Paragraph>
            <ProgressChart
    data={{    
          data: [
            mockspace?.routes?.length/mockspace?.maxRoutes
          ]
    }}
    width={Dimensions.get("window").width - 40} // from react-native
    height={120}
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, 1)`,
    }}
    style={{
      borderRadius: 10
    }}
  />
        </Card>
        <Card style={styles.card} title="Route History"> 
            <Paragraph>{`${mockspace?.routeHistory?.length} out of ${mockspace?.maxRouteHistory} history showing`}</Paragraph>
            <LineChart
    data={{
      labels: days,
      datasets: lineDataset || [{data: [Math.random()*30,Math.random()*30,Math.random()*30,Math.random()*30,Math.random()*30]}]
    }}
    width={Dimensions.get("window").width - 40} // from react-native
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
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
        </Card>
      </View>
      <Card title="Acess Details" style={styles.accessCard}>
      {accessDetails}
      <ProgressChart
    data={{    
          data: [
            mockspace?.hasAccess?.length/mockspace?.maxAccess
          ]
    }}
    width={Dimensions.get("window").width - 40} // from react-native
    height={120}
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: () => `rgba(255, 255, 255, 1)`,
    }}
    style={{
      marginVertical: 10,
      borderRadius: 10
    }}
  />
      
      </Card>
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
    flexDirection: "column",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    marginVertical: 5,
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
  accessCard: {
    marginVertical: 5,
    marginBottom: 20,
  }
});
