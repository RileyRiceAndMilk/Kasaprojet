import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../css/style.css";
import logo from "../assets/logo.png";
import logoFooter from "../assets/logokasa.png";

const Titredelalocation = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données");
                }
                return response.json();
            })
            .then((data) => {
                const logementTrouvé = data.find((item) => item.id === id);
                if (logementTrouvé) {
                    setLogement(logementTrouvé);
                } else {
                    console.error("Logement non trouvé pour l'ID", id);
                    navigate("/notfound");
                }
            })
            .catch((error) => {
                console.error("Erreur lors du chargement des données", error);
                navigate("/notfound");
            });
    }, [id, navigate]);

    if (!logement) return <p>Chargement du logement...</p>;

    const toggleDescription = () => {
        setIsOpen(!isOpen);
    };

    const toggleEquipments = () => {
        setIsEquipmentsOpen(!isEquipmentsOpen);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <header>
                <Link to="/" className="logo-link">
                    <img src="/logo.png" className="logo" alt="Logo Kasa" />
                </Link>

                <nav className="link-container">
                    <Link to="/Acceuil" className="link-Acceuil">Accueil</Link>
                    <Link to="/" className="link-A-propos">À propos</Link>
                </nav>
            </header>

            <main>
                <div className="image-logement">
                    <div className="carousel-container">
                        <i className="fa-solid fa-chevron-left carousel-icon carousel-icon-left" onClick={prevImage}></i>
                        <img src={logement.pictures[currentImageIndex]} className="logement" alt={logement.title} />
                        <i className="fa-solid fa-chevron-right carousel-icon carousel-icon-right" onClick={nextImage}></i>
                    </div>
                </div>

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
                                onClick={toggleDescription}
                                aria-expanded={isOpen}
                            >
                                Description <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
                            </button>
                            <p className={isOpen ? "show" : "hidden"}>{logement.description}</p>
                        </div>

                        <div className="equipements-section">
                            <button
                                className={`titreedelalocation-button ${isEquipmentsOpen ? "show" : ""}`}
                                onClick={toggleEquipments}
                                aria-expanded={isEquipmentsOpen}
                            >
                                Équipements <i className={`fa-solid fa-chevron-${isEquipmentsOpen ? 'up' : 'down'}`}></i>
                            </button>
                            <ul className={isEquipmentsOpen ? "show" : "hidden"}>
                                {logement.equipments.map((equipement, index) => (
                                    <li key={index}>{equipement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <img src={logoFooter} className="logo" alt="Logo Kasa" />
                <p>2020 Kasa. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Titredelalocation;









