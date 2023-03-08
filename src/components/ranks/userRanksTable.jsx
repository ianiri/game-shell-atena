import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { readUsers } from '../../store/action/users/usersActions';

export const UserRanksTable = () => {
  const dispatch = useDispatch();
  // refactor
  const users = useSelector(({ users }) => {
    return users.users;
  });

  // refactor 2
  useEffect(() => {
    dispatch(readUsers());
  }, [dispatch]);

  if (users.length < 1) {
    return <>nu am useri</>;
  }

  return (
    <ul>
      {users.map(({ id, stats }) => {
        return (
          <li key={id}>
            <Link className="flex justify-between" to={`/ranks/${id}`}>
              {id}

              <span>Games played: {stats.gamesPlayed}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
