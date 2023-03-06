const initialState = {
  colors: {
    mainColor: '#ffabce',
    secondaryColor: '#ff7bad',
    eyeColor: '#69CC68',
  },
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'profile/setUserProfile':
      return {
        ...state,
        colors: payload.colors,
      };
    default:
      return state;
  }
};
