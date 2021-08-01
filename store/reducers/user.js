import {LOGIN, LOGOUT, NO_USER, AUTO_LOGIN} from "../actions/user";
const initialState = {
    firstName: "",
    lastName: "",
    maxMockspaces: 2,
    maxRoutes: 4,
    accessToken: null,
    email: null,
    apiKey: null,
    autoLogin: true,
    theme: "avacardo",
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case LOGIN:
        return {...payload, autoLogin: false }
    case LOGOUT:
        return {...initialState, autoLogin: false};
    case NO_USER: {
        return {...initialState, autoLogin: false};
    }
    default:
        return state
    }
}
