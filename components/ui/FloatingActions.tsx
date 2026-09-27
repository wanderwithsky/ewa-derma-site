"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export const FloatingActions: React.FC = () => {
  const phoneNumber = "+919120854977";
  const whatsappNumber = "+919120854977";
  const whatsappMessage = encodeURIComponent(
    "Hello Ewa Derma Clinic! I would like to inquire about booking a consultation in Lucknow."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Click-to-Call Floating Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2.5 bg-ewa-teal-deep text-white px-4 py-2.5 rounded-full shadow-ewa-lg border border-white/20 hover:bg-ewa-teal transition-colors group"
        aria-label="Call Ewa Derma Clinic"
      >
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
          <Phone className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
        </div>
        <span className="font-display font-semibold text-xs pr-1 hidden sm:inline-block">
          +91 9120854977
        </span>
      </motion.a>

      {/* WhatsApp Floating Action Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-ewa-glow-magenta hover:bg-[#20ba5a] transition-all group border border-white/30"
        aria-label="Chat on WhatsApp with Ewa Derma Clinic"
      >
        {/* Pulsing radar ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        
        <MessageCircle className="w-5 h-5 text-white shrink-0 fill-white" />
        <span className="font-display font-bold text-xs tracking-wide pr-1">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
};
