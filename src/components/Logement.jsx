import React, { useState } from "react";
import "../css/style.css";

const Logement = ({ logement }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

    return (
        <div className="contenu-logement">
            <div className="header-container">
                <div className="title-container">
                    <h3>
                        {logement.title}
                        <br />
                        <span className="location">{logement.location}</span>
                    </h3>

                    <div className="host-info">
                        <p>
                            <span className="first-name">{logement.host.name.split(" ")[0]}</span>
                            <br />
                            <span className="last-name">{logement.host.name.split(" ")[1]}</span>
                        </p>
                        <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
                    </div>
                </div>
            </div>

            <div className="title-container-tag">
                <div className="tags-container">
                    {logement.tags.map((tag, index) => (
                        <button key={index} className="tag-button">
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="star-mobile">
                    <div className="star">
                        {[...Array(5)].map((_, index) => (
                            <i
                                key={index}
                                className={`fa-xs fa-solid fa-star ${index < logement.rating ? "" : "neutral-star"}`}
                            ></i>
                        ))}
                    </div>

                    <div className="host-info-mobile">
                        <p>
                            <span className="first-name">{logement.host.name.split(" ")[0]}</span>
                            <br />
                            <span className="last-name">{logement.host.name.split(" ")[1]}</span>
                        </p>
                        <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
                    </div>
                </div>
            </div>

            <div className="description-equipement-container">
                <div className="description-section">
                    <button
                        className={`titreedelalocation-button ${isOpen ? "show" : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                    >
                        Description <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    <p className={isOpen ? "show" : "hidden"}>{logement.description}</p>
                </div>

                <div className="equipements-section">
                    <button
                        className={`titreedelalocation-button ${isEquipmentsOpen ? "show" : ""}`}
                        onClick={() => setIsEquipmentsOpen(!isEquipmentsOpen)}
                        aria-expanded={isEquipmentsOpen}
                    >
                        Équipements <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    <ul className={isEquipmentsOpen ? "show" : "hidden"}>
                        {logement.equipments.map((equipement, index) => (
                            <li key={index}>{equipement}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Logement;
