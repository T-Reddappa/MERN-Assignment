import React from "react";

const initialState = {
  team: [],
  teams: {
    teamName: "",
    team: [],
  },
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_TEAM":
      console.log(state.team);
      return {
        ...state,
        team: [...state.team, action.payload],
      };

    default:
      return state;
  }
};

export default teamReducer;
