import React, { useState } from "react";
import signinlogo from "../assets/SignIn&Landingpage/signin.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });
  const [successMsg, setSuccessMsg] = useState(""); // ✅ Success message state
  const [errorMsg, setErrorMsg] = useState(""); // ✅ General error message state
  const [loading, setLoading] = useState(false);

  const validation = () => {
    let errors = { email: "", password: "" };
    let isValid = true;

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Enter a valid email address";
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validation()) return; // Stop submission if validation fails
    setLoading(true);

    try {
      const res = await axios.post(
        "https://blogelevate-backend.onrender.com/auth/signin",
        { email, password },
        { withCredentials: true }
      );

      if (res.data.status) {
        localStorage.setItem("Token", res.data.Token);
        setSuccessMsg("Login successful! Redirecting..."); // ✅ Set success message
        setErrorMsg(""); // ✅ Clear error message
        setTimeout(() => navigate("/home"), 2000); // Redirect after 2 sec
      } else {
        setErrorMsg(res.data.message || "Invalid credentials");
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Server error. Try again.");
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <>
      <div className="flex mt-15 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl  lg:max-w-4xl">
        <img
          src={signinlogo}
          className="hidden bg-cover lg:block lg:w-1/2"
          alt="Sign In"
        />
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <p className="mt-3 text-xl font-medium text-center text-gray-700 ">
            Welcome To
          </p>
          <h1 className="text-3xl font-bold text-center text-gray-900 ">
            BlogElevate
          </h1>

          {/* ✅ Success Message */}
          {successMsg && (
            <p className="text-green-500 text-center mt-2">{successMsg}</p>
          )}

          {/* ❌ Error Message */}
          {errorMsg && (
            <p className="text-red-500 text-center mt-2">{errorMsg}</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-400 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && (
                <p className="text-red-500 text-sm mt-1">{error.email}</p>
              )}
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  Password
                </label>
                <Link
                  to="/forgotpassword"
                  className="text-xs text-gray-500  hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                className="block w-full px-4 py-2 text-gray-800 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error.password && (
                <p className="text-red-500 text-sm mt-1">{error.password}</p>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gray-800 hover:bg-gray-700"
                } rounded-lg focus:outline-none cursor-pointer focus:ring focus:ring-gray-300 focus:ring-opacity-50`}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4" />
            <p className="text-xs text-center text-gray-500 uppercase  hover:underline">
              or login with Google
            </p>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
          </div>

          <div className="flex justify-center mt-4">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse?.credential);
                localStorage.setItem("Token", JSON.stringify(decoded));
                setSuccessMsg("Google Login Successful! Redirecting...");
                setTimeout(() => navigate("/home"), 2000);
              }}
              onError={() => setErrorMsg("Google Login Failed")}
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4" />
            <Link
              to="/signup"
              className="text-xs cursor-pointer text-gray-500 uppercase  hover:underline"
            >
              Create Account
            </Link>
            <span className="w-1/5 border-b  md:w-1/4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
