import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../css/style.css";
import logoFooter from "../assets/logokasa.png";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Logement from "../components/Logement";
import Footer from "../components/Footer";


const Titredelalocation = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

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

    return (
        <>
            <Header />  

            <main>
                <div className="image-logement">
                    <Carousel pictures={logement.pictures} altText={logement.title} />
                </div>

                <Logement logement={logement} />

            </main>

            <Footer />
        </>
    );
};

export default Titredelalocation;











