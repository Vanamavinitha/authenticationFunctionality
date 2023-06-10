// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header ">
    <ul className="nav-menu">
      <li className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
