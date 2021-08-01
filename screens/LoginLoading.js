import React, { useRef, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";

const LoginLoading = ({ navigation, route }) => {
  const { params } = route;
  const animation = useRef(null);
  const user = useSelector(state => state.user);



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
      console.log(data);
      if (!response.ok) throw new Error(data.message);
    } catch (err) {
      navigation.navigate("Login", { error: err.message });
    }
  }, [params]);

const handleAutoLogin = useCallback(async () => {
}, [params])

  useEffect(() => {
    if (!params && (!user.uid || !user.email)) { navigation.navigate("Login");} 
    if (params && params.email && params.password) handleLogin();

  }, [handleLogin, params, navigation, user]);

  return (
    <View>
      <LottieView
        ref={animation}
        style={{
          width: "100%",
        }}
        autoPlay={true}
        source={require("../assets/lotties/running-server.json")}
      />
      <Text>First call to the server may take some time. Please wait</Text>
      <Button>Cancel</Button>
    </View>
  );
};

export default LoginLoading;

const styles = StyleSheet.create({});
