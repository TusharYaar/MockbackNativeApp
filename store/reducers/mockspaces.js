import  {SET_MOCKSPACES ,SET_ERROR} from "../actions/mockspaces";
const initialState = {
    currentMockspace: null,
    mockspaces: [],
    loaded: false,
    error: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_MOCKSPACES:
        return { ...initialState, mockspaces: payload, loaded: true };
    
    case SET_ERROR: 
        return { ...initialState, loaded: true, error: payload };
     
    default:
        return state
    }
}
