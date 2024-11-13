import React from "react";
import "./FollowUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../Navbar/navbar";

function FollowUs() {
  return (
    <div>
      
      <Navbar/>

      <div className="outerFollowUsContainer">

        <div className="followUsContainer">
        {/* Page Header */}
        <h1 className="followUsTitle">Follow Us & Stay Connected</h1>
        <p className="followUsSubtitle">
          Stay updated with the latest news, tips, and exclusive content by
          following us on social media.
        </p>

        {/* Social Media Icons */}
        <div className="socialMediaLinks">
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="socialMediaLink"
          >
            <FontAwesomeIcon icon={faFacebook}  />
          </a>
          <a
            href="https://twitter.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="socialMediaLink"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="socialMediaLink"
          >
            <FontAwesomeIcon icon={faInstagram}  />
          </a>
          <a
            href="https://linkedin.com/in/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="socialMediaLink"
          >
           <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        {/* Call to Action */}
        <p className="followUsCTA">
          Don't miss out! Follow us today for the latest updates.
        </p>

        
      </div>
      </div>
    </div>
  );
}

export default FollowUs;
