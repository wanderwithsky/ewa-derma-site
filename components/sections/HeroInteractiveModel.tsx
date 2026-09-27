"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

export function HeroInteractiveModel() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Coordinates for Smooth 3D Cursor Parallax Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 110, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D rotations & layer translations
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [9, -9]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);
  const badgeX = useTransform(smoothX, [-0.5, 0.5], [14, -14]);
  const badgeY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xRatio);
    mouseY.set(yRatio);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex items-center justify-center lg:justify-end py-4"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[380px] sm:max-w-[430px] aspect-[3/4] flex items-end justify-center"
      >
        {/* Radiant Cyan & Magenta Backlight Glow Halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-ewa-cyan/35 to-ewa-magenta/20 blur-[70px] pointer-events-none scale-105" />

        {/* Model Portrait with Smooth Breathing Float Motion & Transparent Card Background */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          className="relative w-full h-full rounded-[32px] overflow-hidden bg-transparent"
        >
          <Image
            src="/images/hero-model.png"
            alt="Ewa Derma Clinical Aesthetic Model"
            fill
            priority
            sizes="(max-width: 768px) 360px, 440px"
            className="object-contain object-bottom select-none filter drop-shadow-2xl"
          />
        </motion.div>

        {/* Floating Rotating Contact Us Circular Badge */}
        <motion.div
          style={{
            x: badgeX,
            y: badgeY,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="absolute top-1/3 -left-4 sm:-left-8 z-20"
        >
          <Link
            href="/contact"
            className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0D4A5A]/95 backdrop-blur-md text-white shadow-2xl hover:scale-110 transition-transform duration-300 group border-2 border-white/50"
          >
            {/* Continuous Rotating Text Ring */}
            <div className="absolute inset-0 animate-spin-slow pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="heroOverlayCircle"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10.5px] font-display font-bold uppercase fill-white tracking-[0.22em]">
                  <textPath href="#heroOverlayCircle" startOffset="0%">
                    • Contact Us • Contact Us •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Center Send / Airplane Icon */}
            <div className="w-9 h-9 rounded-full bg-ewa-magenta flex items-center justify-center text-white shadow-md group-hover:rotate-45 transition-transform duration-300">
              <Send className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
