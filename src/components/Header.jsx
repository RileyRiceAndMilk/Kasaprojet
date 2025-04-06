import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../css/style.css";

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo-link">
                <img src={logo} className="logo" alt="Logo Kasa" />
            </Link>

            <nav className="link-container">
                <Link to="/Acceuil" className="link-Acceuil">Accueil</Link>
                <Link to="/" className="link-A-propos">À propos</Link>
            </nav>
        </header>
    );
};

export default Header;
