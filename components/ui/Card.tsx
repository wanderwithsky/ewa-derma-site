"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "glass-dark" | "solid" | "glow-teal" | "glow-magenta";
  hoverEffect?: boolean;
  accentBorder?: "none" | "teal" | "magenta" | "green" | "cyan";
  asMotion?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "glass",
      hoverEffect = true,
      accentBorder = "none",
      asMotion = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = "relative rounded-2xl overflow-hidden transition-all duration-300";

    const variantStyles = {
      glass: "glass-card border border-white/60 text-ewa-ink",
      "glass-dark": "glass-panel-dark text-white border-ewa-teal-bg-2/30",
      solid: "bg-white text-ewa-ink border border-ewa-line shadow-ewa-sm",
      "glow-teal": "glass-card border-ewa-teal/30 shadow-ewa-glow-teal",
      "glow-magenta": "glass-card border-ewa-magenta/30 shadow-ewa-glow-magenta",
    };

    const accentBorderStyles = {
      none: "",
      teal: "border-t-4 border-t-ewa-teal",
      magenta: "border-t-4 border-t-ewa-magenta",
      green: "border-t-4 border-t-ewa-green",
      cyan: "border-t-4 border-t-ewa-cyan",
    };

    const hoverStyles = hoverEffect ? "hover:-translate-y-1.5 hover:shadow-ewa-lg cursor-pointer" : "";

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], accentBorderStyles[accentBorder], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
