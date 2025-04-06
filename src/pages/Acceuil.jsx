import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import Header from "../components/Header";
import LogementsList from "../components/LogementsList";
import Footer from "../components/Footer";


const Acceuil = () => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        fetch("public/logements.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données");
                }
                return response.json();
            })
            .then((data) => {
                setLogements(data);
            })
            .catch((error) => {
                console.error("Erreur lors du chargement des données", error);
            });
    }, []);

    return (
        <>
            <Header />

            <main>
                <div className="image-montagne">
                    <img src="src/assets/mer.jpg" className="banner" alt="Bannière mer" />
                </div>

                <div>
                    <LogementsList logements={logements} /> 
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Acceuil;





