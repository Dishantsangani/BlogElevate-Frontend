import React, { useState } from "react";
import signinlogo from "../assets/SignIn&Landingpage/signin.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState({ email: "", password: "" });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const Validation = () => {
    let validerror = { email: "", password: "" };
    let isValid = true;

    if (!email.trim()) {
      validerror.email = "Email Is Required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validerror.email = "Enter Valid Email Address";
      isValid = false;
    }
    if (!password.trim()) {
      validerror.password = "Password Is Required";
      isValid = false;
    } else if (password.length < 8) {
      validerror.password = "Password Must Be 8 Characters";
      isValid = false;
    }

    seterror(validerror);
    return isValid;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setSuccessMsg(""); // Reset messages
    setErrorMsg("");

    if (!Validation()) return;
    setLoading(true);
    axios
      .post(
        "https://blogelevate-backend.onrender.com/auth/signup",
        { username, email, password },
        { withCredentials: true }
      )
      .then((res) => {
        setLoading(false);
        if (res.data.token) {
          localStorage.setItem("Token", res.data.token);
          setSuccessMsg("Account created successfully! Redirecting...");
          setTimeout(() => navigate("/home"), 2000);
        } else {
          setErrorMsg("Signup successful, but no token received.");
        }
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg("Signup failed! Email may already be in use.", err);
      });
  };

  return (
    <>
      <div className="flex mt-15 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl  lg:max-w-4xl">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <p className="mt-3 text-xl font-medium text-center text-gray-700 ">
            Welcome To
          </p>
          <h1 className="text-3xl font-bold text-center text-gray-900 ">
            BlogElevate
          </h1>

          {successMsg && (
            <p className="mt-4 text-sm text-green-600">{successMsg}</p>
          )}
          {errorMsg && <p className="mt-4 text-sm text-red-500">{errorMsg}</p>}

          <form onSubmit={handlesubmit}>
            <div className="mt-4">
              <label
                htmlFor="Username"
                className="block mb-2 text-sm font-medium text-gray-800 "
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Enter Your Username"
                onChange={(e) => setusername(e.target.value)}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-800 ">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter Your Email Address"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              />
              {error.email && (
                <p className="text-red-500 text-sm mt-1">{error.email}</p>
              )}
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-800 ">
                  Password
                </label>
                <Link
                  to="/forgotpassword"
                  className="text-xs text-gray-700  hover:underline"
                >
                  Forget Password?
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Enter Your Password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {error.password && (
                <p className="text-red-500 text-sm mt-1">{error.password}</p>
              )}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 cursor-pointer text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            <Link
              to="/signin"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign in
            </Link>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          </div>
        </div>
        <img src={signinlogo} className="hidden bg-cover lg:block lg:w-1/2" />
      </div>
    </>
  );
}

export default SignUp;
