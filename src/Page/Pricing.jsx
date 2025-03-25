import React, { useEffect } from "react";
import Navbar from "../Component/Navbar";
import Chatbot from "./Chabot";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Component/Footer";

function Pricing() {
  const navigate = useNavigate();

  const handlesubmit = async () => {
    try {
      let response = await axios.post(
        "https://blogelevate-backend.onrender.com/auth/payment"
      );
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
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Pricing
        </h1>
        <hr className="mt-3 mb-10 border-t-2 border-gray-300 dark:border-gray-600 w-full" />
        <div className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-8 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
              <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                <div className="flex-shrink-0">
                  <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-gray-600 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                    Casual
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                    Free
                  </span>
                </div>
                <ul className="flex-1 space-y-4">
                  <li className="text-gray-500 dark:text-gray-400">
                    Free Setup Guildance
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Email Support
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Unlimited Funnel Reports
                  </li>
                </ul>
                <button
                  onClick={() => handlesubmit()}
                  className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none"
                >
                  Start free
                </button>
              </div>

              <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                <div className="flex-shrink-0">
                  <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-gray-600 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                    Professional
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                    <button onClick={() => handlesubmit()}>$24.90</button>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <ul className="flex-1 space-y-4">
                  <li className="text-gray-500 dark:text-gray-400">
                    Free Setup Guildance
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Email Support
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Unlimited Funnel Reports
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Retention Reporting
                  </li>
                </ul>
                <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none">
                  Start free trial
                </button>
              </div>

              <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                <div className="flex-shrink-0">
                  <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-gray-600 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                    Expert
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                    <button onClick={() => handlesubmit()}>$49.90</button>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <ul className="flex-1 space-y-4">
                  <li className="text-gray-500 dark:text-gray-400">
                    Free Setup Guildance
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Email Support
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Unlimited Funnel Reports
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Retention Reporting
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Full Cohort Analysis
                  </li>{" "}
                  <li className="text-gray-500 dark:text-gray-400">
                    Data Export
                  </li>
                </ul>
                <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none">
                  Start free trial
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
