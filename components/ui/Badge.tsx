"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "teal" | "magenta" | "hair" | "skin" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  animatedRing?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = "teal",
      size = "md",
      dot = false,
      animatedRing = false,
      children,
      ...props
    },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();

    const baseStyles =
      "relative inline-flex items-center font-display font-medium rounded-full transition-colors select-none";

    const variantStyles = {
      teal: "bg-ewa-teal/10 text-ewa-teal border border-ewa-teal/20",
      magenta: "bg-ewa-magenta/10 text-ewa-magenta border border-ewa-magenta/25",
      hair: "bg-ewa-green/15 text-[#2A7550] dark:text-ewa-green border border-ewa-green/30",
      skin: "bg-ewa-cyan/15 text-[#186070] dark:text-ewa-cyan border border-ewa-cyan/30",
      outline: "bg-transparent text-ewa-ink border border-ewa-line",
      glass: "glass-panel text-ewa-ink border-white/40 shadow-sm",
    };

    const dotStyles = {
      teal: "bg-ewa-teal",
      magenta: "bg-ewa-magenta",
      hair: "bg-ewa-green",
      skin: "bg-ewa-cyan",
      outline: "bg-ewa-ink",
      glass: "bg-ewa-magenta",
    };

    const sizeStyles = {
      sm: "text-[11px] px-2.5 py-0.5 gap-1.5",
      md: "text-xs px-3 py-1 gap-1.5",
      lg: "text-sm px-4 py-1.5 gap-2",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {/* Animated Self-Drawing Ring */}
        {animatedRing && !prefersReducedMotion && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none rounded-full"
            preserveAspectRatio="none"
          >
            <motion.rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="9999"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="100 200"
              initial={{ strokeDashoffset: 300 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </svg>
        )}

        {dot && (
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              dotStyles[variant],
              !prefersReducedMotion && "animate-pulse"
            )}
          />
        )}
        <span className="relative z-10">{children}</span>
      </span>
    );
  }
);

Badge.displayName = "Badge";
