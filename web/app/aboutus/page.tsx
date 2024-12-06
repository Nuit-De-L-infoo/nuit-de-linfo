import styles from '@/app/styles/Aboutus.module.scss'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';  // Import Footer component
import Image from 'next/image'; // Import Image from next/image
import ceQueNousOffronsImage from '@/public/images/aboutus/ce_que_nous_offrons.jpg';

export default function About() {
  return (
    <div className={styles.page}>
      <Navbar />

      <section className={styles.heroSection}>
        <div className={styles.title}>Ahoy! Bienvenue sur le Guide des Pirates de &apos;Île aux Singes!</div>
        <div className={styles.description}>
          Nous sommes un équipage de pirates un peu déjantés, prêts à vous aider à naviguer les mers de &apos;aventure ! 
          <br />
          Nous sommes ici pour répondre à vos questions, <br /> divertir votre âme et vous mener à la gloire ou à la perdition ! Qui sait ?
        </div>     
        </section>

      <section className={styles.content}>
        <h2 className={styles.subtitle}>Les Origines du Guide</h2>
        <div className={styles.textAndImage}>
          <p>
            Il était une fois, sur les rives traîtresses de l&apos;Île aux Singes, un équipage hétéroclite de pirates, aventuriers et chasseurs de trésors. La légende du trésor de &apos;île nous unissait. Mais ce n&apos;était pas seulement de &apos;or que nous cherchions — c&apos;étaient les secrets, les mystères, et surtout, le plaisir !
          </p>
          <Image
            src={ceQueNousOffronsImage}
            alt="Capitaine"
            className={styles.sectionImage}
            width={500}
            height={300}
          />
        </div>
        <p>
          Notre mission est simple : vous guider à travers les eaux périlleuses des Caraïbes, vous enseigner &apos;art du pirate, et peut-être partager un ou deux rires ! Vous ne trouverez pas une bande de pirates plus colorée ailleurs !
        </p>

        <h2 className={styles.subtitle}>Rencontrez &apos;Équipage</h2>
        <div className={styles.textAndImage}>
          <p>
            Nous sommes un équipage dirigé par le capitaine intrépide, réputé pour son esprit et ses talents en combat à &apos;épée, notamment dans &apos;art de &apos;insulte. Le premier maître, eh bien, il est toujours trop occupé à s&apos;assurer que notre réserve de rhum ne soit jamais à court. Ensemble, nous avons créé ce guide en hommage au plus grand trésor de tous : &apos;humour pirate et &apos;aventure !
          </p>
    <Image
            src={ceQueNousOffronsImage}
            alt="Capitaine"
            className={styles.sectionImage}
            width={500}
            height={300}
          />
      
        </div>

        <h2 className={styles.subtitle}>Ce Que Nous Offrons</h2>
        <div className={styles.textAndImage}>
          <p>
            Vous avez besoin d&apos;aide pour naviguer sur les mers des pirates ? Nous avons tout ce qu&apos;il vous faut, des astuces et des conseils pratiques. Que vous cherchiez une carte au trésor ou la meilleure insulte de pirate, nous vous fournirons les connaissances nécessaires, le tout avec un rire et un cache-œil !
          </p>
          <Image
            src={ceQueNousOffronsImage}
            alt="Capitaine"
            className={styles.sectionImage}
            width={500}
            height={300}
          />
        </div>

        <h2 className={styles.subtitle}>Pourquoi Choisir Nous ?</h2>
        <p>
          Parce qu&apos;aucun autre guide de pirates ne combine aussi bien humour piquant, connaissances approfondies et expertise en chasse au trésor. Et en plus, nos accents de pirates sont inégalés sur les sept mers. C’est notre promesse — vous ne trouverez pas un équipage plus divertissant ailleurs !
        </p>
      </section>
<br /><br /><br /><br /><br />
      <Footer />  {/* Add Footer here */}
    </div>
  );
}
