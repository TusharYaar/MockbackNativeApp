import React,{ useRef,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

 import Button from '../components/Button'
import {useDispatch} from "react-redux";


const LoginLoading = (props) => {

    const animation = useRef(null);
    console.log(props.route)

    return (
        <View>
           <LottieView
          ref={animation}
          style={{
            width: "100%",
          }}
          autoPlay={true}
          source={require('../assets/lotties/running-server.json')}
        />
        <Button onPress={()=> props.navigation.navigate("Login")}>Go Back</Button>
        </View>
    )
}

export default LoginLoading

const styles = StyleSheet.create({})
