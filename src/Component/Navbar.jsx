import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/Logo/profile-pic (3) (1).png";
const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#user-menu-button") &&
        !event.target.closest("#user-dropdown")
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-900 border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/home"
          className="text-2xl font-black cursor-pointer text-white"
        >
          BlogElevate
        </Link>

        {/* User Profile and Mobile Toggle Button */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src={profile} alt="User" />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div
              className="absolute z-30 right-5 mt-24 w-24 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <ul className="py-2">
                <li>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      localStorage.clear(); // Clears all localStorage data
                      navigate("/"); // Redirect to the signin page (if using React Router)
                    }}
                    className="block w-full text-left px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent  dark:bg-gray-800 md:dark:bg-transparent  dark:border-gray-700">
            <li>
              <Link
                to="/home"
                className="py-2 px-3 font-bold text-lg text-gray-600  dark:text-white hover:text-gray-800 dark:hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="py-2 px-3 font-bold text-lg text-gray-600  dark:text-white hover:text-gray-800 dark:hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/single-post"
                className="py-2 px-3 font-bold text-lg text-gray-600  dark:text-white hover:text-gray-800 dark:hover:text-blue-500"
              >
                Single Post
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="py-2 px-3 font-bold text-lg text-gray-600  dark:text-white hover:text-gray-800 dark:hover:text-blue-500"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="py-2 px-3 font-bold text-lg text-gray-600  dark:text-white hover:text-gray-800 dark:hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
