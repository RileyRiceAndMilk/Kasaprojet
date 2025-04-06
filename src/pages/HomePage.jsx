import React, { useState } from 'react';
import "../css/style.css";
import Header from "../components/Header";
import FilterSection from "../components/FilterSection";
import Footer from "../components/Footer";

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
    <>
            <Header /> 

      <main>
        <div className="image-montagne">
          <img src="src/assets/montagne.jpg"/>
        </div>

        <section className="filter">
            <FilterSection 
                title="Fiabilité" 
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." 
            />
            <FilterSection 
                title="Respect" 
                content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
            />
            <FilterSection 
                title="Service" 
                content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." 
            />
            <FilterSection 
                title="Sécurité" 
                content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
            />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;


