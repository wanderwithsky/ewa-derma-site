"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<HTMLMotionProps<any>, "ref" | "children"> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp" | "call";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  magnetic?: boolean;
  asDiv?: boolean;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      magnetic = true,
      onClick,
      asDiv = false,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLElement | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const prefersReducedMotion = useReducedMotion();

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      if (!magnetic || prefersReducedMotion || disabled || isLoading) return;
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
        setMousePos({ x, y });
      }
    };

    const handleMouseLeave = () => {
      setMousePos({ x: 0, y: 0 });
    };

    const baseStyles =
      "relative inline-flex items-center justify-center font-display font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97] select-none cursor-pointer overflow-hidden";

    const variantStyles = {
      primary:
        "bg-ewa-magenta text-white shadow-ewa-glow-magenta hover:bg-ewa-magenta-deep hover:shadow-lg focus-visible:ring-ewa-magenta border border-white/20",
      secondary:
        "bg-ewa-teal text-white shadow-ewa-glow-teal hover:bg-ewa-teal-deep hover:shadow-lg focus-visible:ring-ewa-teal border border-white/10",
      outline:
        "bg-transparent text-ewa-teal border-2 border-ewa-teal hover:bg-ewa-teal hover:text-white focus-visible:ring-ewa-teal",
      ghost:
        "bg-transparent text-ewa-teal hover:bg-ewa-teal/10 focus-visible:ring-ewa-teal",
      whatsapp:
        "bg-[#25D366] text-white shadow-md hover:bg-[#20ba5a] hover:shadow-lg focus-visible:ring-[#25D366] border border-white/20",
      call:
        "bg-ewa-teal-deep text-white shadow-md hover:bg-ewa-teal hover:shadow-lg focus-visible:ring-ewa-teal border border-white/10",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5 shadow-md",
      xl: "text-lg px-9 py-4 gap-3 shadow-lg font-semibold",
    };

    const MotionComponent = asDiv ? motion.div : motion.button;

    return (
      <MotionComponent
        ref={(node: any) => {
          buttonRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={
          prefersReducedMotion || !magnetic
            ? {}
            : { x: mousePos.x, y: mousePos.y }
        }
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
        whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        disabled={disabled || isLoading}
        onClick={onClick}
        {...props}
      >
        {variant === "primary" && (
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
        )}

        {isLoading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}
        <span className="relative z-10">{children}</span>
        {!isLoading && rightIcon ? <span className="shrink-0 relative z-10">{rightIcon}</span> : null}
      </MotionComponent>
    );
  }
);

Button.displayName = "Button";
