import axios from "axios";

export const getUsers = (page, size) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://userhub-yihb.onrender.com/api/users?page=${page}&pageSize=${size}`
    );
    dispatch({ type: "GET_USERS", payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const searchUsers = (searchInput) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/users?search=${searchInput}`
    );
    dispatch({ type: "FILTER_USERS", payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};
