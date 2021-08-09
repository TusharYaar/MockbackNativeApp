import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, ImageBackground,ScrollView,TouchableNativeFeedback, Alert } from 'react-native'
import { TextInput, IconButton,Checkbox , Paragraph} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/user";

import * as GoogleSignIn from "expo-google-sign-in";

import { signup, googleLogin } from "../functions/functions";

import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator.js"
const CLIENT_ID =
  "270781488858-pp0e37higjbtbv1cf7fem4mlos6jsv8c.apps.googleusercontent.com";
  
const SignupScreen = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [promotions, setPromotions] = useState(true);
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

      const handleFirstNameChange = (text) => {
        setFirstName(text);
      };
      const handleLastNameChange = (text) => {
        setLastName(text);
      };
      const handlePassConfirmChange = (text) => {
        setConfirmPassword(text);
      };
      const togglePromotions = () => {
        setPromotions(!promotions);
      }

      const handleSignup = async () => {
          setIsLoading(true);
          try {
            const cred = {email, password, firstName, lastName, promotions, confirmPassword}
          const userData = await  signup(cred);
          dispatch(loginUser(userData));
        } catch (err) {
          Alert.alert("Error", err.message);
          setIsLoading(false);
        }
       
      }

      const validateSignup = () => {
        if (firstName.length < 1 || firstName.length > 30) 
            Alert.alert("First Name Error", "Sorry, currently we only support names between 1 to 30 characters.")
        
           else if (lastName.length < 1 || lastName.length > 30) 
            Alert.alert("Last Name Error", "Sorry, currently we only support names between 1 to 30 characters.")
            
           else if (password.length < 6 || password.length > 30) 
            Alert.alert("Password Error", "Sorry, currently we only support passwords between 1 to 30 characters.")
           
           else if (email.length < 6 || email.length > 50)
            Alert.alert("Email Error", "Sorry, currently we only support emails between 6 to 50 characters.")
            
           else if (password !== confirmPassword) 
            Alert.alert("Password Error", "Sorry, your passwords do not match")
        else handleSignup();
      }


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
          source={require("../assets/images/landscape2.jpg")}
          resizeMode="cover"
          style={styles.image}
          >
              <IconButton icon="keyboard-backspace" style={styles.backBtn} onPress={() => {navigation.goBack();}} />
          <Text style={styles.title}>Welcome</Text>
        </ImageBackground>
        </View>
        <ScrollView style={styles.bodyContainer}>
        <View style={styles.signup}>
        <TextInput
            label="First Name"
            value={firstName}
            onChangeText={handleFirstNameChange}
            style={styles.margin}
            autoCapitalize="words"
          />          
          <TextInput
          label="Last Name"
          value={lastName}
          onChangeText={handleLastNameChange}
          style={styles.margin}
          autoCapitalize="words"
        />
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
            secureTextEntry
            autoCapitalize="none"
          />
           <TextInput
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={handlePassConfirmChange}
            style={styles.margin}
            secureTextEntry
            autoCapitalize="none"
          />
          <View style={styles.checkboxContainer}>

           <Checkbox
      status={promotions ? 'checked' : 'unchecked'}
      onPress={togglePromotions}
        />
        <TouchableNativeFeedback onPress={togglePromotions}>
        <Paragraph>Sign me up for promotional emails</Paragraph>
        </TouchableNativeFeedback>

        </View>
        </View>
        <Button
          onPress={validateSignup}
          style={styles.margin}
          disabled={isLoading}
        >
          Signup
        </Button>
        <View style={styles.socialLoginContainer}>
          <Paragraph>Or Signup using Social Media</Paragraph>
          <View style={styles.socialLogin}>
            {isLoading ? <ActivityIndicator size="small" color="secondary" /> :
            <IconButton icon="google" size={40} onPress={handleGoogleLogin} />
            }
           
          </View>
        </View>
      </ScrollView>
        </SafeAreaView>
    )
}

export default SignupScreen

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
     backBtn: {
        marginBottom: 0
     },
      title: {
        fontSize: 72,
        fontFamily: "WorkSans_500Medium",
        textAlign: "center",
      },
      bodyContainer: {
        flex: 1,
        padding: 20,
      },
      signup: {
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
      checkboxContainer:{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
      }
})
