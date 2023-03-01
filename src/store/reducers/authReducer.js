const initialState = {
  authenticated: false,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    id: '',
    name: '',
  },
  stats: {
    gamesWon: 0,
    gamesLost: 0,
    gamesPlayed: 0,
  },
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'auth/logOut':
      return {
        ...state,
        authenticated: false,
      };
    case 'auth/setUser':
      return {
        ...state,
        authenticated: true,
        user: payload,
      };
    case 'auth/setUserStats':
      return {
        ...state,
        stats: payload,
      };
    default:
      return state;
  }
};
