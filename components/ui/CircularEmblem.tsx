"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, ShieldCheck, Award } from "lucide-react";

export interface CircularEmblemProps {
  size?: "sm" | "md" | "lg" | "xl";
  label?: string;
  icon?: "logo" | "sparkles" | "shield" | "award" | "custom";
  customIcon?: React.ReactNode;
  animatedRing?: boolean;
  className?: string;
}

export const CircularEmblem: React.FC<CircularEmblemProps> = ({
  size = "md",
  label = "FDA APPROVED • SCIENCE & ARTISTRY •",
  icon = "logo",
  customIcon,
  animatedRing = true,
  className,
}) => {
  const prefersReducedMotion = useReducedMotion();

  const sizeMap = {
    sm: { box: "w-20 h-20", inner: "w-14 h-14", iconSize: 18, fontSize: "text-[7px]", imgSize: 48 },
    md: { box: "w-32 h-32", inner: "w-20 h-20", iconSize: 24, fontSize: "text-[9px]", imgSize: 72 },
    lg: { box: "w-44 h-44", inner: "w-28 h-28", iconSize: 32, fontSize: "text-[11px]", imgSize: 100 },
    xl: { box: "w-56 h-56", inner: "w-36 h-36", iconSize: 42, fontSize: "text-[13px]", imgSize: 130 },
  };

  const currentSize = sizeMap[size];

  const renderIcon = () => {
    if (customIcon) return customIcon;
    if (icon === "logo") {
      return (
        <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center p-1">
          <Image
            src="/images/logo.png"
            alt="Ewa Derma Clinic Official Emblem"
            width={currentSize.imgSize}
            height={currentSize.imgSize}
            className="w-full h-full object-cover rounded-full select-none pointer-events-none"
            priority
          />
        </div>
      );
    }
    switch (icon) {
      case "sparkles":
        return <Sparkles size={currentSize.iconSize} className="text-ewa-magenta drop-shadow-md" />;
      case "award":
        return <Award size={currentSize.iconSize} className="text-ewa-green drop-shadow-md" />;
      case "shield":
      default:
        return <ShieldCheck size={currentSize.iconSize} className="text-ewa-cyan drop-shadow-md" />;
    }
  };

  return (
    <div className={cn("relative flex items-center justify-center select-none", currentSize.box, className)}>
      {/* Outer Rotating Text / Ring */}
      {animatedRing && !prefersReducedMotion && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id={`circlePath-${size}-${label.replace(/[^a-zA-Z0-9]/g, "")}`}
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className={cn("fill-ewa-teal font-display font-bold uppercase tracking-widest", currentSize.fontSize)}>
              <textPath href={`#circlePath-${size}-${label.replace(/[^a-zA-Z0-9]/g, "")}`} startOffset="0%">
                {label}
              </textPath>
            </text>
          </svg>
        </motion.div>
      )}

      {/* Outer Dimensional Ring Bevel */}
      <div className="absolute inset-2 rounded-full border border-ewa-teal/20 shadow-sm pointer-events-none" />

      {/* Inner Dimensional 3D Emblem */}
      <motion.div
        whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
        className={cn(
          "relative rounded-full flex items-center justify-center",
          "bg-gradient-to-br from-[#1B4B5C] via-[#146A80] to-[#0D4A5A] text-white",
          "shadow-ewa-lg border-2 border-white/40",
          currentSize.inner
        )}
        style={{
          boxShadow:
            "0 10px 25px -4px rgba(13, 74, 90, 0.45), inset 0 2px 4px rgba(255, 255, 255, 0.5), inset 0 -2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Silhouette Arc Accents (Male Green & Female Cyan) */}
        <div className="absolute inset-0.5 rounded-full border-t-2 border-r-2 border-ewa-cyan/80 opacity-80 pointer-events-none" />
        <div className="absolute inset-0.5 rounded-full border-b-2 border-l-2 border-ewa-green/80 opacity-80 pointer-events-none" />

        {/* Center Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">{renderIcon()}</div>
      </motion.div>
    </div>
  );
};
