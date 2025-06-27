import React, { useEffect, useState } from "react";
import one from "../assets/Slider/first.jpg";
import two from "../assets/Slider/secound.jpg";
import three from "../assets/Slider/three.jpg";
import four from "../assets/Slider/four.jpg";
import five from "../assets/Slider/five.jpg";
import blogone from "../assets/Home page/blog1.jpg";
import blogtwo from "../assets/Home page/blog2.jpg";
import blogthree from "../assets/Home page/blog3.jpg";
import blogfour from "../assets/Home page/blog4.jpg";
import blogfive from "../assets/Home page/blog5.jpg";
import blogsix from "../assets/Home page/blog6.jpg";
import blogseven from "../assets/Home page/blog7.jpg";
import person1 from "../assets/Home page/person-1.jpg";
import person2 from "../assets/Home page/person-2.jpg";
import person4 from "../assets/Home page/person-4.jpg";
import Navbar from "../Component/Navbar";
import jai from "../assets/Home page/jaishankar.png";
import nitin from "../assets/Home page/nitin.png";
import finance from "../assets/Home page/finance.avif";
import knagar from "../assets/Home page/knagar.png";
import Chatbot from "./Chatbot";
import { useNavigate } from "react-router-dom";
import Footer from "./../Component/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 4 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === 4 ? 0 : prev + 1));
  };

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      navigate("/signin"); // Redirect to login page if no token found
    }
  }, [navigate]);
  return (
    <>
      <Navbar />
      <div className=" flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px]">
        <div className="relative w-full sm:w-5/6 h-full mt-5 sm:mt-10 overflow-hidden shadow-lg">
          {/* Image Slides */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={one}
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
          </div>
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentIndex === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={two}
              className="w-full h-full object-cover"
              alt="Slide 2"
            />
          </div>
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentIndex === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={three}
              className="w-full h-full object-cover"
              alt="Slide 3"
            />
          </div>
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentIndex === 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={four}
              className="w-full h-full object-cover"
              alt="Slide 4"
            />
          </div>
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentIndex === 4 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={five}
              className="w-full h-full object-cover"
              alt="Slide 5"
            />
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2  bg-opacity-50 text-black p-2 sm:p-3 rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2  bg-opacity-50 text-black p-2 sm:p-3 rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Blog */}
      <div className="container mx-auto mt-10 px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section - Featured Article */}
        <div className="md:col-span-1 p-6 border-r">
          <img
            src={blogone}
            alt="Featured"
            className="w-[450px] h-[200px]   my-4"
          />
          <p className="text-sm text-gray-500">CULTURE • JUL 5TH '22</p>
          <h2 className="text-3xl font-bold mt-2">
            11 Work From Home Part-Time Jobs You Can Do Now
          </h2>
          <p className="text-gray-600 mt-2">
            highlights opportunities to earn income remotely while balancing
            other commitments. From freelance writing and virtual assisting to
            online tutoring, customer service roles, or social media management,
            these jobs cater to diverse skills and schedules.
          </p>
          <div className="flex items-center mt-6">
            <img
              className="object-cover object-center w-10 h-10 rounded-full"
              src={person1}
              // src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt="person"
            />
            <div className="mx-4">
              <h1 className="text-sm text-gray-700 ">Amelia. Anderson</h1>
              <p className="text-sm text-gray-500 ">Cameron Williamson</p>
            </div>
          </div>
        </div>

        {/* Second Section - Small Articles */}
        <div className="md:col-span-1 grid grid-cols-1 gap-6 p-6 border-r">
          <div>
            <img src={blogtwo} alt="Article" className="w-full  my-4" />
            <p className="text-sm text-gray-500">SPORT • JUL 5TH '22</p>
            <h3 className="text-xl font-semibold mt-1">
              Let's Get Back to Work, New York
            </h3>
            <img src={blogfour} alt="Article" className="w-full  my-4" />
            <p className="text-sm text-gray-500">Food • Jul 17th '22</p>
            <h3 className="text-xl font-semibold mt-1">
              How to Avoid Distraction and Stay Focused During Video Calls?
            </h3>
            <img src={blogsix} alt="Article" className="w-full  my-4" />
            <p className="text-sm text-gray-500">Design • Mar 15th '22</p>
            <h3 className="text-xl font-semibold mt-1">
              Why Craigslist Tampa Is One of The Most Interesting Places On the
              Web?
            </h3>
          </div>
        </div>

        {/* Third Section - Another Small Article */}
        <div className="md:col-span-1 grid grid-cols-1 gap-6 p-6 border-r">
          <div>
            <img src={blogthree} alt="Article" className="w-full  my-4" />
            <p className="text-sm text-gray-500">Business • Jul 5th '22</p>
            <h3 className="text-xl font-semibold mt-1">
              6 Easy Steps To Create Your Own Cute Merch For Instagram
            </h3>{" "}
            <img src={blogfive} alt="Article" className="w-full  my-4" />
            <p className="text-sm text-gray-500">Tech • Mar 1st '22</p>
            <h3 className="text-xl font-semibold mt-1">
              10 Life-Changing Hacks Every Working Mom Should Know
            </h3>{" "}
            <img src={blogseven} alt="Article" className="w-full  my-4" />
            <p className="text-sm text-gray-500">Travel • Jul 5th '22</p>
            <h3 className="text-xl font-semibold mt-1">
              5 Great Startup Tips for Female Founders
            </h3>
          </div>
        </div>

        {/* Right Section - Trending */}
        <div className="md:col-span-1 p-6">
          <h3 className="text-2xl font-bold mb-4">Trending</h3>
          <ul className="space-y-5">
            <li className="flex gap-2">
              <span className="text-gray-400 text-2xl font-bold">1</span>
              <div>
                <p className="font-semibold">
                  The Best Homemade Masks for Face
                </p>
                <span className="text-sm text-gray-500">Jane Cooper</span>
              </div>
            </li>
            <hr />
            <li className="flex gap-2 mb-2">
              <span className="text-gray-400 text-2xl font-bold">2</span>
              <div>
                <p className="font-semibold">
                  17 Pictures of Medium Length Hair in Layers That Will Inspire
                  Your New Haircut
                </p>
                <span className="text-sm text-gray-500">Wade Warren</span>
              </div>
            </li>
            <hr />
            <li className="flex gap-2 mb-2">
              <span className="text-gray-400 text-2xl font-bold">3</span>
              <div>
                <p className="font-semibold">
                  13 Amazing Poems from Shel Silverstein with Valuable Life
                  Lessons
                </p>
                <span className="text-sm text-gray-500">Esther Howard</span>
              </div>
            </li>
            <hr />
            <li className="flex gap-2 mb-2">
              <span className="text-gray-400 text-2xl font-bold">4</span>
              <div>
                <p className="font-semibold">
                  9 Half-up/half-down Hairstyles for Long and Medium Hair
                </p>
                <span className="text-sm text-gray-500">
                  Cameron Williamson
                </span>
              </div>
            </li>
            <hr />
            <li className="flex gap-2 mb-2">
              <span className="text-gray-400 text-2xl font-bold">5</span>
              <div>
                <p className="font-semibold">
                  Life Insurance And Pregnancy: A Working Mom’s Guide
                </p>
                <span className="text-sm text-gray-500">Jenny Wilson</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Culture */}
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold text-gray-800 ">Culture</h1>
        <hr className="my-4" />
        <div className="flex mt-10 flex-col lg:flex-row gap-6">
          {/* Left Section - Image (60%) */}
          <div className="lg:w-3/5">
            <img
              className="w-full h-80 xl:h-[28rem] object-cover"
              src={blogfive}
              alt="Culture"
            />
          </div>

          {/* Middle Section - Blog Post (20%) */}
          <div className="lg:w-1/5">
            <p className="text-xs font-semibold uppercase text-gray-600">
              Culture • Jul 5th '22
            </p>
            <p className="mt-2 text-2xl font-extrabold text-gray-800 lg:text-2xl">
              What is the son of Football Coach John Gruden, Deuce Gruden doing
              Now?
            </p>
            <p className="mt-3 text-gray-700 text-sm">
              Deuce Gruden, son of former NFL coach Jon Gruden, is currently
              serving as the Strength and Conditioning Assistant Coach for the
              Las Vegas Raiders. He joined the Raiders in 2018 and has been with
              the team for seven seasons.
            </p>
            <div className="flex items-center mt-4">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={person2}
                alt="Author"
              />
              <div className="ml-3">
                <h3 className="font-semibold text-gray-800">Wade Warren</h3>
                <p className="text-sm text-gray-600">Author</p>
              </div>
            </div>
          </div>

          {/* Right Section - Another Blog Post (20%) */}
          <div className="lg:w-1/5">
            <p className="text-xs font-semibold uppercase text-gray-600">
              Culture • Jul 5th '22
            </p>
            <h2 className="mt-2 text-lg font-extrabold text-gray-800 lg:text-xl">
              How to Avoid Distraction and Stay Focused During Video Calls?
            </h2>
            <p className="text-gray-700">Jenny Wilson</p>
            <hr className="my-4" />
            <h2 className="mt-2 text-lg font-extrabold text-gray-800 lg:text-xl">
              17 Pictures of Medium Length Hair in Layers That Will Inspire Your
              New Haircut
            </h2>
            <p className="text-gray-700">Jenny Wilson</p>
          </div>
        </div>
        {/*  */}

        <section className="text-gray-600 body-font">
          <div className="container mx-auto px-5 py-16">
            <div className="space-y-8">
              {[
                {
                  author: "Aditya Sinha",
                  date: "5 Jan 2020",
                  title: "China Clout in GenAI Patents",
                  description:
                    "By Aditya Sinha & Aasheerwad Dwivedi, In 1980, a small, nondescript garage in Palo Alto became the birthplace of what would eventually transform into Silicon Valley...",
                },
                {
                  author: "Arundhati Roy",
                  date: "15 Sep 2020",
                  title: "The Ministry of Utmost Happiness",
                  description:
                    "The novel weaves together the stories of people navigating some of the darkest and most violent episodes of modern Indian history...",
                },
                {
                  author: "Jhumpa Lahiri",
                  date: "28 Dec 2020",
                  title: "The Third and Final Continent",
                  description:
                    "I had assumed Mrs. Croft was in her eighties, perhaps as old as ninety. I had never known a person who had lived for over a century...",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-wrap md:flex-nowrap bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200"
                >
                  <div className="md:w-64 w-full mb-4 md:mb-0 flex-shrink-0 flex flex-col">
                    <span className="font-semibold text-gray-800">
                      {item.author}
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      {item.date}
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors cursor-pointer">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/*Business  */}
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold text-gray-800 ">Business</h1>
        <hr className="my-4" />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Blog List */}
          <div className="md:col-span-1 space-y-6">
            {[
              {
                title:
                  "How to Avoid Distraction and Stay Focused During Video Calls?",
                author: "Jenny Wilson",
                date: "Jul 5th '22",
              },
              {
                title:
                  "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
                author: "Jenny Wilson",
                date: "Jul 5th '22",
              },
              {
                title:
                  "9 Half-up/half-down Hairstyles for Long and Medium Hair",
                author: "Jenny Wilson",
                date: "Jul 5th '22",
              },
            ].map((post, index) => (
              <div key={index} className="border-b pb-4">
                <p className="text-xs uppercase text-gray-500">{post.date}</p>
                <h3 className="text-lg font-semibold hover:text-blue-600 transition duration-300 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600">{post.author}</p>
              </div>
            ))}
          </div>

          {/* Center Image Section */}
          <div className="md:col-span-1 flex flex-col items-center">
            <img
              src={blogthree}
              alt="Featured"
              className="shadow-lg w-full h-auto rounded-lg"
            />
            <p className="mt-4 text-gray-700 text-sm text-center">
              Quantum computing represents a significant leap forward in
              computational power and capability, harnessing the principles of
              quantum mechanics to process information in ways that classical
              computers cannot.
            </p>
          </div>

          {/* Right Featured Blog */}
          <div className="md:col-span-1">
            <p className="text-xs uppercase text-gray-500">
              Business • Jul 5th '22
            </p>
            <h2 className="text-2xl font-bold leading-tight mt-2">
              A Muslim girl survivor’s account of the hours before the 2002
              Gujarat riots
            </h2>
            <p className="text-gray-700 mt-3">
              On any given day in Jasmine, if we stand on our toes and crane our
              necks past the balcony, we can see the borders of the slum where
              Gulshan lives. The slum stretches along the great river Sabarmati,
              and where it ends marks the borderland between Khanpur and the
              neighbouring Shahpur. Small pockets of working-class Hindus and
              Muslims cohabit in these borderlands.
            </p>
            <div className="flex items-center mt-4">
              <img
                src={person4}
                alt="Author"
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="text-sm font-semibold">Wade Warren</span>
            </div>
          </div>
        </div>

        {/* Blog Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Left Blog Card - Dr. S. Jaishankar */}
          <div className="space-y-4 p-4   ">
            <img
              src={jai}
              alt="Dr. S. Jaishankar"
              className="w-full h-64 object-cover shadow-md hover:shadow-lg transition duration-300"
            />
            <p className="text-xs uppercase text-gray-500">
              Business • Jul 5th '22
            </p>
            <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer transition">
              Dr. S. Jaishankar
            </h3>
            <p className="text-sm text-gray-600 font-medium">
              Minister of External Affairs
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Dr. S. Jaishankar, India’s Minister of External Affairs, is a
              seasoned diplomat with a distinguished career spanning over four
              decades. He played a key role in the successful negotiation of the
              U.S.-India Civil Nuclear Agreement, marking a milestone in
              India-U.S. relations.
            </p>
          </div>

          {/* Right Blog Card - Nitin Gadkari */}
          <div className="space-y-4 p-4 ">
            <img
              src={nitin}
              alt="Nitin Gadkari"
              className="w-full h-64 object-cover  shadow-md hover:shadow-lg transition duration-300"
            />
            <p className="text-xs uppercase text-gray-500">
              Business • Jul 5th '22
            </p>
            <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer transition">
              EVs to reach cost parity with ICE in 2 years: Gadkari
            </h3>
            <p className="text-sm text-gray-600 font-medium">Nitin Gadkari</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              With falling lithium-ion battery prices, electric vehicles (EVs)
              can now maintain cost without subsidies. It is up to the Finance
              and Heavy Industries Ministries to decide whether incentives
              should be given to electric vehicles, Union Minister Nitin Gadkari
              said on Monday.
            </p>
          </div>
        </div>
      </section>

      {/* Finance */}
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold text-gray-800 ">Finance</h1>
        <hr className="my-4" />
        <div className="px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
              <img
                className="object-cover object-center w-full h-80 xl:h-[28rem] "
                src={finance}
                // src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <div>
                <p className="mt-6 text-sm text-gray-800 uppercase">
                  Want to know
                </p>
                <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800">
                  SAT dismisses SEBI's order against Prannoy Roy, Radhika Roy in
                  insider trading case.
                </h1>
                <div className="flex items-center mt-6">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src={knagar}
                    // src="https://images.u/nsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 ">K.SheeraSagar</h1>
                    <p className="text-sm text-gray-500 ">StockMarket Expert</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
              <div>
                <p className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                  Osel Devices IPO: Day 1 - Check Subscription Status, GMP, and
                  Key Dates
                </p>
              </div>
              <hr className="my-6 border-gray-200 dark:border-gray-700" />
              <div>
                <p className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                  Pelatro IPO booked 0.43 times on Day 1, retail portion
                  subscribed 0.79 times
                </p>
              </div>
              <hr className="my-6 border-gray-200 dark:border-gray-700" />
              <div>
                <p className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                  Excellent Wires IPO: Latest GMP, steps to check allotment
                  status online
                </p>
              </div>
              <hr className="my-6 border-gray-200 dark:border-gray-700" />
              <div>
                <p className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                  ICICI Bank, HCL Tech...nearly 400 stocks hit 1-year highs;
                  check details
                </p>
              </div>{" "}
              <hr className="my-6 border-gray-200 dark:border-gray-700" />
              <div>
                <p className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                  Small-cap SME stock hits upper circuit. Rises 650% in
                  six-month post-listing
                </p>
              </div>{" "}
              <hr className="my-6 border-gray-200 dark:border-gray-700" />
              <div>
                <p className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                  American Airlines in talks to pick Citigroup over Barclays for
                  crucial card deal: Sources
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Chatbot />
      <Footer />
    </>
  );
};

export default Home;
