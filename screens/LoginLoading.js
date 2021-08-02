import React, { useRef, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

import Button from "../components/Button";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch, useSelector } from "react-redux";
import {loginUser, autoLoginUser} from "../store/actions/user";


const LoginLoading = ({ navigation, route }) => {
  const { params } = route;
  const animation = useRef(null);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();


  //Login using email and Password
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
      <Text>First call to the server may take some time. Please wait</Text>
      <Button onPress={()=> navigation.navigate("Login") }>Cancel</Button>
      {/* <Button onPress={}>Pressed Button</Button> */}
    </View>
  );
};

export default LoginLoading;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
},
});
