import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native'
import * as GoogleSignIn from 'expo-google-sign-in';
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Paragraph, Button as Btn2 } from 'react-native-paper';
import {useTheme} from "@react-navigation/native";

import Button from '../components/Button';

import { useDispatch,useSelector } from "react-redux";

import { logoutUser } from "../store/actions/user";
import {fetchMockspaces} from "../store/actions/mockspaces"

const NoMockspaceScreen = () => {
    const animation = useRef(null);
    const dispatch = useDispatch();
    const error = useSelector(state => state.mockspaces.error);
    const {colors} = useTheme();  

    const handleRetry = () => {
      dispatch(fetchMockspaces());
    }
    const handleLogoutBtnClick = () => {
      GoogleSignIn.disconnectAsync()
      dispatch(logoutUser());
    };
    return (
        <SafeAreaView style={styles.screen}>
          
            <View>
            <LottieView
        ref={animation}
        style={{
            width: "100%",
        }}
        autoPlay={true}
        loop={false}
        source={require("../assets/lotties/no-result.json")}
        />
        {error ? <Paragraph style={styles.text}>{error}</Paragraph> :
        <Paragraph style={styles.text}>You don't have any mockspaces. Head to website to create one</Paragraph>
      }
        <Button onPress={handleRetry}>Retry</Button>
        </View>
        <View style={styles.section}>
        <Paragraph>Signed up using wrong account? logout</Paragraph>
        <Btn2 onPress={handleLogoutBtnClick} icon="logout-variant" color={colors.accent}>Logout</Btn2>
        </View>
        </SafeAreaView>
    )
}

export default NoMockspaceScreen
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      justifyContent: 'space-between',
    },
    text: {
      textAlign: 'center',
      marginVertical: 15,
    },
    section: {
      marginVertical: 20,
      flex: 1,
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    }
  
  });
  