import { client } from '../../../api/users';
import { setUserStats } from '../auth';

// async thunk
export const resolveGame = (won = false) => {
  return async (dispatch, getState) => {
    const { auth } = getState();
    const { user, stats } = auth;
    const { id } = user;

    const newStats = {
      ...stats,
    };

    if (won === true) {
      newStats.gamesWon += 1;
    } else {
      newStats.gamesLost += 1;
    }

    newStats.gamesPlayed += 1;

    const { data } = await client.patch(`/users/${id}`, {
      stats: newStats,
    });

    dispatch(setUserStats(data.stats));
  };
};
