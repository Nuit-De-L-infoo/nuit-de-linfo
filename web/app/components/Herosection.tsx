import React from 'react';
import Link from 'next/link';  // Import Link from next/link
import style from '@/app/styles/Herosection.module.scss';

const HeroSection: React.FC = () => {
    return (
        <div className={style['hero-section']}>
            <div>
                <h1 className={style.title}>Explore the Ocean&apos;s Depths</h1>
                <p className={style.description}>Dive into the mysteries of the ocean and <br /> discover the wonders that lie beneath the surface.</p>
                
                {/* Link to Home page */}
                <div className="flex justify-center mt-10">
                    <Link href="/aboutus" passHref>
                        <button className={style['btn']}>Discover</button>
                    </Link>
                    

                    <Link href="/contact" passHref>
                        <button id={style['haja']} className={style['btn']}>Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
