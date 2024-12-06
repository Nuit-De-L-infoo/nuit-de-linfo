import React from 'react';
import styles from '@/app/styles/Section.module.scss'; // Import the SCSS module

const Section: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Welcome to Our Website</h2>
                    <p className={styles.description}>
                        We're glad to have you here! Explore our features, learn more about what we offer, and get in touch with us.
                    </p>
                    <a href="/contact" className={styles.button}>Get in Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Section;
