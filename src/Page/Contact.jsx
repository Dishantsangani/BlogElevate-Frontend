import React, { useEffect, useState } from "react";
import Navbar from "./../Component/Navbar";
import contactbg from "../assets/contact/contact.avif";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Component/Footer";

function Contact() {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [error, setError] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState(null);

  // ✅ Validation Function
  const validation = () => {
    let validationError = { name: "", email: "", message: "" };
    let isValid = true;

    if (!name.trim()) {
      validationError.name = "Username is required.";
      isValid = false;
    } else if (name.length < 4) {
      validationError.name = "Username is too short.";
      isValid = false;
    }

    if (!email.trim()) {
      validationError.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationError.email = "Enter a valid email address.";
      isValid = false;
    }

    if (!message.trim()) {
      validationError.message = "Message is required.";
      isValid = false;
    } else if (message.length < 4) {
      validationError.message = "Message must be at least 4 words.";
      isValid = false;
    }

    setError(validationError);
    return isValid;
  };

  // ✅ Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous server messages
    setServerMessage(null);

    if (!validation()) return;

    setLoading(true); // Start Loading
    try {
      const response = await axios.post(
        "https://blogelevate-backend.onrender.com/auth/sendemail",
        {
          name,
          email,
          message,
        }
      );
      setServerMessage({
        type: "success",
        text: "Email sent successfully!",
      });
      setname("");
      setemail("");
      setmessage("");
      setError({ name: "", email: "", message: "" }); // Clear form errors
    } catch (err) {
      setServerMessage({
        type: "error",
        text: "Failed to send email. Try again later.",
        err,
      });
    } finally {
      setLoading(false); // Stop Loading
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
      <section className="container mx-auto px-6 py-12 min-h-screen bg-white ">
        <h1 className="text-2xl font-bold text-gray-800 ">Contact</h1>
        <hr className="flex-grow border-t-2 mt-2 border-gray-300 " />

        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-10">
            <div className="lg:w-1/2 lg:mx-10">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize  lg:text-3xl">
                Let’s talk
              </h1>
              <p className="mt-4 text-gray-500 ">
                Ask us everything and we would love to hear from you.
              </p>

              {/* ✅ Show Success or Error Message */}
              {serverMessage && (
                <div
                  className={`mt-4 p-3 rounded-md ${
                    serverMessage.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {serverMessage.text}
                </div>
              )}

              <form className="mt-12" onSubmit={handleSubmit}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 border rounded-md focus:ring focus:ring-opacity-40"
                    />
                    {error.name && (
                      <span className="text-red-500 text-sm mt-1">
                        {error.name}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 border rounded-md focus:ring focus:ring-opacity-40"
                    />
                    {error.email && (
                      <span className="text-red-500 text-sm mt-1">
                        {error.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 border rounded-md focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                  />
                  {error.message && (
                    <span className="text-red-500 text-sm mt-1">
                      {error.message}
                    </span>
                  )}
                </div>

                {/* ✅ Get in Touch Button with Loading */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white rounded-md transition-colors duration-300 ${
                    loading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-gray-800 hover:bg-gray-700 focus:ring-gray-300"
                  }`}
                >
                  {loading ? "Sending..." : "Get in Touch"}
                </button>
              </form>
            </div>
            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
              <img
                className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
                src={contactbg}
                alt="Contact"
              />
              <div className="mt-6 space-y-8 md:mt-8">
                {" "}
                <p className="flex items-start -mx-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-gray-800 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />{" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />{" "}
                  </svg>{" "}
                  <span className="mx-2 text-gray-700 truncate w-72 ">
                    {" "}
                    Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522{" "}
                  </span>{" "}
                </p>{" "}
                <p className="flex items-start -mx-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-gray-800 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />{" "}
                  </svg>{" "}
                  <span className="mx-2 text-gray-700 truncate w-72 ">
                    {" "}
                    (257) 563-7401{" "}
                  </span>{" "}
                </p>{" "}
                <p className="flex items-start -mx-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-gray-800 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />{" "}
                  </svg>{" "}
                  <span className="mx-2 text-gray-700 truncate w-72 ">
                    {" "}
                    acb@example.com{" "}
                  </span>{" "}
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
