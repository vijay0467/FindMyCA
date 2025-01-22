import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <NavLink
          className="flex items-center text-lg font-semibold text-gray-800 font-serif"
          to="/"
        >
          <img
            src="logo.jpg"
            alt="Logo"
            className="w-8 h-8 rounded-full mr-1"
          />
          FindMyCA
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="block lg:hidden text-gray-800 focus:outline-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Collapsible Menu */}
        <div className="hidden lg:flex space-x-6">
          <ul className="flex items-center space-x-4">
            {/* Navigation Links */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 transition ${
                    isActive ? "font-bold border-b-2 border-blue-600" : ""
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 transition ${
                    isActive ? "font-bold border-b-2 border-blue-600" : ""
                  }`
                }
                to="/profile"
              >
                Profiles
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 transition ${
                    isActive ? "font-bold border-b-2 border-blue-600" : ""
                  }`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 transition ${
                    isActive ? "font-bold border-b-2 border-blue-600" : ""
                  }`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
