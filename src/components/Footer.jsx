import React from "react";
import logoFooter from "../assets/logokasa.png"; 

const Footer = () => {
    return (
        <footer>
            <img src={logoFooter} className="logo" alt="Logo Kasa" />
            <p>2020 Kasa. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
