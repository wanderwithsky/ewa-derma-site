"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "mist" | "dark-teal" | "white" | "gradient-mesh";
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  spacing?: "sm" | "md" | "lg" | "xl" | "none";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      variant = "mist",
      containerSize = "lg",
      spacing = "lg",
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      mist: "bg-ewa-mist text-ewa-ink relative",
      white: "bg-white text-ewa-ink relative",
      "dark-teal":
        "bg-gradient-to-br from-[#0D4A5A] via-[#1B4B5C] to-[#146A80] text-white relative overflow-hidden",
      "gradient-mesh":
        "bg-[#1B4B5C] text-white relative overflow-hidden",
    };

    const containerStyles = {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      xl: "max-w-[1400px]",
      full: "max-w-full px-0",
    };

    const spacingStyles = {
      none: "py-0",
      sm: "py-8 sm:py-12",
      md: "py-12 sm:py-16",
      lg: "py-16 sm:py-24",
      xl: "py-24 sm:py-32",
    };

    return (
      <section
        ref={ref}
        className={cn(variantStyles[variant], spacingStyles[spacing], className)}
        {...props}
      >
        {/* Soft Ambient Light Blobs on Dark Variant */}
        {(variant === "dark-teal" || variant === "gradient-mesh") && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-ewa-cyan/15 blur-3xl" />
            <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-ewa-magenta/15 blur-3xl" />
            <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-ewa-green/10 blur-3xl" />
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>
        )}

        <div className={cn("mx-auto px-4 sm:px-6 lg:px-8 relative z-10", containerStyles[containerSize])}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
