import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../ui';

export const UserControls = () => {
  const authenticated = useSelector(({ auth }) => {
    return auth.authenticated;
  });
  const dispatch = useDispatch();

  return (
    <>
      {authenticated === true ? (
        <div className="flex gap-2">
          <Link to="/profile" title="Profile">
            Profile
          </Link>

          <Button
            title="Log Out"
            type="button"
            onClick={() => {
              dispatch({
                type: 'auth/logOut',
              });
            }}
          >
            Log out
          </Button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
