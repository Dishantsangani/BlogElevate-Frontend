import React from "react";
import Landing from "./Page/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Singlepost from "./Page/Singlepost";
import Contact from "./Page/Contact";
import SignIn from "./Credentials/SignIn";
import SignUp from "./Credentials/SignUp";
import ResetPassword from "./Credentials/Password/ResetPassword";
import ForgotPassword from "./Credentials/Password/ForgotPassword";
import Pricing from "./Page/Pricing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/single-post" element={<Singlepost />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
