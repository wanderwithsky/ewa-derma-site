"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckSquare,
  Play,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  X,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ServiceCategoryItem } from "@/lib/data";
import { cn } from "@/lib/utils";

// Subtle Botanical Branch Decoration for Card Corner
const BotanicalBranch = ({ className = "" }: { className?: string }) => (
  <svg
    className={cn(
      "absolute w-40 h-40 text-[#146A80]/10 pointer-events-none select-none",
      className
    )}
    viewBox="0 0 200 200"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M190 10 Q 120 70, 50 150 Q 20 180, 10 190" />
    <path d="M120 70 Q 90 90, 70 85 Q 85 70, 120 70" />
    <path d="M85 110 Q 60 140, 40 135 Q 55 115, 85 110" />
    <path d="M50 150 Q 35 180, 15 175 Q 30 155, 50 150" />
    <path d="M145 50 Q 130 25, 110 30 Q 125 50, 145 50" />
    <path d="M105 90 Q 90 65, 70 70 Q 85 90, 105 90" />
  </svg>
);

interface ServiceCardAlternatingProps {
  category: ServiceCategoryItem;
  index: number;
}

export const ServiceCardAlternating: React.FC<ServiceCardAlternatingProps> = ({
  category,
  index,
}) => {
  const [showProcedureModal, setShowProcedureModal] = useState(false);
  const isImageLeft = index % 2 === 0;

  return (
    <>
      <div
        id={category.id}
        className="relative bg-white rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 border border-[#146A80]/15 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
      >
        {/* Subtle Decorative Botanical Corner Accent */}
        <BotanicalBranch
          className={isImageLeft ? "top-2 right-2" : "top-2 left-2 rotate-90"}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* ================= IMAGE COLUMN ================= */}
          <div
            className={cn(
              "lg:col-span-6",
              isImageLeft ? "lg:order-1" : "lg:order-2"
            )}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-lg border border-[#146A80]/20 group">
              {/* Photo */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Dark Gradient Overlay for procedure banner */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D4A5A]/90 via-[#0D4A5A]/30 to-transparent pointer-events-none" />

              {/* Category Counter Pill (Top Left) */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-white/90 text-[#0D4A5A] shadow-md backdrop-blur-md border border-white/60">
                  0{index + 1} • {category.name}
                </span>
              </div>

              {/* Interactive Procedure Preview Trigger (Bottom) */}
              <button
                onClick={() => setShowProcedureModal(true)}
                className="absolute bottom-4 left-4 right-4 z-10 p-3 sm:p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center gap-3.5 hover:bg-white/25 hover:border-white/50 transition-all text-left group/btn cursor-pointer"
                title="View Step-by-Step Clinical Procedure Roadmap"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#0D4A5A] flex items-center justify-center shadow-lg group-hover/btn:scale-110 group-hover/btn:bg-[#E31C79] group-hover/btn:text-white transition-all shrink-0">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-white/80 uppercase tracking-wider">
                    Our Process
                  </div>
                  <div className="text-sm sm:text-base font-serif font-medium text-white truncate">
                    Watch our procedure & roadmap
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* ================= CONTENT COLUMN ================= */}
          <div
            className={cn(
              "lg:col-span-6 space-y-6 text-left",
              isImageLeft ? "lg:order-2" : "lg:order-1"
            )}
          >
            {/* Dot Badge: • Our Process */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#146A80]/10 border border-[#146A80]/20 text-[#0D4A5A] text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D4A5A]" />
              {category.name}
            </div>

            {/* Cormorant Garamond Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-normal text-[#0D4A5A] leading-[1.15] tracking-tight">
              {category.heading}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base font-sans leading-relaxed">
              {category.tagline}
            </p>

            {/* 2-Column Checklist Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 pt-1">
              {category.checklist.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-[#146A80]/10 text-[#146A80] flex items-center justify-center shrink-0 border border-[#146A80]/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#146A80]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#14262B]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons & Sub-CTA */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0D4A5A] text-white font-sans font-bold text-sm hover:bg-[#E31C79] transition-all duration-200 shadow-md hover:shadow-ewa-glow-magenta hover:translate-x-0.5"
              >
                <span>Learn More & Consult</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="text-xs text-gray-500 font-sans">
                Your skin&apos;s transformation starts here –{" "}
                <Link
                  href="/contact"
                  className="font-bold underline text-[#E31C79] hover:text-[#B4145F] transition-colors"
                >
                  Book Today!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PROCEDURE MODAL ================= */}
      <AnimatePresence>
        {showProcedureModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200 space-y-6 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowProcedureModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <Badge variant="teal" size="sm">
                  Clinical Protocol Guide
                </Badge>
                <h3 className="text-2xl font-serif text-[#0D4A5A]">
                  {category.name}: Procedure Roadmap
                </h3>
                <p className="text-xs text-gray-500">
                  How our certified specialists carry out this medical treatment at Golf City, Lucknow.
                </p>
              </div>

              {/* 4 Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.procedureSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#F0F7F7] border border-[#146A80]/15 space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#0D4A5A] text-white text-[11px] font-mono font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                      <div className="font-bold text-sm text-[#0D4A5A]">
                        {step.title}
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed pl-8">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-100">
                <span className="text-xs text-gray-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#146A80]" /> 100% Doctor-Led Clinical Rigor
                </span>

                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setShowProcedureModal(false)}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    Close
                  </button>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#0D4A5A] text-white font-bold text-xs hover:bg-[#E31C79] transition-colors shadow-md text-center"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
