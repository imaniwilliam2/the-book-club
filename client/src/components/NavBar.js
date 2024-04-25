import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DarkMode from './DarkMode';

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false)


    return (
      <header className="nav-header">
        <Link to="/" className='header'><h1>The Book Club</h1></Link>
        <div className="profile-icon-container">
          <Link to="/profile" className='profile-icon'><img src='/assets/icons/user.png' alt='profile-icon'/></Link>
        </div>
        <nav className='nav-bar'>
          <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <DarkMode />
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li><NavLink to="/"><img src="/assets/icons/home_FILL0_wght400_GRAD0_opsz24.png" alt='home-icon'/>Home</NavLink></li>
            <li><NavLink to="/search"><img src="/assets/icons/search_FILL0_wght400_GRAD0_opsz24.png" alt='search-icon'/>View</NavLink></li>
            <li><NavLink to="/chat"><img src="/assets/icons/chat_FILL0_wght400_GRAD0_opsz24.png" alt='chat-icon'/>Chats</NavLink></li>
            <li><NavLink to="/about"><img src="/assets/icons/menu_book_FILL0_wght400_GRAD0_opsz24.png" alt='about-icon'/>About</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default NavBar;
  