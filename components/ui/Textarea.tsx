import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, rows = 4, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label htmlFor={textareaId} className="text-xs font-display font-semibold text-ewa-ink/85 flex items-center gap-1">
            {label}
            {props.required && <span className="text-ewa-magenta">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          className={cn(
            "w-full bg-white/90 border border-ewa-line rounded-xl px-4 py-3 text-sm text-ewa-ink placeholder:text-ewa-ink/40",
            "transition-all duration-200 outline-none resize-y",
            "focus:bg-white focus:border-ewa-teal focus:ring-2 focus:ring-ewa-teal/20",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
        {error ? (
          <span className="text-xs text-red-500 font-medium">{error}</span>
        ) : helperText ? (
          <span className="text-xs text-ewa-ink/60">{helperText}</span>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
