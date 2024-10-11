import React from "react";
import "./About.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="aboutUsContainer">
        {/* Page Header */}
        <h1 className="aboutUsTitle">About Us</h1>
        <p className="aboutUsIntro">
          Welcome to Name Your Project, the ultimate tool for generating
          creative and unique names for your projects. We believe that every
          great idea deserves a great name!
        </p>

        {/* Mission Statement */}
        <section className="missionSection">
          <h2
            style={{
              fontFamily: "Amatic SC",
              fontSize: "35px",
              fontWeight: "600",
            }}
          >
            Our Mission
          </h2>
          <p>
            Our mission is to simplify the naming process for creators,
            entrepreneurs, and innovators. We provide an intuitive and
            user-friendly platform to help you find the perfect name that
            resonates with your vision.
          </p>
        </section>

        {/* Meet the Team */}
        <section className="teamSection">
          <h2>Meet the Team</h2>
          <div className="teamMembers">
            <div className="teamMember">
              <img
                src="team-member-1.png"
                alt="Team Member 1"
                className="teamImage"
              />
              <h3>John Doe</h3>
              <p>Co-Founder & CEO</p>
              <p>
                John is a creative thinker with a passion for branding and
                marketing.
              </p>
            </div>
            <div className="teamMember">
              <img
                src="team-member-2.png"
                alt="Team Member 2"
                className="teamImage"
              />
              <h3>Jane Smith</h3>
              <p>Co-Founder & CTO</p>
              <p>
                Jane is a tech enthusiast who loves turning ideas into reality.
              </p>
            </div>
            <div className="teamMember">
              <img
                src="team-member-3.png"
                alt="Team Member 3"
                className="teamImage"
              />
              <h3>Emily Johnson</h3>
              <p>Marketing Specialist</p>
              <p>
                Emily focuses on connecting our brand with users and driving
                engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="ctaSection">
          <h2>Get Started Today!</h2>
          <p>
            Try our name generator and find the perfect name for your project!
          </p>
          <Link to="/searchname">
            <button className="ctaButton">Generate Names</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
