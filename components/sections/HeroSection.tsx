"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#FAF8F1] text-ewa-ink pt-2 sm:pt-4 lg:pt-6 pb-12 sm:pb-16 lg:pb-20 select-none"
      aria-label="Ewa Derma Clinic Hero"
    >
      {/* ========================================================================= */}
      {/* 1. BACKGROUND: TOP-LEFT SUNLIGHT & BOTANICAL ACCENT */}
      {/* ========================================================================= */}
      <div className="absolute top-0 left-0 w-[360px] sm:w-[500px] h-[360px] pointer-events-none opacity-40 z-0">
        <svg
          viewBox="0 0 400 360"
          className="w-full h-full object-cover filter blur-[1px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-30 -20 C40 30, 90 90, 80 160 C70 210, 20 240, -20 260"
            stroke="#1B4B5C"
            strokeWidth="32"
            strokeLinecap="round"
            opacity="0.12"
          />
          <path
            d="M-10 -10 C70 50, 120 40, 150 -10"
            stroke="#4FAE7C"
            strokeWidth="24"
            strokeLinecap="round"
            opacity="0.14"
          />
          <circle cx="90" cy="100" r="100" fill="#4FAE7C" opacity="0.08" className="filter blur-2xl" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. BACKGROUND RIGHT: ORGANIC DEEP TEAL ARCH & RIM GLOW */}
      {/* ========================================================================= */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[50%] pointer-events-none z-0 hidden lg:block">
        <svg
          viewBox="0 0 700 800"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              id="heroTealGrad"
              cx="55%"
              cy="45%"
              r="60%"
              fx="50%"
              fy="40%"
            >
              <stop offset="0%" stopColor="#175F73" />
              <stop offset="45%" stopColor="#0D4A5A" />
              <stop offset="85%" stopColor="#08313C" />
              <stop offset="100%" stopColor="#06252E" />
            </radialGradient>

            <linearGradient id="curveRimGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
              <stop offset="40%" stopColor="#2E93A8" stopOpacity="0.45" />
              <stop offset="80%" stopColor="#E31C79" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
            </linearGradient>

            <filter id="curveShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="-6" dy="4" stdDeviation="12" floodColor="#0D4A5A" floodOpacity="0.18" />
            </filter>
          </defs>

          {/* Organic Curved Teal Body */}
          <path
            d="M 140 0 C 100 140, 0 320, 25 490 C 50 640, 110 730, 180 800 L 700 800 L 700 0 Z"
            fill="url(#heroTealGrad)"
            filter="url(#curveShadow)"
          />

          {/* Glowing Rim Line along Curve */}
          <path
            d="M 140 0 C 100 140, 0 320, 25 490 C 50 640, 110 730, 180 800"
            stroke="url(#curveRimGlow)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Internal Ambient Light Glow */}
          <circle cx="460" cy="340" r="200" fill="#2E93A8" opacity="0.15" filter="blur(60px)" />
        </svg>
      </div>

      {/* Mobile Teal Backdrop */}
      <div className="absolute bottom-0 right-0 w-full h-[45%] bg-gradient-to-b from-transparent via-[#0D4A5A] to-[#082E38] lg:hidden z-0 pointer-events-none rounded-t-[36px]" />

      {/* ========================================================================= */}
      {/* 3. MAIN HERO CONTENT CONTAINER */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: LOCATION, HEADLINE, VALUE PROPS, CTAS, TRUST */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6 pt-1 lg:pt-2 text-left">
            
            {/* 1. Location Pill Badge */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-white shadow-[0_2px_12px_rgba(13,74,90,0.08)] border border-[#0D4A5A]/10 text-[#0D4A5A] text-xs font-sans font-semibold tracking-wide transition-transform hover:scale-[1.01]">
              <MapPin className="w-3.5 h-3.5 text-ewa-magenta shrink-0 animate-pulse" />
              <span>Welcome to Ewa Derma - Golf City, Lucknow</span>
            </div>

            {/* 2. Main Heading: Where Science Meets Artistry */}
            <h1 className="font-display font-medium tracking-tight text-[#0D4A5A] text-4xl sm:text-5xl lg:text-[58px] xl:text-[66px] leading-[1.08]">
              Where Science <br />
              Meets <span className="text-ewa-magenta font-semibold">Artistry.</span>
            </h1>

            {/* 3. Supporting Description */}
            <p className="text-[#0D4A5A]/85 text-sm sm:text-base lg:text-[16.5px] font-sans leading-relaxed max-w-[500px]">
              Advanced skin & hair care treatments designed for your unique beauty, safety and long-term results.
            </p>

            {/* 4. Four Compact Value Propositions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 py-2 pt-1 border-y border-[#0D4A5A]/10 max-w-[540px]">
              {/* Value 1: Expert Dermatologists */}
              <div className="flex items-center gap-2 pr-1.5 sm:border-r border-[#0D4A5A]/15">
                <div className="w-7 h-7 rounded-full bg-[#0D4A5A]/5 flex items-center justify-center shrink-0 text-[#0D4A5A]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[11.5px] font-sans font-semibold text-[#0D4A5A] leading-tight">Expert</div>
                  <div className="text-[10.5px] font-sans text-[#0D4A5A]/75 leading-tight">Dermatologists</div>
                </div>
              </div>

              {/* Value 2: Safe & Advanced Technology */}
              <div className="flex items-center gap-2 px-0 sm:px-1.5 sm:border-r border-[#0D4A5A]/15">
                <div className="w-7 h-7 rounded-full bg-[#0D4A5A]/5 flex items-center justify-center shrink-0 text-[#0D4A5A]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11.5px] font-sans font-semibold text-[#0D4A5A] leading-tight">Safe &</div>
                  <div className="text-[10.5px] font-sans text-[#0D4A5A]/75 leading-tight">Advanced Tech</div>
                </div>
              </div>

              {/* Value 3: Personalized Treatment Plans */}
              <div className="flex items-center gap-2 px-0 sm:px-1.5 sm:border-r border-[#0D4A5A]/15">
                <div className="w-7 h-7 rounded-full bg-[#0D4A5A]/5 flex items-center justify-center shrink-0 text-[#0D4A5A]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9-4.97 0-9 4.03-9 9a9 9 0 0 0 9 9Z" />
                    <path d="M12 3v18" />
                    <path d="M12 14c2.5 0 4.5-2 4.5-4.5S14.5 5 12 5s-4.5 2-4.5 4.5S9.5 14 12 14Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[11.5px] font-sans font-semibold text-[#0D4A5A] leading-tight">Personalized</div>
                  <div className="text-[10.5px] font-sans text-[#0D4A5A]/75 leading-tight">Treatment Plans</div>
                </div>
              </div>

              {/* Value 4: Natural & Long-Lasting Results */}
              <div className="flex items-center gap-2 pl-0 sm:pl-1.5">
                <div className="w-7 h-7 rounded-full bg-[#0D4A5A]/5 flex items-center justify-center shrink-0 text-[#0D4A5A]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12l4 6-10 12L2 9l4-6Z" />
                    <path d="M2 9h20" />
                    <path d="M10 3l-2 6 4 12 4-12-2-6" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[11.5px] font-sans font-semibold text-[#0D4A5A] leading-tight">Natural &</div>
                  <div className="text-[10.5px] font-sans text-[#0D4A5A]/75 leading-tight">Lasting Results</div>
                </div>
              </div>
            </div>

            {/* 5. CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              {/* Primary CTA: Book a Consultation */}
              <Link href="/book" className="group">
                <button className="relative inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-ewa-magenta text-white font-sans font-medium text-sm sm:text-base shadow-[0_8px_24px_-4px_rgba(227,28,121,0.45)] hover:bg-[#C71466] hover:shadow-[0_12px_28px_-4px_rgba(227,28,121,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>

              {/* Secondary CTA: Explore Treatments */}
              <Link href="/services" className="group">
                <button className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/60 hover:bg-white border border-[#0D4A5A]/80 text-[#0D4A5A] font-sans font-medium text-sm sm:text-base shadow-[0_2px_8px_rgba(13,74,90,0.04)] hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-4 h-4 text-[#0D4A5A] transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* 6. Trust Indicators Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-[#0D4A5A]/85 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0D4A5A]" />
                <span>FDA Approved Tech</span>
              </div>
              <div className="h-4 w-px bg-[#0D4A5A]/20 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#0D4A5A]" />
                <span>Certified Specialists</span>
              </div>
              <div className="h-4 w-px bg-[#0D4A5A]/20 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="font-semibold text-[#0D4A5A]">4.9★ Rating</span>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: LARGE MODEL PORTRAIT + FLOATING WIDGETS + SCRIPT ACCENT */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] pt-4 lg:pt-0">
            
            {/* Top-Right Script Accent: "Healthy Skin Confident You" */}
            <div className="absolute top-1 sm:top-4 right-2 sm:right-4 z-20 pointer-events-none text-right">
              <div className="font-script text-white/95 text-2xl sm:text-3xl lg:text-[32px] leading-tight select-none rotate-[-4deg] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                Healthy Skin <br />
                <span className="font-light tracking-wide">Confident You</span>
              </div>
            </div>

            {/* Model Image with Natural Bottom Extension (Now a Seamless Looping Video) */}
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] aspect-[3.2/4] flex items-end justify-center z-10 translate-y-8 sm:translate-y-12 lg:translate-y-16">
              <div className="relative w-full h-full">
                <video
                  src="https://res.cloudinary.com/zvlxacfu/video/upload/v1790586947/hero-section.webm"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            {/* ========================================================================= */}
            {/* CIRCULAR FLOATING APPOINTMENT WIDGET (ROTATING TEXT + CENTER PINK BUTTON) */}
            {/* ========================================================================= */}
            <div className="absolute top-[38%] sm:top-[40%] right-2 sm:-right-3 lg:-right-1 z-20 animate-float-slow">
              <Link
                href="/book"
                className="relative flex items-center justify-center w-22 h-22 sm:w-26 sm:h-26 lg:w-28 lg:h-28 rounded-full bg-[#0D4A5A]/90 backdrop-blur-md text-white shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300 group border border-white/40"
                aria-label="Book your appointment"
              >
                {/* Continuous Rotating Text Ring */}
                <div className="absolute inset-0 animate-[spin_8s_linear_infinite] pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="heroAppointmentCircle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[10px] font-sans font-bold uppercase fill-white/90 tracking-[0.24em]">
                      <textPath href="#heroAppointmentCircle" startOffset="0%">
                        • BOOK YOUR APPOINTMENT •
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Center Solid Pink Circle with Calendar + Arrow */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-ewa-magenta flex flex-col items-center justify-center text-white shadow-md group-hover:bg-[#C71466] transition-colors">
                  <Calendar className="w-4 h-4 text-white -mb-0.5" />
                  <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </div>

            {/* ========================================================================= */}
            {/* FLOATING "ADVANCED DERMATOLOGY" INFORMATION CARD */}
            {/* ========================================================================= */}
            <div className="absolute bottom-3 sm:bottom-6 right-2 sm:right-3 z-20">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2 sm:px-4.5 sm:py-2.5 border border-white/80 shadow-[0_12px_28px_rgba(0,0,0,0.18)] flex items-center gap-3 hover:scale-[1.02] transition-transform">
                {/* Botanical Green Leaf Badge */}
                <div className="w-9 h-9 rounded-xl bg-emerald-50/80 border border-emerald-200/60 flex items-center justify-center shrink-0 shadow-inner">
                  <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 4 13C4 7 11 3 20 3c0 9-4 16-9 17Z" />
                    <path d="M4 13c5.5 0 9.5-3 12-8" />
                  </svg>
                </div>

                {/* Card Text Information */}
                <div className="text-left">
                  <div className="text-[13.5px] sm:text-[14.5px] font-display font-bold text-[#0D4A5A] tracking-tight">
                    Advanced Dermatology
                  </div>
                  <div className="text-[8.5px] sm:text-[9.5px] font-sans font-bold tracking-[0.16em] text-[#0D4A5A]/70 uppercase">
                    SKIN · HAIR · LASER · AESTHETICS
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. DECORATIVE ORGANIC FLOWING WAVE & PINK ACCENT TRACE AT BOTTOM */}
      {/* ========================================================================= */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-10 sm:h-14 lg:h-18"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveFillGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#082E38" />
              <stop offset="35%" stopColor="#0D4A5A" />
              <stop offset="70%" stopColor="#146A80" />
              <stop offset="100%" stopColor="#0D4A5A" />
            </linearGradient>

            <linearGradient id="pinkTraceGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E31C79" stopOpacity="0.2" />
              <stop offset="40%" stopColor="#E31C79" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#E31C79" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E31C79" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Flowing Teal Wave */}
          <path
            d="M 0 60 C 320 120, 640 10, 1000 65 C 1220 100, 1360 80, 1440 45 L 1440 120 L 0 120 Z"
            fill="url(#waveFillGrad)"
          />

          {/* Thin Glowing Pink Accent Curve Trace */}
          <path
            d="M 0 60 C 320 120, 640 10, 1000 65 C 1220 100, 1360 80, 1440 45"
            stroke="url(#pinkTraceGlow)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};
