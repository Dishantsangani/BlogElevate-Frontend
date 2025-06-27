import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Chatbot from "./Chatbot";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Component/Footer";

function Pricing() {
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = async () => {
    setloader(true);
    try {
      let response = await axios.post(
        "https://blogelevate-backend.onrender.com/auth/payment"
      );
      setloader(false);
      if (response && response.status === 200) {
        // Redirect to the Stripe checkout page
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
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
      <div className="container bg-white  mx-auto px-6 py-12 text-center lg:text-left">
        <h1 className="text-2xl font-bold text-gray-800 ">Pricing</h1>
        <hr className="mt-3 mb-10 border-t-2 border-gray-300  w-full" />
        <div className="bg-white ">
          <div className="container px-6 py-8 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
              <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 ">
                <div className="flex-shrink-0">
                  <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-gray-600 uppercase rounded-lg bg-gray-50">
                    Casual
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <span className="pt-2 text-3xl font-bold text-gray-800 uppercase ">
                    Free
                  </span>
                </div>
                <ul className="flex-1 space-y-4">
                  <li className="text-gray-500 ">Free Setup Guildance</li>
                  <li className="text-gray-500 ">Email Support</li>
                  <li className="text-gray-500 ">Unlimited Funnel Reports</li>
                </ul>
                <button
                  onClick={() => handlesubmit()}
                  className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none"
                >
                  {loader ? "starting" : "Start free"}
                </button>
              </div>

              <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 ">
                <div className="flex-shrink-0">
                  <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-gray-600 uppercase rounded-lg bg-gray-50 ">
                    Professional
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <span className="pt-2 text-3xl font-bold text-gray-800 uppercase ">
                    <button onClick={() => handlesubmit()}>$24.90</button>
                  </span>
                  <span className="text-gray-500 ">/month</span>
                </div>
                <ul className="flex-1 space-y-4">
                  <li className="text-gray-500 ">Free Setup Guildance</li>
                  <li className="text-gray-500 ">Email Support</li>
                  <li className="text-gray-500 ">Unlimited Funnel Reports</li>
                  <li className="text-gray-500 ">Retention Reporting</li>
                </ul>
                <button
                  onClick={() => handlesubmit()}
                  className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none"
                >
                  {loader ? "starting" : "Start free"}
                </button>
              </div>

              <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 ">
                <div className="flex-shrink-0">
                  <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-gray-600 uppercase rounded-lg bg-gray-50 ">
                    Expert
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <span className="pt-2 text-3xl font-bold text-gray-800 uppercase ">
                    <button onClick={() => handlesubmit()}>$49.90</button>
                  </span>
                  <span className="text-gray-500 ">/month</span>
                </div>
                <ul className="flex-1 space-y-4">
                  <li className="text-gray-500 ">Free Setup Guildance</li>
                  <li className="text-gray-500 ">Email Support</li>
                  <li className="text-gray-500 ">Unlimited Funnel Reports</li>
                  <li className="text-gray-500 ">Retention Reporting</li>
                  <li className="text-gray-500 ">Full Cohort Analysis</li>{" "}
                  <li className="text-gray-500 ">Data Export</li>
                </ul>
                <button
                  onClick={() => handlesubmit()}
                  className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none"
                >
                  {loader ? "starting" : "Start free"}
                </button>
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

export default Pricing;
