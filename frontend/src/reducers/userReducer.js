const initialState = {
  users: [],
  filteredUsers: [],
  paginatedUsers: [],
  totalPages: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      console.log("reducer payload", action.payload);
      return {
        ...state,
        users: [...action.payload],
        // filteredUsers: [...action.payload],
      };
    case "FILTER_USERS":
      console.log("filter reducer", action.payload);
      return {
        ...state,
        paginatedUsers: [...action.payload.paginatedUsers],
        filteredUsers: [...action.payload.filteredUsers],
        totalPages: action.payload.totalPages,
      };
    default:
      return state;
  }
};

export default userReducer;
