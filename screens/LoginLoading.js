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
      if (!response.ok) throw new Error(data.message);
      const data = await response.json();
      const {firstName, lastName, email, maxRoutes, maxMockspaces, token, theme} = data;
      console.log(data);
      dispatch(loginUser({firstName, lastName, email, maxRoutes, maxMockspaces, token, theme}));
    } catch (err) {
      navigation.navigate("Login", { error: err.message });
    }
  }, [params,dispatch]);

const handleAutoLogin = useCallback(async () => {
  try {
    const value = await AsyncStorage.getItem('@user_details');
    console.log(value);
    if(value === "null" || value === null) {
      navigation.navigate("Login");
    }
    else {
      console.log(value);
      dispatch(autoLoginUser(JSON.parse(value)));
    }
  } catch (err) {
      navigation.navigate("Login", { error: err.message });
  }  
}, [dispatch,navigation])

  // useEffect(() => {
  //   if (user.autoLogin && !params) {
  //     console.log("autoLogin");
  //     handleAutoLogin();
  //   }
  //   else if (!user.autoLogin && !user.email){ 
  //     console.log("No user");
  //     navigation.navigate("Login") }   
  //   else if (!params && !user.email) 
  //   { console.log("no Params");
  //     navigation.navigate("Login")
  //   }
  //   else if (!!params && params.email && params.password && !user.email){
  //     console.log("trying login");
  //     handleLogin()
  //     }

  // }, [handleAutoLogin,handleLogin, params, navigation, user]);

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
      <Button onPress={()=> console.log("Pressed") }>Cancel</Button>
      <Button onPress={handleAutoLogin}>Pressed Button</Button>
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
