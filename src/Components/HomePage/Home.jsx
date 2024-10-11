import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="mainHome">
      <div className="homeDiv">
        <img src="src\Components\HomePage\file-removebg-preview (1).png" className="logo" />
        <h1 className="heroTitle">
          Welcome to the Ultimate Project Name Generator!
        </h1>
        <p className="heroSubtitle">
          Your Next Big Idea Deserves the Perfect Name.
        </p>


          <Link to="/searchname" className="nav-link">
            <button className="ctaButton">Start Generating Names</button>
          </Link>


      </div>

      <div className="featuresSection">
        <h2 style={{ textAlign: "center" }}>How It Works</h2>
        <div className="featuresList">
          <div className="featureItem">
            <i className="featureIcon">💡</i>
            <p>Simple: Just enter a keyword, and we'll do the rest.</p>
          </div>
          <div className="featureItem">
            <i className="featureIcon">🎨</i>
            <p>
              Creative Suggestions: Unique, relevant names tailored for your
              project.
            </p>
          </div>
          <div className="featureItem">
            <i className="featureIcon">🔗</i>
            <p>
              Save & Share: Easily save your favorites or share them with your
              team.
            </p>
          </div>
          <div className="featureItem">
            <i className="featureIcon">⚡</i>
            <p>Fast Results: Get name suggestions instantly.</p>
          </div>
        </div>
      </div>

      {/* Examples Section */}
      <div className="examplesSection">
        <h2 style={{ textAlign: "center" }}>Get Inspired</h2>
        <div className="exampleNames">
          <div className="exampleName">TechPulse</div>
          <div className="exampleName">IdeaSphere</div>
          <div className="exampleName">Innovato</div>
          <div className="exampleName">ProjectZen</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p style={{ marginLeft: "10px" }}>© 2024 Name Your Project</p>
        <div className="footerLinks">
          <a href="/about">About Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
