import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const LogementsList = ({ logements }) => {
    return (
        <section id="logements" className="logements">
            <div className="logements-cards">
                {logements.length > 0 ? (
                    logements.map((logement) => (
                        <article key={logement.id} className="card">
                            <Link to={`/logement/${logement.id}`}>
                                <img
                                    src={logement.cover}
                                    alt={logement.title}
                                    className="card-image"
                                />
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
    );
};

export default LogementsList;
