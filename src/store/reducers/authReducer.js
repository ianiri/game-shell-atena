const initialState = {
  authenticated: true,
  user: {
    firstName: 'Twix',
    lastName: 'the Parrot',
  },
};

export const authReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'auth/logOut':
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};
