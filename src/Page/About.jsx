import React, { useEffect } from "react";
import Navbar from "../Component/Navbar";
import about1 from "../assets/About Page/about1.jpg";
import about2 from "../assets/About Page/about2.jpg";
import about3 from "../assets/About Page/about3.jpg";
import linkdin from "../assets/About Page/linkdin.svg";
import facebook from "../assets/About Page/facebook.svg";
import instagram from "../assets/About Page/instagram.svg";
import team1 from "../assets/About Page/team-1.jpg";
import team2 from "../assets/About Page/team-2.jpg";
import team3 from "../assets/About Page/team-3.jpg";
import team4 from "../assets/About Page/team-4.jpg";
import Chatbot from "./Chatbot";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      navigate("/signin"); // Redirect to login page if no token found
    }
  }, [navigate]);
  return (
    <>
      <Navbar />
      <section className="container mx-auto px-6 py-12">
        {/* Heading */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold text-gray-800 ">About</h1>
          <hr className="mt-3 mb-6 border-t-2 border-gray-300  w-full" />
        </div>

        {/* Content Section */}
        <div className="lg:flex lg:items-center lg:gap-12">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-5">
            <h6 className="text-gray-500 uppercase tracking-wider text-sm">
              Who We Are
            </h6>
            <h2 className="text-3xl font-bold">
              Unleashing Potential with Creative Strategy
            </h2>
            <p className="italic text-gray-600">
              In today’s fast-paced world, success demands more than just
              effort—it requires creativity, adaptability, and vision.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <p>
                  Competitive Advantage Stay ahead by embracing fresh, dynamic
                  approaches.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <p>
                  Scalable & Sustainable Solutions Build strategies that evolve
                  and last..
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <p>
                  A powerful strategy isn't just about planning; it's about
                  thinking differently, innovating boldly, and executing with
                  precision.
                </p>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 mt-8 lg:mt-0">
            <img
              src={about1}
              alt="Team Meeting"
              className="rounded-xl shadow-lg object-cover w-full h-full"
            />
            <div className="flex flex-col gap-4 h-full">
              <img
                src={about2}
                alt="Brainstorming Session"
                className="rounded-xl shadow-lg object-cover w-full h-1/2"
              />
              <img
                src={about3}
                alt="Successful Handshake"
                className="rounded-xl shadow-lg object-cover w-full h-1/2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <div className="container mx-auto px-6 py-12 text-center lg:text-left">
        <h1 className="text-2xl font-bold text-gray-800 ">Team</h1>
        <hr className="mt-3 mb-10 border-t-2 border-gray-300  w-full" />

        <div className="grid gap-10  mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
          {/* Team Member 1 */}
          <div className="grid sm:grid-cols-3 shadow-xl">
            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
              <img
                src={team1}
                className="absolute object-cover w-full h-full rounded"
                alt="Oliver Aguilerra"
              />
            </div>
            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">Oliver Aguilerra</p>
              <p className="mb-4 text-xs text-gray-800 ">Product Manager</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800 ">
                Vincent Van Gogh’s most popular painting, The Starry Night.
              </p>
              <div className="flex items-center space-x-3">
                <img src={linkdin} className="h-5" alt="LinkedIn" />
                <img src={facebook} className="h-5" alt="Facebook" />
                <img src={instagram} className="h-5" alt="Instagram" />
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="grid sm:grid-cols-3 shadow-xl ">
            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
              <img
                src={team2}
                className="absolute object-cover w-full h-full rounded"
                alt="Marta Clermont"
              />
            </div>
            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">Marta Clermont</p>
              <p className="mb-4 text-xs text-gray-800 ">Design Team Lead</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800 ">
                Amet I love liquorice jujubes pudding croissant I love pudding.
              </p>
              <div className="flex items-center space-x-3">
                <img src={linkdin} className="h-5" alt="LinkedIn" />
                <img src={facebook} className="h-5" alt="Facebook" />
                <img src={instagram} className="h-5" alt="Instagram" />
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="grid sm:grid-cols-3 shadow-xl">
            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
              <img
                src={team3}
                className="absolute object-cover w-full h-full rounded"
                alt="Alice Melbourne"
              />
            </div>
            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">Alice Melbourne</p>
              <p className="mb-4 text-xs text-gray-800 ">Human Resources</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800 ">
                Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing
                elit.
              </p>
              <div className="flex items-center space-x-3">
                <img src={linkdin} className="h-5" alt="LinkedIn" />
                <img src={facebook} className="h-5" alt="Facebook" />
                <img src={instagram} className="h-5" alt="Instagram" />
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="grid sm:grid-cols-3 shadow-xl">
            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
              <img
                src={team4}
                className="absolute object-cover w-full h-full rounded"
                alt="John Doe"
              />
            </div>
            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
              <p className="text-lg font-bold">John Doe</p>
              <p className="mb-4 text-xs text-gray-800 ">Good guy</p>
              <p className="mb-4 text-sm tracking-wide text-gray-800 ">
                Bacon ipsum dolor sit amet salami jowl corned beef, andouille
                flank.
              </p>
              <div className="flex items-center space-x-3">
                <img src={linkdin} className="h-5" alt="LinkedIn" />
                <img src={facebook} className="h-5" alt="Facebook" />
                <img src={instagram} className="h-5" alt="Instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </>
  );
}

export default About;
