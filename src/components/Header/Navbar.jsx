import React from 'react';
import { Link, Links } from 'react-router';

const Navbar = () => {
    const links = <>
    <Link to="/"><li className='m-4'>Home</li></Link>
    {/* <li className='m-4'>Listed Books</li> */}
    <Link to="/readList"><li className='m-4'>Read List</li></Link>
    <Link to="/about"><li className='m-4'>About</li></Link>
    <li className='m-4'>Pages to Reads</li>
    </>
    return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            
        {links}

      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Booi Poka</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

         {links}

    </ul>
  </div>
  <div className="navbar-end gap-4" >
    <a className="btn bg-[#23BE0A] text-white rounded-xl ">SIgn Up</a>
    <a className="btn bg-[#59C6D2] text-white rounded-xl">Sign In</a>
  </div>
</div>
    );
};

export default Navbar;