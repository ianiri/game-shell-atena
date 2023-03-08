import { client } from '../../../api/users';

// async thunk
export const readUsers = () => {
  return async (dispatch) => {
    const { data } = await client.get('/users');

    dispatch(setUsers(data));
  };
};

// async thunk
export const readUser = (id) => {
  return async (dispatch) => {
    const { data } = await client.get(`/users/${id}`);

    dispatch(setUser(data));
  };
};

// sync action creator
export const setUsers = (users) => {
  return {
    type: 'users/setAll',
    payload: users,
  };
};

export const setUser = (user) => {
  return {
    type: 'users/setUser',
    payload: user,
  };
};
