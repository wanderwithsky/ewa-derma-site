"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative w-full h-[85vh] lg:h-[95vh] min-h-[600px] overflow-hidden bg-black select-none flex items-center justify-center"
      aria-label="Ewa Derma Clinic Hero"
    >
      {/* 1. CINEMATIC VIDEO BACKGROUND */}
      <video
        src="https://res.cloudinary.com/zvlxacfu/video/upload/v1790592481/hero-vid.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 2. SUBTLE OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="relative z-20 w-full h-full max-w-[1920px] mx-auto p-6 sm:p-10 lg:p-16">
        
        {/* Top Right: Editorial Headline & Script */}
        <div className="absolute top-6 sm:top-10 lg:top-16 right-6 sm:right-10 lg:right-16 flex flex-col items-end">
          <h1 className="font-display text-[#FDFBF7] text-right font-light uppercase tracking-widest text-3xl sm:text-5xl lg:text-[4.25rem] leading-[1.1] drop-shadow-md">
            Your Skin<br />
            Deserves<br />
            Expert Care
          </h1>
          <span className="font-script text-[#FDFBF7] text-2xl sm:text-3xl lg:text-4xl tracking-wide rotate-[-4deg] mt-3 sm:mt-4 mr-4 sm:mr-8 drop-shadow-sm opacity-90 hidden sm:block">
            skin, but better
          </span>
        </div>

        {/* Bottom Left Area: Statement */}
        <div className="absolute bottom-6 sm:bottom-10 lg:bottom-16 left-6 sm:left-10 lg:left-16 max-w-sm sm:max-w-md lg:max-w-xl">
          <h2 className="font-display text-[#FDFBF7] text-left font-light uppercase tracking-widest text-xl sm:text-3xl lg:text-[2.25rem] leading-[1.2] drop-shadow-md">
            Dermatology<br />
            That Reveals<br />
            Your Natural Glow
          </h2>
        </div>

        {/* Bottom Right Area: Minimal CTA */}
        <div className="absolute bottom-6 sm:bottom-10 lg:bottom-16 right-6 sm:right-10 lg:right-16">
          <Link href="/contact" className="group">
            <button className="px-6 sm:px-8 py-3 border border-[#FDFBF7]/80 bg-transparent text-[#FDFBF7] font-sans font-medium text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:bg-[#FDFBF7]/10 hover:border-[#FDFBF7] transition-all duration-500 backdrop-blur-sm cursor-pointer">
              Consult Now
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};
