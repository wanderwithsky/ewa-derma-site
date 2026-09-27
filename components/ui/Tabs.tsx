"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  variant?: "pill" | "underline" | "glass";
  size?: "sm" | "md" | "lg";
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeId,
  onChange,
  className,
  variant = "pill",
  size = "md",
}) => {
  const prefersReducedMotion = useReducedMotion();

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-6 py-2.5 gap-2.5",
  };

  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex items-center p-1.5 rounded-full",
        variant === "glass" ? "glass-panel" : "bg-ewa-teal/5 border border-ewa-line",
        className
      )}
    >
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <button
            key={item.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.id)}
            className={cn(
              "relative font-display font-medium rounded-full transition-colors flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-ewa-teal select-none cursor-pointer",
              sizeStyles[size],
              isActive ? "text-white" : "text-ewa-ink/70 hover:text-ewa-teal"
            )}
          >
            {/* Smooth Sliding Pill Indicator */}
            {isActive && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-gradient-to-r from-ewa-teal to-ewa-teal-deep rounded-full shadow-ewa-sm border border-white/20"
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 450, damping: 35 }
                }
              />
            )}

            {item.icon && <span className="relative z-10">{item.icon}</span>}
            <span className="relative z-10">{item.label}</span>
            {typeof item.count === "number" && (
              <span
                className={cn(
                  "relative z-10 text-[10px] px-1.5 py-0.5 rounded-full font-bold",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-ewa-teal/10 text-ewa-teal"
                )}
              >
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
