import React from 'react';
import { Link } from "react-router-dom";
import "../css/style.css";

const NotFoundPage = () => {
  return (
    <body>
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
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/Acceuil" className="link-Acceuil">Retourner sur la page d'acceuil</Link>
      </main>
      <footer>
        <img src="src/assets/logokasa.png" className="logo" alt="Logo Kasa" />
        <p>2020 Kasa. All rights reserved.</p>
      </footer>
    </body>
  );
};

export default NotFoundPage;
