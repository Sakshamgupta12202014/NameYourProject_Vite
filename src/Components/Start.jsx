import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./HomePage/Home";
import App from "./App/App";
// import "./Start.css";
import FollowUs from "./followUs/FollowUs";
import About from "./AboutUs/About";
import SignIn from "./signinPage/SignIn";
import SignUp from "./signupPage/SignUp";


function Start() {
  return (
    <Router>
      {/* <div className="navBar">
        <div className="navItems">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>

        <div className="navItems">
          <Link to="/searchname" className="nav-link">
            Brainstorm Names
          </Link>
        </div>

        <div className="navItems">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </div>

        <div className="navItems">
          <Link to="/followUs" className="nav-link">
            Follow Us
          </Link>
        </div>

        <div className="navItems signinbtn">
          <Link to="/signin" className="nav-link">
            <button className="nav-link-btn">Sign-in</button>
          </Link>
        </div>
      </div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/searchname" element={<App />} />
        <Route path="/followus" element={<FollowUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default Start
