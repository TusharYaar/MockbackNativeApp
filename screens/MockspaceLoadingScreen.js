import React, { useRef, useEffect } from "react";
import { StyleSheet, Alert } from "react-native";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { fetchMockspaces } from "../store/actions/mockspaces";

import { Paragraph } from "react-native-paper";

const MockspaceLoadingScreen = () => {
  const animation = useRef(null);
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    console.log("Running");
    dispatch(fetchMockspaces());
  }, [dispatch]);
  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.colors.background }]}
    >
      <LottieView
        ref={animation}
        style={{
          width: "100%",
        }}
        autoPlay={true}
        source={require("../assets/lotties/running-server.json")}
      />
      <Paragraph style={styles.text}>
        First call to the server may take some time. Please wait
      </Paragraph>
    </SafeAreaView>
  );
};

export default MockspaceLoadingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  text: {
    textAlign: "center",
  },
});
