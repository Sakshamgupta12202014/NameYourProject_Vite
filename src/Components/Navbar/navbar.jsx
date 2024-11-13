import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <>
        <div className="navBar">
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
          <span style={{color:"white"}}>/</span>
          <Link to="/signup" className="nav-link">
            <button className="nav-link-btn">Sign-up</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;