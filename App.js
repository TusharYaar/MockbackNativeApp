import React from "react";
import AppLoading from 'expo-app-loading';
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import userReducer from "./store/reducers/user";

import { 
  useFonts,
  WorkSans_100Thin,
  WorkSans_200ExtraLight,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
  WorkSans_800ExtraBold,
  WorkSans_900Black,
  WorkSans_100Thin_Italic,
  WorkSans_200ExtraLight_Italic,
  WorkSans_300Light_Italic,
  WorkSans_400Regular_Italic,
  WorkSans_500Medium_Italic,
  WorkSans_600SemiBold_Italic,
  WorkSans_700Bold_Italic,
  WorkSans_800ExtraBold_Italic,
  WorkSans_900Black_Italic 
} from '@expo-google-fonts/work-sans';

import AppChild from "./components/AppChild";

enableScreens(true);

const App = ()=> {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
  });

  const rootReducer = combineReducers({
    user: userReducer,
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