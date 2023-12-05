import axios from "axios";

export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://userhub-yihb.onrender.com/api/allUsers"
    );
    console.log("all users data", response.data);
    dispatch({ type: "GET_USERS", payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

// export const getUsers = (page, size) => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       `http://localhost:8000/api/users?page=${page}&pageSize=${size}`
//     );
//     console.log(response.data);
//     dispatch({ type: "FILTER_USERS", payload: response.data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const searchUsers = (queryParams) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://userhub-yihb.onrender.com/api/users?${queryParams}`
    );
    console.log(response.data, "response from search");
    dispatch({ type: "FILTER_USERS", payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};
