import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <header className="nav-header">
        <Link to="/" className='header'><h1>The Book Club</h1></Link>
        <div className="profile-icon-container">
          <Link to="/profile" className='profile-icon'><img src='/assets/icons/user.png' alt='profile-icon'/></Link>
        </div>
        <nav className='nav-bar'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/chat">Chats</NavLink>
          <NavLink to="/about">About The Club</NavLink>
        </nav>
      </header>
    );
  }
  
  export default NavBar;
  