import React from 'react';
import HeroSection from '@/app/components/Herosection';

export default function Home() {
  return (
    <div className="grid ">

      {/* Main Content Section */}
      <main className="w-full">
        <HeroSection />
      </main>

    </div>
  );
}
