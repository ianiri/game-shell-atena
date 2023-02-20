import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <div>
        <h2>
          <Link to="/" title="Go to Home">Game Shell</Link>
        </h2>
        <p className="text-xs">Crafted by me :)</p>
      </div>

      <ul>
        <li>
          <Link to="/profile" title="Go to Profile">Profile</Link>
        </li>
        <li>
          <Link to="/play" title="Go to Play">Play</Link>
        </li>
        <li>
          <Link to="/ranks" title="Go to Ranks">Ranks</Link>
        </li>
      </ul>
    </div>
  )
}
