import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

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
                <div className="image-montagne">
                    <img src="src/assets/mer.jpg" className="banner" alt="Bannière mer" />
                </div>

                <section id="logements" className="logements">
                    <div className="logements-cards">
                        {logements.length > 0 ? (
                            logements.map((logement) => (
                                <article key={logement.id} className="card">
                                    <Link to={`/logement/${logement.id}`}>
                                        <img src={logement.cover} alt={logement.title} className="card-image" />
                                        <div className="card-content">
                                            <h3>{logement.title}</h3>
                                        </div>
                                    </Link>
                                </article>
                            ))
                        ) : (
                            <p>Chargement des logements...</p>
                        )}
                    </div>
                </section>
            </main>

            <footer>
                <img src="src/assets/logokasa.png" className="logo" alt="Logo Kasa" />
                <p>2020 Kasa. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Acceuil;





