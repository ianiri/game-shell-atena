import { Link } from 'react-router-dom';
import { AuthorizeInline } from '../../auth';

export const Footer = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <div>
        <h1>
          <Link to="/" title="home">
            Game Shell
          </Link>
        </h1>
        <p className="text-xs">Crafted by Pixellab</p>
      </div>

      <ul>
        <AuthorizeInline>
          <li>
            <Link to="/profile" title="Go to profile">
              Profile
            </Link>
          </li>

          <li>
            <Link to="/play" title="Play now">
              Play
            </Link>
          </li>
        </AuthorizeInline>

        <li>
          <Link to="/ranks" title="See users">
            Ranks
          </Link>
        </li>
      </ul>
    </div>
  );
};
