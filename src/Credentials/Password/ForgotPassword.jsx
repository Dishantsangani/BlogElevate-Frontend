import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ email: "" });
  const [message, setMessage] = useState(""); // Added to show success message

  const validate = () => {
    let validationError = { email: "" };
    let isValid = true;

    if (!email.trim()) {
      validationError.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationError.email = "Enter a valid email address";
      isValid = false;
    }

    setError(validationError);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous message

    if (!validate()) return;

    try {
      const res = await axios.post(
        "https://blogelevate-backend.onrender.com/auth/forgotpassword",
        { email }
      );

      if (res.data.status) {
        setMessage("Check your email for reset instructions.");
        setError({ email: "" }); // Clear error message
      } else {
        setMessage("Failed to send reset instructions. Try again.");
      }
    } catch (err) {
      setMessage("An error occurred. Please try again later.");
      console.error("Forgot password error:", err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-md">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="text-center">
              <div className="mb-4 inline-block rounded-full bg-blue-200 p-2 text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
              </div>
              <h1 className="block text-2xl font-bold text-gray-800">
                Forgot password?
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Don't worry, we'll send you reset instructions.
              </p>
            </div>

            {/* Success Message */}
            {message && (
              <p className="mt-4 text-center text-sm text-green-600">
                {message}
              </p>
            )}

            <div className="mt-6">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  <div>
                    <label className="mb-2 block text-sm text-gray-600">
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="peer block w-full rounded-md border border-gray-200 bg-gray-50 py-3 px-4 text-sm outline-none ring-offset-1 focus:border-gray-700 focus:bg-white focus:ring-2 focus:ring-gray-700"
                        value={email}
                        aria-describedby="email-error"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {error.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {error.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-gray-800 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <p className="mt-3 flex items-center justify-center divide-x divide-gray-300 text-center">
          <span className="inline pr-3 text-sm text-gray-600">
            Remember your password?
            <Link
              to="/signin"
              className="font-medium text-gray-800 decoration-2 hover:underline"
            >
              Sign in here
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
