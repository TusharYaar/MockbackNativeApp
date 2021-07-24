import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { NavigationContainer } from '@react-navigation/native';
import thunk from "redux-thunk";

import userReducer from "./store/reducers/user";

import {LoginStackNavigator} from "./navigators/StackNavigators"
enableScreens(true);

export default function App() {
  const rootReducer = combineReducers({
    user: userReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <LoginStackNavigator/>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
