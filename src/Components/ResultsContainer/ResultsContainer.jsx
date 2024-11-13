import React from "react";
import "./ResultsContainer.css";

const ResultsContainer = ({ suggestedNames, showHeading,onAddToCart }) => {
  const limitedSuggestions = suggestedNames.slice(0, 20);

  const suggestNameJsx = limitedSuggestions.map((suggestName) => {
    return <p>{suggestName}</p>;
  });

  const handleClick = (name) => {
    onAddToCart(name); // Trigger the add-to-cart action
  };

  return (
    <div style={{ backgroundColor: "antiquewhite" }}>
      <h3 className={`result1 ${showHeading ? "result2" : "result1"}`}>
        suggestions
      </h3>
      <div className="outerDiv">
        {suggestNameJsx.map((element, index) => {
          return (
            <div key={index} className="resultBox" onClick={() => {handleClick(element)}}>
              {element} 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultsContainer;
