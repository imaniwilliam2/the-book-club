import {Link, NavLink} from 'react-router-dom';
// import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';


const DropDownLinks = [
  {
    name: "Books Read",
    link: "/read"
  },
  {
    name: "Book To Be Read",
    link: "/tbread"
  }
]


function NavBar({ onLogout }) {

  return (
    <div className='bg-white shadow-lg'>
    <div className='container py-3 sm:py-0'>
      <div className="flex
      justify-between
      items-center">
        <div className='font-bold text-2xl sm:text-3xl'><Link to="/">The Book Club</Link></div>
        <div> 
          <ul className='items-center gap-11 hidden sm:flex'>
          {/* dropdown section */}
          <li className='group relative cursor-pointer'>
            <h1
            className=' font-bold flex h-[72px] items-center gap[2px]'
          >
            Quick Links
            <span>
              <FaCaretDown className='transition duration-300 group-hover:rotate-180' />
            </span>
          </h1>
           {/* dropdown links */}
           <div className='absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md'>
            <ul>
              {
                DropDownLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link}
                    className='inline-block w-full rounded-md p-2 hover:bg-orange-700'
                    >
                    {data.name}</a>
                  </li>
                ))
              }
              <button className='inline-block w-full rounded-md p-2 hover:bg-orange-700' onClick={onLogout}>Logout</button>
            </ul>
          </div>
          </li>
            <li><NavLink className="font-bold inline-blo ck py-4 px-4 hover:text-orange-800 duration-200" to="/">Home</NavLink></li>
            <li><NavLink className="font-bold inline-blo ck py-4 px-4 hover:text-orange-800 duration-200"  to="/search">View</NavLink></li>
            <li><NavLink className="font-bold inline-blo ck py-4 px-4 hover:text-orange-800 duration-200" to="/chat">Chat</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    );
  }
  
  export default NavBar;
  