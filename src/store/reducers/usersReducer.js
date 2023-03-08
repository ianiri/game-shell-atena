const initialState = {
  users: [],
  // redux toolkit style
  entities: {},
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'users/setAll':
      return {
        ...state,
        users: payload || [],
      };
    case 'users/setUser':
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: payload,
        },
      };
    default:
      return state;
  }
};
