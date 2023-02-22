import {FiMeh} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {UserControls} from '.';

export const Header = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <h1 className="uppercase font-bold text-lg">
        <Link to="/" title="Go to Home" className="flex items-center gap-1">
          <FiMeh size={24} className="inline-block"></FiMeh>
          Game Shell
        </Link>
      </h1>
      <div>
        <UserControls></UserControls>
      </div>
    </div>
  )
}
