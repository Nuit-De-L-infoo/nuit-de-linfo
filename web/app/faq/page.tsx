import React from 'react';
import styles from '@/app/styles/faq.module.scss';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const FAQPage: React.FC = () => {
    const faqs = [
        {
            id: 'faq1',
            question: "Quelle est votre politique de retour ?",
            answer: "Vous pouvez retourner tout article dans les 30 jours suivant l'achat."
        },
        {
            id: 'faq2',
            question: "Comment suivre ma commande ?",
            answer: "Vous recevrez un numéro de suivi par e-mail une fois votre commande expédiée."
        },
        // ... add more FAQs as needed
    ];

    return (
        <div className={styles.faqPage}>
            <Navbar />
            <div className={styles.faqContainer}>
                <h1 className={styles.faqTitle}>FAQ</h1>
                <div>
                    {faqs.map((faq) => (
                        <div key={faq.id} className={styles.faqItem}>
                            <h2 className={styles.faqQuestion}>{faq.question}</h2>
                            <p className={styles.faqAnswer}>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default FAQPage;
