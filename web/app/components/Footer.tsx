// src/components/Footer.tsx
import React from 'react';
import styles from '@/app/styles/Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Explore & Learn - Tous droits réservés</p>
      <ul>
        <li><a href="/terms">Conditions d'utilisation</a></li>
        <li><a href="/privacy">Politique de confidentialité</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
