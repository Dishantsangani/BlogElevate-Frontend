import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Images
import first from "../assets/SignIn&Landingpage/first.avif";
import secound from "../assets/SignIn&Landingpage/secound.avif";
import three from "../assets/SignIn&Landingpage/threed.avif";
import four from "../assets/SignIn&Landingpage/four.avif";
import landingbg from "../assets/SignIn&Landingpage/landingbg.avif";
import Chatbot from "./Chatbot";

function Landing() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-gray-900 border-gray-200 ">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-black cursor-pointer text-white"
          >
            BlogElevate
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/signin"
                  className="py-2 px-3 font-bold text-lg text-white   hover:text-gray-800 dark:hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="py-2 px-3 font-bold text-lg text-white hover:text-gray-800 dark:hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="py-2 px-3 font-bold text-lg text-white hover:text-gray-800 dark:hover:text-blue-500"
                >
                  Single Post
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="py-2 px-3 font-bold text-lg text-white hover:text-gray-800 dark:hover:text-blue-500"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="py-2 px-3 font-bold text-lg text-white hover:text-gray-800 dark:hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Sign In & Sign Up Buttons */}
          <div className="hidden md:flex space-x-3">
            <button
              onClick={() => navigate("/signin")}
              className="rounded-xl bg-[#303B4C]  cursor-pointer px-4 py-2 text-white font-medium hover:bg-[#445877]"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="rounded-xl border  cursor-pointer bg-white px-4 py-2 text-[#303B4C]  shadow font-medium hover:bg-white"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
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
          className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden w-full`}
        >
          <ul className="flex flex-col p-4 space-y-2 border border-gray-100 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <li>
              <Link
                to="/signin"
                className="py-2 px-3 block  text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="py-2 px-3 block text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="py-2 px-3 block text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Single Post
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="py-2 px-3 block text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="py-2 px-3 block text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={() => navigate("/signin")}
                className="w-full rounded-xl bg-[#303B4C] py-2 text-white font-medium hover:bg-[#445877]"
              >
                Sign In
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/signup")}
                className="w-full rounded-xl border bg-white py-2 text-[#303B4C] shadow font-medium hover:bg-blue-50"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <article>
          <header className="mx-auto mt-20 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            <p className="text-gray-500">Published April 4, 2022</p>
            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Why quit now?
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              You've come way farther than you expected
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Marketing
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Branding
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Digital
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Identity
              </button>
            </div>
            <img
              className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover"
              src={landingbg}
              // src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </header>
          <div className="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <h2 className="text-2xl font-semibold">
              First Steps to Life Betterment
            </h2>
            <blockquote className="max-w-lg border-l-4 px-4">
              {" "}
              First Steps to Life Betterment Could you clarify if it's a book,
              article, or concept? I'd be happy to explore it!
              <span className="whitespace-nowrap text-sm">— Daniel Lehmer</span>
            </blockquote>
            <p>
              I couldn't find a direct connection between Daniel Lehmer and
              "First Steps to Life Betterment." Could you share more details? If
              it's a book, article, or concept, I'd love to explore and discuss
              it further!
            </p>
            <p>
              I couldn’t find a direct link between Daniel Lehmer and "First
              Steps to Life Betterment." Could you share more details? I'd love
              to explore it!
            </p>
          </div>
        </article>
      </main>

      <div className="w-fit mx-auto mt-10 flex space-x-2">
        <div className="h-0.5 w-2 bg-gray-600" />
        <div className="h-0.5 w-32 bg-gray-600" />
        <div className="h-0.5 w-2 bg-gray-600" />
      </div>
      <aside
        aria-label="Recent Posts"
        className="mx-auto mt-10 max-w-screen-xl py-20"
      >
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Heading */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Most Recent Posts
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Discover the latest trends, insights, and updates on coding,
              technology, and innovation to stay ahead in the digital world
            </p>
          </div>

          {/* /Heading */}
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {/* box1 */}
            <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <p className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                <img
                  src={first}
                  // src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt="backgroud"
                  className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 2, 2022</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <p className="active:text-gray-600 transition duration-100 hover:text-gray-600">
                    The Pines and the Mountains
                  </p>
                </h2>
                <p className="text-gray-500">
                  evokes a sense of tranquility, resilience, and nature's
                  timeless beauty.
                </p>
                <div>
                  <p className="font-semibold text-gray-800 transition duration-100 hover:text-gray-600">
                    Read more
                  </p>
                </div>
              </div>
            </article>

            {/* box2 */}
            <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <p className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                <img
                  src={secound}
                  // src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt="backgroud"
                  className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">March 20, 2025</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <p className=" transition duration-100 hover:text-gray-600">
                    The Coding Mania
                  </p>
                </h2>
                <p className="text-gray-500">
                  Dive into the world of coding, explore new technologies, and
                  turn ideas into reality.
                </p>
                <div>
                  <p className=" font-semibold text-gray-800 transition duration-100 hover:text-gray-600">
                    Read more
                  </p>
                </div>
              </div>
            </article>

            {/* box3 */}
            <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <p className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                <img
                  src={three}
                  // src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  loading="lazy"
                  alt="backgroud"
                  className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">june 27, 2019</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <p className=" transition duration-100 hover:text-gray-600">
                    Architectural Warfare
                  </p>
                </h2>
                <p className="text-gray-500">
                  A battle of creativity and strategy, where structures rise and
                  ideas collide. It’s not just about building;
                </p>
                <div>
                  <p className=" font-semibold text-gray-800 transition duration-100 hover:text-gray-600">
                    Read more
                  </p>
                </div>
              </div>
            </article>

            {/* box4*/}
            <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <p className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                <img
                  src={four}
                  // src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                  loading="lazy"
                  alt="backgroud"
                  className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">Augest 16, 2021</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <p className=" transition duration-100 hover:text-gray-600">
                    Blues in Architechture
                  </p>
                </h2>
                <p className="text-gray-500">
                  From serene pastel facades to bold navy interiors, it enhances
                  spaces with tranquility and elegance.
                </p>
                <div>
                  <p className=" font-semibold text-gray-800 transition duration-100 hover:text-gray-600">
                    Read more
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </aside>
      <Chatbot />
      {/* Footer */}
      <footer className="flex justify-center px-4 text-gray-800 bg-[#E5E7EB] dark:text-white dark:bg-gray-900">
        <div className="container px-6 py-6 max-w-screen-lg">
          <h2 className="text-lg font-bold text-center lg:text-2xl">
            Join 31,000+ others and never miss <br /> out on new tips,
            tutorials, and more.
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
                      to={"/signin"}
                      className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-700 hover:underline"
                      aria-label="Go to About page"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/signin"}
                      className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-700 hover:underline"
                      aria-label="Go to Blog page"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/signin"}
                      className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-700 hover:underline"
                      aria-label="Go to News page"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/signin"}
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
    </>
  );
}

export default Landing;
