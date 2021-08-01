import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Title,TextInput } from "react-native-paper";


import Button from "../components/Button"
const Login = (props) => {
    const {navigation, route} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        if (route && route.params && route.params.error)
            Alert.alert("Error",route.params.error);
    },[route])

    const handleEmailChange = (text) => {
        setEmail(text);
    }
    const handlePasswordChange = (text) => {
        setPassword(text);
    }
    const handleLogin = async () => {
        props.navigation.navigate("Loading",{
            email: email,
            password: password
        });
    }
   
   
   
   
   
   
   
    return (
        <SafeAreaView style={styles.screen}>
            <ImageBackground source={require('../assets/images/landscape.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Login</Text>
            </ImageBackground>
            <View style={styles.login}>
                <TextInput label="Email" value={email} onChangeText={handleEmailChange} style={styles.margin} />
                <TextInput label="Password" value={password} onChangeText={handlePasswordChange} style={styles.margin} />
                <Button onPress={handleLogin} style={styles.margin}>Login</Button>
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