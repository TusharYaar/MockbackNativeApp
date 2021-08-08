import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Alert,
  ScrollView,
  TouchableNativeFeedback,

} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, IconButton, Paragraph } from "react-native-paper";

import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/user";

import * as GoogleSignIn from "expo-google-sign-in";

import { login, googleLogin } from "../functions/functions";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator.js"
const CLIENT_ID =
  "270781488858-pp0e37higjbtbv1cf7fem4mlos6jsv8c.apps.googleusercontent.com";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const _syncUserWithStateAsync = useCallback(async () => {
    try {
      const user = await GoogleSignIn.signInSilentlyAsync();
      if (user) {
        setIsLoading(true);
        try {
          const userData = await googleLogin(user);
          dispatch(loginUser(userData));
        } catch (err) {
          Alert.alert("Error", err.message);
          setIsLoading(false);
        }
      }
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  }, [GoogleSignIn]);

  useEffect(() => {
    const initAsync = async () => {
      await GoogleSignIn.getPlayServiceAvailability(true);
      await GoogleSignIn.initAsync({
        clientId: CLIENT_ID,
        scopes: ["openid", "email", "profile"],
      });
    };
    initAsync();
  }, [GoogleSignIn, _syncUserWithStateAsync]);

  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const togglePasswordVisible = () => {
    setPasswordVisible(visible => !visible);
  }
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const userData = await login(email, password);
      dispatch(loginUser(userData));
    } catch (err) {
      Alert.alert("Error", err.message);
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type } = await GoogleSignIn.signInAsync();
      if (type === "success") {
        _syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  };

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
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.login}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={handleEmailChange}
            style={styles.margin}
            autoCapitalize="none"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={handlePasswordChange}
            style={styles.margin}
            secureTextEntry={passwordVisible}
            autoCapitalize="none"
            right={<TextInput.Icon name={passwordVisible ? "eye-off" : "eye"} onPress={togglePasswordVisible} />}
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
          <Paragraph>Or Login using Social Media</Paragraph>
          <View style={styles.socialLogin}>
            {isLoading ? <ActivityIndicator size="small" color="secondary" /> :
            <IconButton icon="google" size={40} onPress={handleGoogleLogin} />
            }
                        {isLoading ? <ActivityIndicator size="small"  color="secondary" /> :
             <IconButton
             icon="github"
             size={40}
             onPress={() => props.navigation.navigate("Signup")}
           />
            }
           
          </View>
        </View>
        <TouchableNativeFeedback onPress={() => props.navigation.navigate("Signup")}>
        <Paragraph style={styles.signUpText}>
          Don't have an account? Sign Up
        </Paragraph>
        </TouchableNativeFeedback>
      </ScrollView>
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
    fontFamily: "WorkSans_500Medium",
    marginVertical: 10,
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
  socialLogin: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  signUpText: {
    textAlign: "center",
  },
});

export const loginOptions = {
  headerShown: false,
};
