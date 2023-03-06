import { client } from './../../../api/users';

// functie care primeste payload de user, si returneaza
// {type: '', payload: {}}
// action creator:
export const setUser = (user) => {
  return {
    type: 'auth/setUser',
    payload: user,
  };
};

export const setUserStats = (stats) => {
  return {
    type: 'auth/setUserStats',
    payload: stats,
  };
};

// GET -> /users/12312312421342131
export const readUser = (userId) => {
  return async () => {
    const { data } = await client.get(`/users/${userId}`);

    return data;
  };
};

// POST -> /users
export const createUser = (userId) => {
  return async (_, getState) => {
    const { auth } = getState();
    const { stats } = auth;

    const { data } = await client.post('/users', {
      id: userId,
      stats,
    });

    return data;
  };
};
