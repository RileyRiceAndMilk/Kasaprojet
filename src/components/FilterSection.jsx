// src/components/FilterSection.jsx
import React, { useState } from "react";
import "../css/style.css";

const FilterSection = ({ title, content }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={`${title}-filter-container`}>
            <button
                className={`apropos-button ${isVisible ? "show" : ""}`}
                onClick={toggleVisibility}
            >
                {title} <i className="fa-solid fa-chevron-down"></i>
            </button>
            {isVisible && (
                <div id={`${title}-content`} className="content-container">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default FilterSection;
