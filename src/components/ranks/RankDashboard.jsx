import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {readUser} from "../../store/action/users/usersActions";
import {StatsList} from "../stats";

export const RankDashboard = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector(({ users }) => {
    return users.entities[userId];
  });

  useEffect(() => {
    dispatch(readUser(userId));
  }, [dispatch, userId]);

  if (!user) {
    return <>...loading</>;
  }

  const { gamesLost, gamesPlayed, gamesWon } = user.stats;

  return (
    <>
      <StatsList
        played={gamesPlayed}
        won={gamesWon}
        lost={gamesLost}
      ></StatsList>
    </>
  );
};
