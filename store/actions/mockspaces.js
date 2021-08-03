export const SET_MOCKSPACES = "SET_MOCKSPACES";
export const UPDATE_MOCKSPACE = "UPDATE_MOCKSPACE";

export const setMockspaces = (payload) => ({
  type: SET_MOCKSPACES,
  payload,
});

export const fetchMockspaces = (payload) => {
  return async (dispatch, getState) => {
    const { user } = getState();
    try {
      const req = await fetch(`https://mockback.herokuapp.com/userdata`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await req.json();
      dispatch({
        type: SET_MOCKSPACES,
        payload: data.mockspaces,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
