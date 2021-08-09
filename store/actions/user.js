import AsyncStorage from "@react-native-async-storage/async-storage";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const NO_USER = "NO_USER";
export const AUTO_LOGIN = "AUTO_LOGIN";
export const UPDATE_THEME = 'UPDATE_THEME';
export const SET_ONBOARDING = 'SET_ONBOARDING';

export const loginUser = (payload) => {
  return async (dispatch,getState) => {
    const {user} = getState();
    await AsyncStorage.setItem('@user_details', JSON.stringify({...user,...payload}));
    dispatch({ type: LOGIN, payload });
  };
};

export const autoLoginUser = (payload) =>    ({ type: AUTO_LOGIN, payload });

export const logoutUser = () => (dispatch, getState) => {
  dispatch({ type: LOGOUT });
  const {user} = getState();
  const {onboardingDone, theme} = user;
  return AsyncStorage.setItem("@user_details", JSON.stringify({onboardingDone, theme}));
};

export const noUser = () => ({
  type: NO_USER,
});


export const updateUserTheme = (payload) => {
  return async (dispatch,getState) => {
    const { user } = getState();
    const updatedTheme = {...user, theme: payload}
    await AsyncStorage.setItem('@user_details', JSON.stringify(updatedTheme));
    dispatch({type: UPDATE_THEME, payload})
  }
} 

export const setOnboarding = (payload) => {
  return async (dispatch,getState) => { 
    const { user } = getState();
    const updatedData = {...user, onboardingDone: payload}
    if(payload) await AsyncStorage.setItem('@user_details', JSON.stringify(updatedData));
    else await AsyncStorage.removeItem('@user_details');
    dispatch({type: SET_ONBOARDING, payload})
  }
}