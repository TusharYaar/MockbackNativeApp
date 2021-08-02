import {LOGIN, LOGOUT, NO_USER, AUTO_LOGIN} from "../actions/user";
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
        return({...payload})
        // return {...state, ...payload, autoLogin: false};
        // break;
    case LOGOUT:
        return {...initialState, autoLogin: false};
    case NO_USER: {
        return {...initialState, autoLogin: false};
    }
    default:
        return state;
    }
}

