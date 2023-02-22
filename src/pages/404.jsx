import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'
import { FullscreenLayout } from '../layouts'

export const FourOhFour = () => {
  const dispatch = useDispatch();

  return (
    <FullscreenLayout>
      <div className="bg-pink-400 w-screen h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <span className="text-7xl animate-pulse block">404</span>
          <Link to="/" title="Home" className="font-bold">Home</Link>
        </div>

        <button
          onClick={() => {
            dispatch({
              type: 'add',
              payload: 404,
            })
          }}
        >
          Add 404 to state
        </button>
      </div>
    </FullscreenLayout>
  )
}
