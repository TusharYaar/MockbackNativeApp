import React, { useRef } from 'react';
import { StyleSheet } from 'react-native'
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Paragraph } from 'react-native-paper';

import Button from '../components/Button';

import { useDispatch } from "react-redux";
import {fetchMockspaces} from "../store/actions/mockspaces"

const NoMockspaceScreen = () => {
    const animation = useRef(null);
    const dispatch = useDispatch();

    const handleRetry = () => {
      dispatch(fetchMockspaces());
    }

    return (
        <SafeAreaView style={styles.screen}>
            <LottieView
        ref={animation}
        style={{
            width: "100%",
        }}
        autoPlay={true}
        loop={false}
        source={require("../assets/lotties/no-result.json")}
        />
        <Paragraph style={styles.text}>You don't have any mockspaces</Paragraph>
        <Paragraph style={styles.text}>Head to website to create one</Paragraph>
        <Button onPress={handleRetry}>Retry</Button>
        </SafeAreaView>
    )
}

export default NoMockspaceScreen
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
    },
    text: {
      textAlign: 'center',
    }
  
  });
  