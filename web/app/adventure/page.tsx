import React from 'react';
import Navbar from '@/app/components/Navbar';

const AdventurePage = () => {
    const pageStyle = {
        backgroundImage: 'url("/images/section.jpg")', // Update with your image path
        backgroundSize: 'cover', // Ensures the entire image is visible
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        height: '100%',
        width: '100%',
    };

    return (
        <div>
            <Navbar/>
        <div style={pageStyle}>
            {/* Your page content goes here */}
        </div>
        </div>
    );
};

export default AdventurePage;
