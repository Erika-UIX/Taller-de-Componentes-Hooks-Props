import React from 'react';

const Footer = () => {
    const anioActual = new Date().getFullYear();
    return (
        <footer className="footer-sitio">
            <p>&copy; {anioActual} Festividades Tradicionales de Ecuador. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
