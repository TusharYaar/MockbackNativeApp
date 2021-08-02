import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Title,TextInput } from "react-native-paper";

import {useDispatch} from "react-redux";

import {loginUser,noUser} from "../store/actions/user";

import Button from "../components/Button"
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const handleEmailChange = (text) => {
        setEmail(text);
    }
    const handlePasswordChange = (text) => {
        setPassword(text);
    }
    const handleLogin = async () => {
        // setIsLoading(true);
        const obj = {email,password};
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
            dispatch(loginUser(userData))
        }
         else if (!response.ok) throw new Error(data.message)
        } catch (err) {
            Alert.alert("Error",err.message);
            setIsLoading(false);
        }
      };
    
   
   
   
   
   
   
   
    return (
        <SafeAreaView style={styles.screen}>
            <ImageBackground source={require('../assets/images/landscape.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Login</Text>
            </ImageBackground>
            <View style={styles.login}>
                <TextInput label="Email" value={email} onChangeText={handleEmailChange} style={styles.margin} />
                <TextInput label="Password" value={password} onChangeText={handlePasswordChange} style={styles.margin} />
                <Button onPress={handleLogin} style={styles.margin} disabled={isLoading}>Login</Button>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    image: {
        height: "auto",
        width: "100%",
        
    },
    title: {
    fontSize: 72,
    marginVertical: 20,
    },
    login: {
        flex: 1,
        paddingHorizontal: 10,
    },
    margin: {
    marginVertical: 10,
    }
})

export const loginOptions = {
    headerShown: false,
}