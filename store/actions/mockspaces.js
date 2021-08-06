import {fetchMockspaceData} from "../../functions/functions";


export const SET_MOCKSPACES = "SET_MOCKSPACES";
export const UPDATE_MOCKSPACES = "UPDATE_MOCKSPACES";
export const SET_ERROR = 'SET_ERROR';
export const SET_CURRENT_MOCKSPACE = 'SET_CURRENT_MOCKSPACE';




export const setCurrentMockspace = (payload) => ({
  type: SET_CURRENT_MOCKSPACE,
  payload
})



export const setMockspaces = (payload) => ({
  type: SET_MOCKSPACES,
  payload,
});

export const fetchMockspaces = () => {
  return async (dispatch, getState) => {
    const { user } = getState();
    try {
      const data = await fetchMockspaceData(user.token);
      dispatch({
        type: SET_MOCKSPACES,
        payload: data.mockspaces,
      });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload:err.message });
    }
  };
};

export const updateMockspaces = (payload) => ({
  type: UPDATE_MOCKSPACES,
  payload
})
