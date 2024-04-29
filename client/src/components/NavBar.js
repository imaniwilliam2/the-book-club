import {Link, NavLink} from 'react-router-dom';
// import { useState } from 'react';


function NavBar() {

  return (
    <div className='bg-neutral-50'>
    <div className='container py-3 sm:py-0'>
      <div className="flex
      justify-between
      items-center">
        <div className='font-bold text-2xl sm:text-3xl'><Link to="/">The Book Club</Link></div>
        <div> 
          <ul className='items-center gap-11 hidden sm:flex'>
            <div>
    
            </div>
            <li><NavLink className="font-bold inline-blo ck py-4 px-4 hover:text-orange-800 duration-200" to="/">Home</NavLink></li>
            <li><NavLink className="font-bold inline-blo ck py-4 px-4 hover:text-orange-800 duration-200"  to="/search">View</NavLink></li>
            <li><NavLink className="font-bold inline-blo ck py-4 px-4 hover:text-orange-800 duration-200" to="/chat">Chat</NavLink></li>
            <li><NavLink to="/profile"><img src='/assets/icons/account_circle_FILL0_wght400_GRAD0_opsz24.png' alt='profile-icon'/></NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    );
  }
  
  export default NavBar;
  