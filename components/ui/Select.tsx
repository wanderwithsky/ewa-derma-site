import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options?: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, children, id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label htmlFor={selectId} className="text-xs font-display font-semibold text-ewa-ink/85 flex items-center gap-1">
            {label}
            {props.required && <span className="text-ewa-magenta">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              "w-full appearance-none bg-white/90 border border-ewa-line rounded-xl px-4 py-2.5 pr-10 text-sm text-ewa-ink",
              "transition-all duration-200 outline-none cursor-pointer",
              "focus:bg-white focus:border-ewa-teal focus:ring-2 focus:ring-ewa-teal/20",
              error && "border-red-500 focus:border-red-500",
              className
            )}
            {...props}
          >
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>
          <ChevronDown className="absolute right-3.5 text-ewa-teal pointer-events-none w-4 h-4 opacity-70" />
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

Select.displayName = "Select";
