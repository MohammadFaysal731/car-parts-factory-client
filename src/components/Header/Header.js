import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open,setOpen]=useState(false);
  const menuItems =
  <>
 <li className='mx-3'><Link to="/">Home</Link></li> 
 <li className='mx-3'><Link to="/">Home</Link></li> 
 <li className='mx-3'><Link to="/">Home</Link></li> 
 <li className='mx-3'><Link to="/">Home</Link></li> 
 <li className='mx-3'><Link to="/">Home</Link></li> 
  </>
  return (
    <nav className="bg-primary text-white p-5 ">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl mb-2">Car Parts Factory</h1>
            <label
              onClick={() => setOpen(!open)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <ul className="hidden lg:flex text-xl">{menuItems}</ul>
          {/* mobile menu */}
          <ul
            className={`lg:hidden text-xl ${
              open ? "max-h-auto" : "max-h-0 overflow-hidden"
            }`}
          >
            {menuItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;