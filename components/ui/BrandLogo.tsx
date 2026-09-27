"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className,
  variant = "dark",
  size = "md",
}) => {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: { img: 36, text: "text-lg", sub: "text-[9px]" },
    md: { img: 46, text: "text-2xl", sub: "text-[11px]" },
    lg: { img: 58, text: "text-3xl", sub: "text-[13px]" },
  }[size];

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3.5 group select-none transition-transform active:scale-[0.98]", className)}
      aria-label="Ewa Derma Clinic Home"
    >
      {/* Official 3D Dimensional Logo Badge */}
      <div
        className={cn(
          "relative rounded-full shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105 border-2 border-white/40 shadow-ewa-md",
          "bg-gradient-to-br from-[#1B4B5C] via-[#146A80] to-[#0D4A5A]"
        )}
        style={{
          width: sizeClasses.img,
          height: sizeClasses.img,
          boxShadow:
            "0 6px 16px -2px rgba(13, 74, 90, 0.4), inset 0 2px 3px rgba(255, 255, 255, 0.45), inset 0 -2px 3px rgba(0, 0, 0, 0.4)",
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Ewa Derma Clinic"
          width={sizeClasses.img}
          height={sizeClasses.img}
          className="w-full h-full object-cover rounded-full"
          priority
        />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col text-left leading-none">
        <span
          className={cn(
            "font-display font-black tracking-tight transition-colors",
            sizeClasses.text,
            isLight ? "text-white" : "text-ewa-teal-deep"
          )}
        >
          EWA <span className="font-light tracking-normal">DERMA</span>
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <span
            className={cn(
              "font-display font-black uppercase tracking-[0.25em] text-ewa-magenta drop-shadow-sm",
              sizeClasses.sub
            )}
          >
            CLINIC
          </span>
          <span
            className={cn(
              "hidden sm:inline-block font-sans font-medium uppercase tracking-wider text-[9px] opacity-75",
              isLight ? "text-white/70" : "text-ewa-ink/60"
            )}
          >
            • Lucknow
          </span>
        </div>
      </div>
    </Link>
  );
};
