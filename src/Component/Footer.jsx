import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-center px-4 text-gray-800 bg-[#E5E7EB] dark:text-white dark:bg-gray-900">
      <div className="container px-6 py-6 max-w-screen-lg">
        <h2 className="text-lg font-bold text-center lg:text-2xl">
          Join 31,000+ others and never miss <br /> out on new tips, tutorials,
          and more.
        </h2>
        <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-800 dark:focus:border-gray-800 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
            placeholder="Email Address"
          />
          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            Subscribe
          </button>
        </div>
        <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />
        <div className="flex flex-col items-center justify-between md:flex-row">
          <h2 className="text-2xl font-black">BlogElevate</h2>
          <p>
            © 2024{" "}
            <Link
              to={"https://dishant27.netlify.app/"}
              className="text-blue-700"
            >
              {" "}
              Dishant Sangani{" "}
            </Link>{" "}
            | All rights reserved.
          </p>
          <div className="flex mt-4 md:m-0">
            <nav aria-label="Footer Navigation">
              <ul className="flex -mx-4">
                <li>
                  <Link
                    to={"/about"}
                    className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-700 hover:underline"
                    aria-label="Go to About page"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/single-post"}
                    className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-700 hover:underline"
                    aria-label="Go to Blog page"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/pricing"}
                    className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-700 hover:underline"
                    aria-label="Go to News page"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/Contact"}
                    className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-700 hover:underline"
                    aria-label="Go to Contact page"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
