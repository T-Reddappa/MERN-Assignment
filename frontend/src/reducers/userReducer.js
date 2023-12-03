const initialState = {
  users: [],
  filteredUsers: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: [...action.payload],
        filteredUsers: [...action.payload],
      };
    case "FILTER_USERS":
      return {
        ...state,
        filteredUsers: [...action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
