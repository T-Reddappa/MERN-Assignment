import axios from "axios";
import { toast } from "react-toastify";

const url = "https://userhub-yihb.onrender.com";

export const createTeam = (teamDetails) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/api/team`, teamDetails);
    if (response.status === 201) {
      toast.success(response.data.message);
      dispatch({ type: "CREATE_A_TEAM", payload: response.data.team });
    }
    console.log("hello");
  } catch (error) {
    console.error(error);
  }
};

export const getAllTeams = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/api/team`);
    if (response.status === 200) {
      dispatch({ type: "GET_TEAMS", payload: response.data });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getTeamById = (teamId) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/api/team/${teamId}`);
    if (response.status === 200) {
      // dispatch({ type: "GET_A_TEAM", payload: response.data });
      toast.success(`You clicked on ${response.data.teamName}`);
    }
  } catch (error) {
    console.log(error);
  }
};
