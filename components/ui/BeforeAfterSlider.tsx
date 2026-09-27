"use client";

import React, { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface BeforeAfterSliderProps {
  title?: string;
  category?: string;
  timeline?: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  details?: string;
  className?: string;
  initialPosition?: number;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  title,
  category,
  timeline,
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  details,
  className,
  initialPosition = 50,
}) => {
  const [sliderPos, setSliderPos] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
  };

  return (
    <div className={cn("group flex flex-col space-y-3.5", className)}>
      {/* Slider Visual Box */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden select-none cursor-ew-resize border border-[#146A80]/15 shadow-xl bg-gray-100 touch-none"
      >
        {/* "AFTER" Image Layer (Full Background / Base) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={afterImage}
            alt={title ? `${title} - After Treatment` : "After Treatment Outcome"}
            className="w-full h-full object-cover object-center pointer-events-none"
            loading="lazy"
          />
          {/* After label badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wide bg-white/95 text-[#0D4A5A] shadow-md backdrop-blur-md border border-white/60">
              {afterLabel}
            </span>
          </div>
        </div>

        {/* "BEFORE" Image Layer (Clipped to Slider Position) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={title ? `${title} - Before Treatment` : "Before Treatment Baseline"}
            className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
            style={{ width: "100%", height: "100%" }}
            loading="lazy"
          />
          {/* Before label badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wide bg-[#14262B]/85 text-white shadow-md backdrop-blur-md border border-white/20">
              {beforeLabel}
            </span>
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2.5px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Circular Drag Handle with < | > icon */}
          <div
            role="slider"
            aria-label={title ? `${title} comparison slider` : "Before and after comparison slider"}
            aria-valuenow={Math.round(sliderPos)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                setSliderPos((prev) => Math.max(0, prev - 5));
              } else if (e.key === "ArrowRight") {
                setSliderPos((prev) => Math.min(100, prev + 5));
              } else if (e.key === "Home") {
                setSliderPos(0);
              } else if (e.key === "End") {
                setSliderPos(100);
              }
            }}
            className={cn(
              "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-2xl flex items-center justify-center transition-transform duration-150 border border-gray-200 pointer-events-auto focus:outline-none focus-visible:ring-4 focus-visible:ring-[#146A80]/50",
              isDragging ? "scale-110 shadow-2xl ring-4 ring-[#146A80]/40" : "group-hover:scale-105"
            )}
          >
            <div className="flex items-center text-[#146A80] gap-0.5 select-none">
              <ChevronLeft className="w-4 h-4 stroke-[3]" />
              <div className="w-[1.5px] h-3.5 bg-[#146A80]/40 rounded-full" />
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </div>
          </div>
        </div>
      </div>

      {/* Metadata Row (Title / Category / Timeline / Details) */}
      {(title || category || timeline || details) && (
        <div className="px-1.5 space-y-2">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            {category && (
              <Badge variant="teal" size="sm">
                {category}
              </Badge>
            )}
            {timeline && (
              <span className="text-[11px] font-mono font-semibold text-[#0D4A5A] bg-[#0D4A5A]/10 px-2.5 py-0.5 rounded-full border border-[#0D4A5A]/15">
                {timeline}
              </span>
            )}
          </div>
          {title && (
            <h4 className="font-display font-bold text-lg text-[#0D4A5A] leading-snug">
              {title}
            </h4>
          )}
          {details && (
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {details}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
