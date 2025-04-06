import React, { useState } from "react";
import "../css/style.css"; // Assure-toi que ton CSS est bien importé

const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!pictures || pictures.length === 0) {
        return <p>Aucune image disponible</p>;
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel-container">
            {pictures.length > 1 && (
                <i
                    className="fa-solid fa-chevron-left carousel-icon carousel-icon-left"
                    onClick={prevImage}
                ></i>
            )}

            <img
                src={pictures[currentIndex]}
                className="carousel-image"
                alt={`Slide ${currentIndex + 1}`}
            />

            {pictures.length > 1 && (
                <i
                    className="fa-solid fa-chevron-right carousel-icon carousel-icon-right"
                    onClick={nextImage}
                ></i>
            )}
        </div>
    );
};

export default Carousel;
