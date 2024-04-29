import {NavLink} from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import DarkMode from './DarkMode';

function NavBar() {

  return (
    <div>
    <div className='container py-3 sm:py-0'>
      <div className="flex
      justify-between
      items-center">
        <div className='font-bold text-2xl sm:text-3xl'>The Book Club</div>
        <div> 
          <ul className='flex items-center gap-11'>
            <li><NavLink to="/"><img src="/assets/icons/home_FILL0_wght400_GRAD0_opsz24.png" alt='home-icon'/></NavLink></li>
            <li><NavLink to="/search"><img src="/assets/icons/search_FILL0_wght400_GRAD0_opsz24.png" alt='search-icon'/></NavLink></li>
            <li><NavLink to="/chat"><img src="/assets/icons/chat_FILL0_wght400_GRAD0_opsz24.png" alt='chat-icon'/></NavLink></li>
            <li><NavLink to="/about"><img src="/assets/icons/menu_book_FILL0_wght400_GRAD0_opsz24.png" alt='about-icon'/></NavLink></li>
            <li><NavLink to="/profile"><img src='/assets/icons/account_circle_FILL0_wght400_GRAD0_opsz24.png' alt='profile-icon'/></NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    );
  }
  
  export default NavBar;
  