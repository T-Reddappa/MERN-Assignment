import { toast } from "react-toastify";

const initialState = {
  allTeams: [],
  team: [],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TEAMS":
      return {
        ...state,
        allTeams: [...action.payload],
      };
    case "GET_A_TEAM":
      return {
        ...state,
        team: [action.payload],
      };

    case "CREATE_A_TEAM":
      console.log("hello");
      return {
        ...state,
        teams: [
          ...state.allTeams,
          {
            teamName: action.payload.teamName,
            team: [...action.payload.team],
          },
        ],
      };

    default:
      return state;
  }
};

export default teamReducer;
