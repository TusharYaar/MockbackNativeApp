import AsyncStorage from "@react-native-async-storage/async-storage";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const NO_USER = "NO_USER";
export const AUTO_LOGIN = "AUTO_LOGIN";
export const UPDATE_THEME = 'UPDATE_THEME';

export const loginUser = (payload) => {
  return async (dispatch) => {
    await AsyncStorage.setItem('@user_details', JSON.stringify(payload));
    dispatch({ type: LOGIN, payload });
  };
};

export const autoLoginUser = (payload) =>    ({ type: AUTO_LOGIN, payload });

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  return AsyncStorage.removeItem("@user_details");
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