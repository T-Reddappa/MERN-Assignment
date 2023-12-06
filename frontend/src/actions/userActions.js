import axios from "axios";
const url = "https://userhub-yihb.onrender.com";

export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/api/allUsers`);
    dispatch({ type: "GET_USERS", payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const searchUsers = (queryParams) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/api/users?${queryParams}`);
    dispatch({ type: "FILTER_USERS", payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};
