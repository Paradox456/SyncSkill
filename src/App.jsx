import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";  
import SignIn from "./pages/SignIn"; 
import SignUp from "./pages/SignUp";
import TermsOfService from "./pages/TermsOfService";
import PrivatePolicy from "./pages/PrivatePolicy";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/privatepolicy" element={<PrivatePolicy />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
