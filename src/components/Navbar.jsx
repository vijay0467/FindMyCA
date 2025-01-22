import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <NavLink
          className="flex items-center text-lg font-semibold text-gray-800 font-serif"
          to="/"
          onClick={closeMenu} // Close menu when clicking the logo
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
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
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
        <div
          className={`${
            isMenuOpen ? "block bg-white" : "hidden"
          } lg:flex lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto p-4 lg:p-0 z-10`}
        >
          <ul className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-4 space-y-4 lg:space-y-0">
            <li>
              <NavLink
                to="/"
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={closeMenu} // Close menu after selecting this link
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={closeMenu} // Close menu after selecting this link
              >
                Profiles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={closeMenu} // Close menu after selecting this link
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={closeMenu} // Close menu after selecting this link
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
