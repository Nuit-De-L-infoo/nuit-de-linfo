import React from 'react';
import style from '@/app/styles/Herosection.module.scss';

const HeroSection: React.FC = () => {
    return (
        <div className={style['hero-section']}>
            <div>
                <h1 className={style.title}>Explore the Ocean&apos;s Depths</h1>
                <p className={style.description}>Dive into the mysteries of the ocean and <br /> discover the wonders that lie beneath the surface.</p>
                <div className="flex justify-center mt-4">
                   
            
                    
                    <button className={style['btn']}>
                        Discover
                    </button>
                    <button id={style['haja']} className={style['btn']}>
                        Contact     
                </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
