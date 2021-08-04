import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, IconButton, Paragraph } from "react-native-paper";

import { useDispatch } from "react-redux";

import { loginUser } from "../store/actions/user";

import Button from "../components/Button";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleLogin = async () => {
    setIsLoading(true);
    const obj = { email, password };
    try {
      const response = await fetch(
        "https://mockback.herokuapp.com/auth/login",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      const userData = await response.json();
      if (response.ok) {
        dispatch(loginUser(userData));
      } else if (!response.ok) throw new Error(userData.message);
    } catch (err) {
      Alert.alert("Error", err.message);
      setIsLoading(false);
    }
  };

  // const handleGoogleLogin = () => {
  //   const 
  // }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../assets/images/landscape.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.title}>Hello</Text>
        </ImageBackground>
      </View>
      <View style={styles.bodyContainer}>

      <View style={styles.login}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={handleEmailChange}
          style={styles.margin}
          />
        <TextInput
          label="Password"
          value={password}
          onChangeText={handlePasswordChange}
          style={styles.margin}
          />
        
      </View>
      <Button
          onPress={handleLogin}
          style={styles.margin}
          disabled={isLoading}
          >
          Login
        </Button>
      <View style={styles.socialLoginContainer}>
        <Paragraph>Or Sign In using Social Media</Paragraph>
        <View style={styles.socialLogin}>
        <IconButton icon="google" size={40}
    onPress={() => console.log('Pressed')}/>
            <IconButton icon="github" size={40}
    onPress={() => console.log('Pressed')}/>
        
        </View>
      </View>
        <Paragraph style={styles.signUpText}>Don't have an account? Sign Up</Paragraph>
    </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: {
    height: "30%",
  },
  image: {
    height: "100%",
    width: "auto",
  },
  title: {
    fontSize: 72,
    marginVertical: 20,
    textAlign: "center",
  },
  bodyContainer: {
    flex: 1,
    padding: 20,
  },
  login: {
    flex: 1,
  },
  margin: {
    marginVertical: 10,
  },
  socialLoginContainer: {
    justifyContent: "center",
    alignItems: "center",
   width: "100%",
   padding: 20,
  },
  socialLogin:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  signUpText: {
    textAlign: "center",
  }
});

export const loginOptions = {
  headerShown: false,
};
