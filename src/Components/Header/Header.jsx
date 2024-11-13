import React from "react";
import "./Header.css";
import image from "./chat.jpg";
import Navbar from "../Navbar/navbar";
import { useState, useEffect } from "react";

const Header = ({ headTitle, headerImageExpanded, headerTextExpanded }) => {
  let textArray = headTitle.split("");
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect
    (() => {
      const interId = setInterval(() => {
        setCurrentLetterIndex((prevIndex) => {
          if (prevIndex < textArray.length - 1) {
            return prevIndex + 1;
          } else {
            clearInterval(interId);
            return prevIndex; // Stop updating once done
          }
        });
      }, 100);

      return () => {
        clearInterval(interId);
      };
    },
    []);

  return (
    <div className="header" style={{ backgroundColor: "antiquewhite" }}>
      <Navbar />

      <img
        className={`header-image ${
          headerImageExpanded
            ? "header-image-expanded"
            : "header-image-contracted"
        }`}
        src={image}
        alt="oops"
      />

      <h1
        className={`header-text ${
          headerTextExpanded ? "header-text-expanded" : "header-text-contracted"
        }`}
      >
        {textArray.slice(0, currentLetterIndex + 1).join("")}

      </h1>
    </div>
  );
};

export default Header;
