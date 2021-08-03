import  {SET_MOCKSPACES} from "../actions/mockspaces";
const initialState = {
    currentMockspace: null,
    mockspaces: [],
    loaded: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_MOCKSPACES:
        return { ...initialState, mockspaces: payload, loaded: true };

    default:
        return state
    }
}
