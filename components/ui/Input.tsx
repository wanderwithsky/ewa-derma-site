import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label htmlFor={inputId} className="text-xs font-display font-semibold text-ewa-ink/85 flex items-center gap-1">
            {label}
            {props.required && <span className="text-ewa-magenta">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && <div className="absolute left-3.5 text-ewa-teal pointer-events-none">{leftIcon}</div>}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full bg-white/90 border border-ewa-line rounded-xl px-4 py-2.5 text-sm text-ewa-ink placeholder:text-ewa-ink/40",
              "transition-all duration-200 outline-none",
              "focus:bg-white focus:border-ewa-teal focus:ring-2 focus:ring-ewa-teal/20",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            {...props}
          />
          {rightIcon && <div className="absolute right-3.5 text-ewa-teal pointer-events-none">{rightIcon}</div>}
        </div>
        {error ? (
          <span className="text-xs text-red-500 font-medium">{error}</span>
        ) : helperText ? (
          <span className="text-xs text-ewa-ink/60">{helperText}</span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
