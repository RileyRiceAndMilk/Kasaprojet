import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../css/style.css";

const HomePage = () => {

  const [fiabiliteVisible, setFiabiliteVisible] = useState(false);
  const [respectVisible, setRespectVisible] = useState(false);
  const [serviceVisible, setServiceVisible] = useState(false);
  const [securiteVisible, setSecuriteVisible] = useState(false);

 
  const toggleVisibility = (section) => {
    switch (section) {
      case 'Fiabilite':
        setFiabiliteVisible(!fiabiliteVisible);
        break;
      case 'Respect':
        setRespectVisible(!respectVisible);
        break;
      case 'Service':
        setServiceVisible(!serviceVisible);
        break;
      case 'Securite':
        setSecuriteVisible(!securiteVisible);
        break;
      default:
        break;
    }
  };

  return (
    <div>
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
          <img src="src/assets/montagne.jpg"/>
        </div>

        <section className="filter">
          <div className="Fiabilité-filter-container">
            <button
              id="Fiabilité-button"
              className={`apropos-button ${fiabiliteVisible ? 'show' : ''}`}  
              onClick={() => toggleVisibility('Fiabilite')}
            >
              Fiabilité <i className="fa-solid fa-chevron-down"></i>
            </button>
            {fiabiliteVisible && (
              <div id="Fiabilité-content" className="content-container">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
              </div>
            )}
          </div>

          <div className="Respect-filter-container">
            <button
              id="Respect-button"
              className={`apropos-button ${respectVisible ? 'show' : ''}`} 
              onClick={() => toggleVisibility('Respect')}
            >
              Respect <i className="fa-solid fa-chevron-down"></i>
            </button>
            {respectVisible && (
              <div id="Respect-content" className="content-container">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
              </div>
            )}
          </div>

        
          <div className="Service-filter-container">
            <button
              id="Service-button"
              className={`apropos-button ${serviceVisible ? 'show' : ''}`}  
              onClick={() => toggleVisibility('Service')}
            >
              Service <i className="fa-solid fa-chevron-down"></i>
            </button>
            {serviceVisible && (
              <div id="Service-content" className="content-container">
                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
              </div>
            )}
          </div>

         
          <div className="Sécurité-filter-container">
            <button
              id="Sécurité-button"
              className={`apropos-button ${securiteVisible ? 'show' : ''}`}  
              onClick={() => toggleVisibility('Securite')}
            >
              Sécurité <i className="fa-solid fa-chevron-down"></i>
            </button>
            {securiteVisible && (
              <div id="Sécurité-content" className="content-container">
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer>
        <img src="src/assets/logokasa.png" className="logo" alt="Logo Kasa" />
        <p>2020 Kasa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

