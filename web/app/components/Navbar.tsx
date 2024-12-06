import React from 'react';
import styles from '@/app/styles/Navbar.module.scss'; // Importation du module SCSS

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            {/* Logo à gauche */}
            <a href="/" className={styles.title}>Aqua <span className={styles.titre}>Corps</span></a>

            {/* Liens de navigation alignés à droite */}
            <ul className={styles.navbar__item}>
                <li>
                    <a href="/">Accueil</a>
                </li>
                <li>
                    <a href="/adventure">Aventure</a>
                </li>
                <li>
                    <a href="/aboutus">À propos</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/faq">FAQ</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
