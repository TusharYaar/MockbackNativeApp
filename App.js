import React from "react";

import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import userReducer from "./store/reducers/user";

import AppChild from "./components/AppChild"

enableScreens(true);

export default function App() {
  const rootReducer = combineReducers({
    user: userReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
     <AppChild />
    </Provider>
  );
}
