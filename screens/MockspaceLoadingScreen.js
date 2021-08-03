import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View ,Alert } from "react-native";
import LottieView from "lottie-react-native";


import { useDispatch, useSelector } from "react-redux";
import {setMockspaces} from "../store/actions/mockspaces"

import { Headline } from 'react-native-paper';

const MockspaceLoadingScreen = () => {
  const animation = useRef(null);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMockspaceData = async () => {
      try {
        const req = await fetch(`https://mockback.herokuapp.com/userdata`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await req.json();
        dispatch(setMockspaces(data.mockspaces));
      }
      catch (err) {
        Alert.alert("Error Getting Data", err.message);
      }
    }


    if(user.token) getMockspaceData();
  }, [dispatch, user]);


  return (
    <View style={styles.screen}>
      <LottieView
        ref={animation}
        style={{
          width: "100%",
        }}
        autoPlay={true}
        source={require("../assets/lotties/running-server.json")}
      />
      <Headline style={styles.text}>First call to the server may take some time. Please wait</Headline>
    </View>
  );
};

export default MockspaceLoadingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  text: {
    textAlign: 'center',
  }

});

export const mockspaceLoadingScreenOptions =   ({ navigation }) => {
  
}