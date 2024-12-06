import React from 'react';
import styles from '@/app/styles/Navbar.module.scss'; // Importing the SCSS module

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            {/* Logo on the left */}
            <a href="/" className={styles.title}>Aqua <span className={styles.titre}>Corps</span></a>

            {/* Navigation links aligned to the right */}
            <ul className={styles.navbar__item}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
