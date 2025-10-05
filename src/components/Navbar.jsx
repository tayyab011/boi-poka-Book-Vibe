import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css"

const Navbar = () => {

    const link = (
      <>
        <li className="mr-5 mb-2">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mr-5 mb-2">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="mr-5 mb-2">
          <NavLink to="/readList">AllList </NavLink>
        </li>
      </>
    );
    return (
      <nav className="bg-gray-100 sticky top-0 z-50">
        <div className="navbar ">
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {link}
                </ul>
              </div>
              <a className=" text-xl">BookShop</a>
            </div>
            <div className="navbar-center hidden md:flex ">
              <ul className="menu menu-horizontal px-1 ">{link} </ul>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;