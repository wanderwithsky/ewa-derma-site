"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#0B2C33]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-[20px] sm:rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[85vh]"
          >
            {/* Header */}
            <div className="px-5 py-5 sm:px-10 sm:py-8 border-b border-ewa-line relative shrink-0 bg-[#FBFDFD]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 rounded-full bg-ewa-mist text-ewa-ink/70 hover:bg-ewa-magenta hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="pr-10 sm:pr-12">
                <span className="inline-block px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-ewa-teal/10 text-ewa-teal-deep text-[10px] sm:text-xs font-display font-semibold tracking-wide mb-2 sm:mb-3 border border-ewa-teal/20">
                  SEND US A MESSAGE
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#0D4A5A] mb-1.5 sm:mb-2 tracking-tight">
                  We&apos;re Here to Help
                </h2>
                <p className="text-xs sm:text-base text-ewa-ink/80 font-sans">
                  Tell us about your skin goals and we&apos;ll reach out with tailored next steps.
                </p>
              </div>
            </div>

            {/* Form Body - Scrollable (Scrollbar Hidden) */}
            <div className="p-5 sm:p-10 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-ewa-teal-deep">Full Name *</label>
                    <input required type="text" placeholder="Enter your full name" className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all text-ewa-ink placeholder:text-ewa-ink/40" />
                  </div>
                  
                  {/* Age */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-ewa-teal-deep">Age *</label>
                    <input required type="number" min="1" placeholder="Your age" className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all text-ewa-ink placeholder:text-ewa-ink/40" />
                  </div>

                  {/* Gender */}
                  <div className="space-y-2 relative">
                    <label className="block text-sm font-semibold text-ewa-teal-deep">Gender (Optional)</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all appearance-none cursor-pointer text-ewa-ink">
                        <option value="" disabled>Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ewa-ink/40 pointer-events-none" />
                    </div>
                  </div>
                  
                  {/* City & Locality */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-ewa-teal-deep">City & Locality *</label>
                    <input required type="text" placeholder="e.g. Lucknow – Gomti Nagar" className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all text-ewa-ink placeholder:text-ewa-ink/40" />
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-ewa-teal-deep">Mobile Number *</label>
                    <input required type="tel" pattern="[0-9]{10}" placeholder="10-digit mobile" className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all text-ewa-ink placeholder:text-ewa-ink/40" />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-ewa-teal-deep">Email (Optional)</label>
                    <input type="email" placeholder="email@example.com" className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all text-ewa-ink placeholder:text-ewa-ink/40" />
                  </div>

                  {/* Concern */}
                  <div className="space-y-2 sm:col-span-2 relative">
                    <label className="block text-sm font-semibold text-ewa-teal-deep">What brings you to EWA Derma? *</label>
                    <div className="relative">
                      <select required defaultValue="" className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all appearance-none cursor-pointer text-ewa-ink">
                        <option value="" disabled>Select a concern</option>
                        <option value="Acne">Acne</option>
                        <option value="Pigmentation">Pigmentation</option>
                        <option value="Hair Fall">Hair Fall</option>
                        <option value="Hair Restoration">Hair Restoration</option>
                        <option value="Skin Rejuvenation">Skin Rejuvenation</option>
                        <option value="Anti-Aging">Anti-Aging</option>
                        <option value="Laser Treatment">Laser Treatment</option>
                        <option value="Cosmetic Dermatology">Cosmetic Dermatology</option>
                        <option value="General Consultation">General Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ewa-ink/40 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-ewa-magenta hover:bg-[#c20b4c] text-white py-4 rounded-xl font-display font-bold tracking-wide text-base shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                  >
                    SEND ENQUIRY
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
