import React from 'react';
import style from '@/app/styles/Herosection.module.scss';

const HeroSection: React.FC = () => {
    return (
        <div className={style['hero-section']}>
            <div>
                <h1 className={style.title}>Explore the Ocean&apos;s Depths</h1>
                <p className={style.description}>Dive into the mysteries of the ocean and discover the wonders that lie beneath the surface.</p>
                <div className="flex justify-center mt-4">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Explore Now
                    </button>
                    <button className="ml-4 bg-white hover:bg-gray-200 text-green-500 font-bold py-2 px-4 rounded">
                        Discover
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
