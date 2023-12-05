import { toast } from "react-toastify";

const initialState = {
  teams: [],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_TEAM":
      console.log(state.team);
      return {
        ...state,
        team: [...state.team, action.payload],
      };

    case "CREATE_A_TEAM":
      if (action.payload) {
        toast.success("Team creation successful!");
      }
      return {
        ...state,
        teams: [
          ...state.teams,
          {
            teamName: `Team ${state.teams.length + 1}`,
            team: [...action.payload],
          },
        ],
      };

    default:
      return state;
  }
};

export default teamReducer;
