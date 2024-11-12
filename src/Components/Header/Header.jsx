import React from "react";
import "./Header.css";
import image from "./chat.jpg";

const Header = ({ headTitle, headerImageExpanded, headerTextExpanded }) => {
  return (
    <div className="header" style={{ backgroundColor: "antiquewhite" }}>
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
        {headTitle}
      </h1>
    </div>
  );
};

export default Header;
