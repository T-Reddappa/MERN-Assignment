const initialState = {
  users: [],
  filteredUsers: [],
  paginatedUsers: [],
  totalPages: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: [...action.payload],
      };
    case "FILTER_USERS":
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
