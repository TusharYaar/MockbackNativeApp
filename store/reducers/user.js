import {
  LOGIN,
  LOGOUT,
  NO_USER,
  AUTO_LOGIN,
  UPDATE_THEME,
  SET_ONBOARDING,
} from "../actions/user";

const initialState = {
  firstName: "",
  lastName: "",
  maxMockspaces: 2,
  maxRoutes: 4,
  token: null,
  email: null,
  autoLogin: true,
  theme: "lightBlue",
  onboardingDone: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...payload, autoLogin: false,  onboardingDone: true };
    case AUTO_LOGIN:
      return { ...payload, autoLogin: false,  onboardingDone: true };
    case LOGOUT:
      return { ...initialState,theme: state.theme, autoLogin: false };
    case NO_USER: {
      return { ...initialState, autoLogin: false };
    }
    case UPDATE_THEME:
      return { ...state, theme: payload };
    case SET_ONBOARDING:
        return { ...state, onboardingDone: payload };
    default:
      return state;
  }
};
