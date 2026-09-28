"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Cpu,
  HeartHandshake,
  Layers,
  ShieldCheck,
  Sparkles,
  Maximize,
} from "lucide-react";

export function OurBenefitsSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleFullscreen = () => {
    if (wrapperRef.current) {
      if (wrapperRef.current.requestFullscreen) {
        wrapperRef.current.requestFullscreen();
      } else if ((wrapperRef.current as any).webkitRequestFullscreen) {
        (wrapperRef.current as any).webkitRequestFullscreen();
      } else if ((wrapperRef.current as any).msRequestFullscreen) {
        (wrapperRef.current as any).msRequestFullscreen();
      }
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0D4A5A] text-white relative overflow-hidden border-b border-ewa-teal-bg-2/40">
      {/* Decorative Botanical Leaf Outlines & Ambient Glows */}
      <div className="absolute -top-16 -left-16 w-80 h-80 opacity-15 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full text-white">
          <path d="M20 180 C60 120, 100 80, 180 20 M180 20 C140 60, 100 100, 60 180" strokeWidth="2" />
          <path d="M70 120 C90 100, 120 90, 150 70 M100 150 C120 130, 150 120, 170 100" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="absolute -top-16 -right-16 w-80 h-80 opacity-15 pointer-events-none rotate-90">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full text-white">
          <path d="M20 180 C60 120, 100 80, 180 20 M180 20 C140 60, 100 100, 60 180" strokeWidth="2" />
          <path d="M70 120 C90 100, 120 90, 150 70 M100 150 C120 130, 150 120, 170 100" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-ewa-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-display font-semibold tracking-wide border border-white/20 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ewa-magenta animate-pulse" />
            <span>Our Benefits</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-standard-white"
          >
            Exceptional dermatology, <br className="hidden sm:inline" />
            every step of the way
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="paragraph-standard-white text-base sm:text-lg max-w-2xl mx-auto"
          >
            Experience personalized care, advanced treatments, and visible results with our expert dermatology services.
          </motion.p>
        </div>

        {/* 3-Column Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: 3 Benefits (Right-aligned text + right icon) */}
          <div className="lg:col-span-4 space-y-10 order-2 lg:order-1">
            {/* Benefit 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row lg:flex-row items-start sm:items-center lg:items-center justify-end gap-4 text-left sm:text-right lg:text-right group"
            >
              <div className="order-2 sm:order-1 lg:order-1 space-y-1">
                <h3 className="subheading-standard-white group-hover:text-ewa-cyan transition-colors">
                  Expert Dermatologists
                </h3>
                <p className="paragraph-standard-white text-xs sm:text-sm">
                  Our team consists of board-certified dermatologists with extensive clinical experience.
                </p>
              </div>
              <div className="order-1 sm:order-2 lg:order-2 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 group-hover:bg-white group-hover:text-ewa-teal-deep transition-all duration-300">
                <Award className="w-6 h-6" />
              </div>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row lg:flex-row items-start sm:items-center lg:items-center justify-end gap-4 text-left sm:text-right lg:text-right group"
            >
              <div className="order-2 sm:order-1 lg:order-1 space-y-1">
                <h3 className="subheading-standard-white group-hover:text-ewa-cyan transition-colors">
                  Advanced Technology
                </h3>
                <p className="paragraph-standard-white text-xs sm:text-sm">
                  We use cutting-edge US-FDA approved equipment and innovative medical techniques.
                </p>
              </div>
              <div className="order-1 sm:order-2 lg:order-2 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 group-hover:bg-white group-hover:text-ewa-teal-deep transition-all duration-300">
                <Cpu className="w-6 h-6" />
              </div>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row lg:flex-row items-start sm:items-center lg:items-center justify-end gap-4 text-left sm:text-right lg:text-right group"
            >
              <div className="order-2 sm:order-1 lg:order-1 space-y-1">
                <h3 className="subheading-standard-white group-hover:text-ewa-cyan transition-colors">
                  Personalized Care
                </h3>
                <p className="paragraph-standard-white text-xs sm:text-sm">
                  Every treatment plan is tailored to your unique skin type, concerns, and lifestyle.
                </p>
              </div>
              <div className="order-1 sm:order-2 lg:order-2 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 group-hover:bg-white group-hover:text-ewa-teal-deep transition-all duration-300">
                <HeartHandshake className="w-6 h-6" />
              </div>
            </motion.div>
          </div>

          {/* Center Column: Arched Doctor Portrait (Dr. Ana) */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[280px] sm:w-[320px] h-[400px] sm:h-[480px] rounded-t-[200px] rounded-b-[40px] overflow-hidden shadow-2xl border-4 border-white/40 bg-gradient-to-b from-[#146A80] to-[#0D4A5A] group"
            >
              <div ref={wrapperRef} className="w-full h-full relative fullscreen-video-wrapper">
                <video
                  ref={videoRef}
                  src="https://res.cloudinary.com/zvlxacfu/video/upload/v1790581431/240_Derma.mp4"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out fullscreen-video-element"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
                
                {/* Fullscreen Button */}
                <button
                  onClick={handleFullscreen}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all duration-300 shadow-md flex items-center justify-center group-hover:opacity-100"
                  aria-label="Fullscreen"
                  title="Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          <style>{`
            .fullscreen-video-wrapper:fullscreen {
              width: 100vw !important;
              height: 100vh !important;
              background: #000 !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
            .fullscreen-video-wrapper:-webkit-full-screen {
              width: 100vw !important;
              height: 100vh !important;
              background: #000 !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
            .fullscreen-video-wrapper:fullscreen .fullscreen-video-element,
            .fullscreen-video-wrapper:-webkit-full-screen .fullscreen-video-element {
              width: 100vw !important;
              height: 100vh !important;
              max-width: none !important;
              max-height: none !important;
              object-fit: contain !important;
              transform: none !important;
              border-radius: 0 !important;
            }
          `}</style>

          {/* Right Column: 3 Benefits (Left-aligned text + left icon) */}
          <div className="lg:col-span-4 space-y-10 order-3">
            {/* Benefit 4 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start sm:items-center gap-4 text-left group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 group-hover:bg-white group-hover:text-ewa-teal-deep transition-all duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="subheading-standard-white group-hover:text-ewa-cyan transition-colors">
                  Comprehensive Services
                </h3>
                <p className="paragraph-standard-white text-xs sm:text-sm">
                  From medical dermatology to cosmetic enhancements, we offer complete aesthetic care.
                </p>
              </div>
            </motion.div>

            {/* Benefit 5 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start sm:items-center gap-4 text-left group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 group-hover:bg-white group-hover:text-ewa-teal-deep transition-all duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="subheading-standard-white group-hover:text-ewa-cyan transition-colors">
                  High Safety Standards
                </h3>
                <p className="paragraph-standard-white text-xs sm:text-sm">
                  Your safety is our priority. We strictly adhere to hospital-grade hygiene and safety protocols.
                </p>
              </div>
            </motion.div>

            {/* Benefit 6 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start sm:items-center gap-4 text-left group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 group-hover:bg-white group-hover:text-ewa-teal-deep transition-all duration-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="subheading-standard-white group-hover:text-ewa-cyan transition-colors">
                  Comfortable Environment
                </h3>
                <p className="paragraph-standard-white text-xs sm:text-sm">
                  Our clinic provides a welcoming, private, and stress-free atmosphere for your comfort.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
