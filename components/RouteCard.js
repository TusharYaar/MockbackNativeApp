import React from "react";
import { StyleSheet, View, TouchableNativeFeedback } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Accordion from "./Accordion";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Button, Subheading } from "react-native-paper";
const RouteCard = ({ route }) => {
  const navigation = useNavigation();

  return (
    <Accordion
      title={`/${route.pathname}`}
      icon={route.authorization ? "lock" : "lock-open-variant"}
      style={styles.card}
    ></Accordion>
  );

//   return (
//     <View style={styles.cardContainer}>
//       <TouchableNativeFeedback
//         onPress={() => {
//           navigation.navigate("RouteDetail", { routeId: route._id });
//         }}
//       >
//         <Card style={styles.card}>
//           <View style={styles.row}>
//             <MaterialCommunityIcons
//               name={route.authorization ? "lock" : "lock-open-variant"}
//               size={20}
//               color={route.authorization ? "green" : "red"}
//             />
//             <Subheading>/{route.pathname}</Subheading>
//           </View>
//         </Card>
//       </TouchableNativeFeedback>
//     </View>
//   );
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
});
