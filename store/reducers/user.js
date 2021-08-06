import {LOGIN, LOGOUT, NO_USER, AUTO_LOGIN,UPDATE_THEME} from "../actions/user";
const initialState = {
    firstName: "",
    lastName: "",
    maxMockspaces: 2,
    maxRoutes: 4,
    token: null,
    email: null,
    autoLogin: true,
    theme: "avacardo",
}


export default (state = initialState, { type, payload }) => {
    switch (type) {
    case LOGIN:
        return({...payload,autoLogin: false});
    case AUTO_LOGIN:
        return({...payload,autoLogin: false});
    case LOGOUT:
        return {...initialState, autoLogin: false};
    case NO_USER: {
        return {...initialState, autoLogin: false};
    }
    case UPDATE_THEME:
        return {...state, theme: payload};
    default:
        return state;
    }
}

