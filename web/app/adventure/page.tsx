import React from 'react';
import Navbar from '@/app/components/Navbar';

const AdventurePage = () => {
    return (
        <div className="relative h-screen">
            {/* Navbar component */}
            <Navbar />
            
            {/* Page content */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: 'url("/images/section.jpg")' }}
            >
                {/* Content wrapper with Tailwind utility classes */}
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <div className="text-center text-white p-6 max-w-2xl">
                        <h1 
                            className="text-4xl font-bold mb-4" 
                            style={{ color: '#0e425a' }}
                        >
                            L'Aventure Vous Attend!
                        </h1>
                        <p className="text-lg">
                            Plongez dans un voyage inoubliable. Explorez les profondeurs de l'océan et découvrez les mystères du corps humain.
                        </p>
                        <button className="mt-6 px-8 py-3 bg-[#2c7074] text-gray-900 font-semibold rounded-lg hover:bg-[#0e425a]">
                            Commencez Votre Aventure
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdventurePage;
