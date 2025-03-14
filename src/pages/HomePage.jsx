import React from 'react';
import { Link } from "react-router-dom";
import "../css/style.css";
import logo from './assets/logo.png';



const HomePage = () => {
    return (
        <body>
            <header>

                <Link to="/" className="logo-link">
                    <img src="src/assets/logo.png" className="logo" alt="Logo Kasa" />
                </Link>


                <nav className="link-container">
                    <Link to="/Acceuil" className="link-Acceuil">Accueil</Link>
                    <Link to="/" className="link-A-propos">À propos</Link>
                </nav>
            </header>
            <main>
                <div className="image-montagne">
                    <img src="src/assets/montagne.jpg" alt="Fisheye Home Page" />
                </div>


                <section class="filter">
                <div className="Fiabilité-filter-container">
                    <button id="Fiabilité-button" className="apropos-button">Fiabilité  <i class="fa-solid fa-chevron-down"></i></button>
                    <div id="containeur-filter" className="containeur-input-and-suggestions">
                        <div className="input-container">
                            <input type="text" className="selector" id="Fiabilité-selector" aria-label="Filtrer par ingrédient" placeholder="Tapez un ingrédient..." />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div id="Fiabilité-suggestions" className="suggestions-container"></div>
                    </div>
                </div>


                <div className="Respect-filter-container">
                    <button id="Respect-button" className="apropos-button">Respect  <i class="fa-solid fa-chevron-down"></i></button>
                    <div id="containeur-filter" className="containeur-input-and-suggestions">
                        <div className="input-container">
                            <input type="text" className="selector" id="Respect-selector" aria-label="Filtrer par appareil" placeholder="Tapez un appareil..." />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div id="Respect-suggestions" className="suggestions-container"></div>
                    </div>
                </div>

                <div className="Service-filter-container">
                    <button id="Service-button" className="apropos-button">Service  <i class="fa-solid fa-chevron-down"></i> </button>
                    <div id="containeur-filter" className="containeur-input-and-suggestions">
                        <div className="input-container">
                            <input type="text" className="selector" id="Service-selector" aria-label="Filtrer par ustensile" placeholder="Tapez un ustensile..." />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div id="Service-suggestions" className="suggestions-container"></div>
                    </div>
                </div>


                <div className="Sécurité-filter-container">
                    <button id="Sécurité-button" className="apropos-button">Sécurité  <i class="fa-solid fa-chevron-down"></i> </button>
                    <div id="containeur-filter" className="containeur-input-and-suggestions">
                        <div className="input-container">
                            <input type="text" className="selector" id="Sécurité-selector" aria-label="Filtrer par ustensile" placeholder="Tapez un ustensile..." />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div id="Sécurité-suggestions" className="suggestions-container"></div>
                    </div>
                </div>
                </section>
            </main>
            <footer>
                <img src="src/assets/logokasa.png" className="logo" alt="Logo Kasa" />
                <p>2020 Kasa. All rights reserved.</p>
            </footer>
        </body>
    );
};

export default HomePage;

