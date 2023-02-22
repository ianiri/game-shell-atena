import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Layout } from "../layouts";
import {client as usersApi} from './../api/users'

export const Home = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const number = useSelector((state) => {
    return state.counter;
  });

  useEffect(() => {
    usersApi.get('/users').then((response) => {
      const { data } = response;

      setUsers(data);
    });
  }, [setUsers]);

  return (
    <Layout>
      <div className="mx-auto px-4 container">
        Home: {JSON.stringify(users)}
        <p className="mt-6">{number}</p>
        <div>
          <button
            onClick={() => {
              dispatch({
                type: 'increment',
              });
            }}
          >
            Increment +
          </button>

          <button
            onClick={() => {
              dispatch({
                type: 'decrement',
              });
            }}
          >
            Decrement -{' '}
          </button>
        </div>
      </div>
    </Layout>
  );
};
