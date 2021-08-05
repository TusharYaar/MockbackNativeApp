import React from "react";
import AppLoading from 'expo-app-loading';
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import userReducer from "./store/reducers/user";
import mockspacesReducer from "./store/reducers/mockspaces";

import { 
  useFonts,
  WorkSans_100Thin,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
} from '@expo-google-fonts/work-sans';

import AppChild from "./components/AppChild";

enableScreens(true);

const App = ()=> {
  let [fontsLoaded] = useFonts({
    WorkSans_100Thin,
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,

  });

  const rootReducer = combineReducers({
    user: userReducer,
    mockspaces: mockspacesReducer,
  });

  const store = createStore(rootReducer,applyMiddleware(thunk));

  if (!fontsLoaded) return <AppLoading />;
  return (
    <Provider store={store}>
     <AppChild />
    </Provider>
  );
}
export default App;