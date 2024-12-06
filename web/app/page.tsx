import React from 'react';
import HeroSection from '@/app/components/Herosection';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="grid ">

      {/* Main Content Section */}
      <main className="w-full">
        <Navbar/>
        <HeroSection />
      </main>

    </div>
  );
}
