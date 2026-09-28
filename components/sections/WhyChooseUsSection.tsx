"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  CheckSquare,
  Users,
  ArrowRight,
  Play,
  X,
  Send,
  Maximize,
} from "lucide-react";

export function WhyChooseUsSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
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
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-b border-ewa-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Overlapping Luxury Image Composition with Slide Animation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto w-full flex justify-center">
              {/* Inner wrapper to anchor the absolute badge to the video bounds */}
              <div className="relative inline-flex">
                
                {/* Primary Large Image (Now a Video) */}
                <div 
                  ref={wrapperRef} 
                  className="relative rounded-[28px] overflow-hidden shadow-2xl group fullscreen-video-wrapper bg-black/5 shrink-0"
                  style={{ aspectRatio: '9 / 16', height: 'min(80vh, 720px)', width: 'auto' }}
                >
                  <video
                    ref={videoRef}
                    src="https://res.cloudinary.com/zvlxacfu/video/upload/v1790585584/without_outro.mp4"
                    className="w-full h-full object-cover object-center brightness-[0.98] group-hover:scale-105 transition-transform duration-700 fullscreen-video-element"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Fullscreen Button */}
                  <button
                    onClick={handleFullscreen}
                    className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all duration-300 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100"
                    aria-label="Fullscreen"
                    title="Fullscreen"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>

                {/* Floating Circular Rotating Contact Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                  className="absolute -top-10 sm:-top-12 -right-10 sm:-right-12 z-20"
                >
                  <Link
                    href="/contact"
                    className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0D4A5A] text-white shadow-xl hover:scale-110 transition-transform duration-300 group border-2 border-white/60"
                  >
                    {/* Rotating Text Ring */}
                    <div className="absolute inset-0 animate-spin-slow pointer-events-none">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          id="circlePath"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                          fill="none"
                        />
                        <text className="text-[10px] font-display font-semibold uppercase fill-white tracking-[0.2em]">
                          <textPath href="#circlePath" startOffset="0%">
                            • Contact Us • Contact Us •
                          </textPath>
                        </text>
                      </svg>
                    </div>

                    {/* Center Icon */}
                    <div className="w-8 h-8 rounded-full bg-ewa-magenta flex items-center justify-center text-white shadow-sm group-hover:rotate-45 transition-transform duration-300">
                      <Send className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </motion.div>
                
              </div>
            </div>
          </motion.div>

          {/* Right Column: Why Choose Us Content & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ewa-teal/10 text-ewa-teal-deep text-xs font-display font-semibold tracking-wide border border-ewa-teal/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ewa-teal animate-pulse" />
              <span>About Us</span>
            </motion.div>

            {/* Title - Standard Heading */}
            <h2 className="heading-standard">
              Why choose us for all your <br className="hidden sm:inline" />
              dermatology needs
            </h2>

            {/* Description - Standard Paragraph */}
            <p className="paragraph-standard text-base sm:text-lg">
              We&apos;re dedicated to helping you achieve and maintain beautiful, healthy skin. Trust us to provide exceptional care tailored to you.
            </p>

            {/* Checklist items with staggered reveal */}
            <div className="space-y-4 pt-2">
              {[
                "Commitment to Excellence in Skin Health",
                "State-of-the-Art Facility and Technology",
                "Trusted by Thousands of Satisfied Patients",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 * idx }}
                  className="flex items-start gap-3.5 group"
                >
                  <CheckSquare className="w-5 h-5 text-ewa-teal-deep shrink-0 mt-0.5 group-hover:text-ewa-magenta transition-colors" />
                  <span className="text-sm sm:text-base font-medium text-ewa-ink/90">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTAs & Floating Stat Box */}
            <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-ewa-line">
              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/about">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-[#0D4A5A] hover:bg-[#146A80] text-white shadow-md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    About More
                  </Button>
                </Link>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-ewa-teal-deep/20 text-ewa-teal-deep font-display font-semibold text-sm hover:bg-ewa-teal-deep/5 transition-colors shadow-sm active:scale-95"
                >
                  <span className="w-7 h-7 rounded-full bg-ewa-teal-deep text-white flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                  </span>
                  <span>Play Session</span>
                </button>
              </div>

              {/* Stat Pill Card (Dark Teal Rounded Box with Pop Animation) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
                className="p-5 rounded-[24px] bg-[#0B2C33] text-white flex items-center gap-4 shadow-xl border border-white/10 shrink-0 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-ewa-cyan">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-white">
                    29 +
                  </div>
                  <div className="text-xs text-white/75 font-medium">
                    Team Members
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal (Optional preview) */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-ewa-line pb-3">
              <h3 className="font-display font-bold text-lg text-ewa-teal-deep">
                Ewa Derma Clinic Tour & Experience
              </h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-ewa-mist flex items-center justify-center text-ewa-ink hover:bg-ewa-magenta hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="aspect-video w-full rounded-2xl bg-ewa-teal-deep/10 flex items-center justify-center overflow-hidden relative">
              <Image
                src="/images/gallery/Screenshot 2026-09-17 150809.png"
                alt="Ewa Derma Clinic Luxury Suite in Golf City Lucknow"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
                <Play className="w-16 h-16 text-white mb-2" />
                <p className="font-display font-semibold text-lg">
                  Clinical Session & Facility Showcase
                </p>
                <p className="text-xs text-white/80 max-w-md">
                  Book an in-person consultation at The Millennium Place, Golf City, Lucknow.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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
    </section>
  );
}
