import { client } from '../../../api/users';

// action creator
export const setUserProfile = (profile) => {
  return {
    type: 'profile/setUserProfile',
    payload: profile,
  };
};

// async thunk
export const createProfile = (userId) => {
  return async (dispatch, getState) => {
    const { profile } = getState();
    const { colors } = profile;

    const { data } = await client.post('/profiles', {
      id: userId,
      colors,
    });

    dispatch(
      setUserProfile({
        colors: data.colors,
      }),
    );

    return data;
  };
};

// async thunk
export const readProfile = (userId) => {
  return async () => {
    const { data } = await client.get(`/profiles/${userId}`);

    return data;
  };
};

// async thunk
export const updateProfile = (userId, newProfile) => {
  return async (dispatch, getState) => {
    const { profile } = getState();

    const { data } = await client.patch(`/profiles/${userId}`, {
      ...profile,
      colors: newProfile.colors,
    });

    dispatch(setUserProfile(data));
  };
};
