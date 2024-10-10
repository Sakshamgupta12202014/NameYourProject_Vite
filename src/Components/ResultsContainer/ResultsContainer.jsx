import React from 'react';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames, showHeading }) => {
    const limitedSuggestions = suggestedNames.slice(0, 20);

    const suggestNameJsx = limitedSuggestions.map((suggestName) => {
        return <p>{suggestName}</p>;
    });

    return (
        <div>
            <h3 className={`result1 ${showHeading ? 'result2' : 'result1'}`}>
                suggestions
            </h3>
            <div className='outerDiv'>
                {suggestNameJsx.map((element, index) => {
                    return <div key={index} className='resultBox'>{element}</div>;
                })}
            </div>
        </div>
    );
};

export default ResultsContainer;
