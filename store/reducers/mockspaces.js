import {
  SET_MOCKSPACES,
  SET_ERROR,
  UPDATE_MOCKSPACES,
  SET_CURRENT_MOCKSPACE,
} from "../actions/mockspaces";
const initialState = {
  currentMockspaceId: null,
  currentMockspace: {},
  mockspaces: [],
  loaded: false,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MOCKSPACES:
      return { ...initialState, mockspaces: payload, loaded: true };

    case SET_ERROR:
      return { ...initialState, loaded: true, error: payload };

    case SET_CURRENT_MOCKSPACE:
      return {
        ...state,
        currentMockspaceId: payload,
        currentMockspace: state.mockspaces.find(
          (space) => space._id === payload
        ),
      };
    case UPDATE_MOCKSPACES:
      return {
        ...state,
        mockspaces: [],
        loaded: false,
      }
    default:
      return state;
  }
};
