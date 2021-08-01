import React, { useRef, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

import Button from "../components/Button";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch, useSelector } from "react-redux";
import {loginUser} from "../store/actions/user";


const LoginLoading = ({ navigation, route }) => {
  const { params } = route;
  const animation = useRef(null);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();


  //Login using email and Password
  const handleLogin = useCallback(async () => {
    try {
      const response = await fetch(
        "https://mockback.herokuapp.com/auth/login",
        {
          method: "POST",
          mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
          body: JSON.stringify({
            email: params.email,
            password: params.password,
          }),
        }
      );
      const data = await response.json();
      const {firstName, lastName, email, maxRoutes, maxMockspaces, token, theme} = data;
      dispatch(loginUser({firstName, lastName, email, maxRoutes, maxMockspaces, token, theme}));
      console.log(data);
      if (!response.ok) throw new Error(data.message);
    } catch (err) {
      navigation.navigate("Login", { error: err.message });
    }
  }, [params,dispatch]);

const handleAutoLogin = useCallback(async () => {
  try {
    const user = await AsyncStorage.getItem('@user_details');
    dispatch(loginUser(JSON.parse(user)));
  } catch (err) {
      navigation.navigate("Login", { error: err.message });
  }  
}, [dispatch])

  useEffect(() => {
    if(user.autoLogin)  handleAutoLogin();
    else if (!user.autoLogin && !user.email) {
      navigation.navigate("Login");
      // console.log("Should call autoLogin");
    }
    else if (!params && !user.email)navigation.navigate("Login")
    else if (params && params.email && params.password && !user.email) handleLogin()

  }, [handleAutoLogin,handleLogin, params, navigation, user]);

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
      <Button onPress={()=> {navigation.navigate("Login")} }>Cancel</Button>
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
