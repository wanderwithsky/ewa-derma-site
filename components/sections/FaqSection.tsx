"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowRight, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "What types of treatments do you offer?",
    answer:
      "We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc.",
  },
  {
    id: "faq-2",
    question: "Do I need a consultation before getting treatment?",
    answer:
      "Yes, an initial diagnostic consultation with our certified dermatologists is essential to evaluate your skin condition, discuss your medical history, and formulate a personalized medical protocol.",
  },
  {
    id: "faq-3",
    question: "Are your treatments suitable for all skin types?",
    answer:
      "Absolutely. Our US-FDA approved lasers and clinical protocols are specifically calibrated for diverse Indian skin tones (Fitzpatrick skin types III to V) with integrated contact cooling to prevent hyperpigmentation.",
  },
  {
    id: "faq-4",
    question: "Do you offer cosmetic dermatology services?",
    answer:
      "Yes, we specialize in high-end aesthetic medicine including Botox injections, dermal fillers, Vampire Facelifts (PRP/GFC), fractional laser resurfacing, chemical peels, and non-surgical skin tightening.",
  },
  {
    id: "faq-5",
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit involves a comprehensive digital skin/scalp assessment, in-depth root-cause analysis by our senior doctor, clear explanation of recommended procedures, and transparent pricing with no hidden costs.",
  },
  {
    id: "faq-6",
    question: "How do I book an appointment or consult the doctor?",
    answer:
      "You can book seamlessly through our online consultation form, contact us directly on WhatsApp, or call our clinic desk in Golf City, Lucknow. We are open Monday through Sunday from 10:00 AM to 7:00 PM.",
  },
];

// Botanical Leaf SVG Ornament
const BotanicalLeafLeft = () => (
  <svg
    className="absolute top-4 left-4 w-44 h-44 text-white/10 pointer-events-none select-none"
    viewBox="0 0 200 200"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M10 190 Q 70 120, 150 50 Q 180 20, 190 10" />
    <path d="M70 120 Q 90 90, 85 70 Q 70 85, 70 120" />
    <path d="M110 85 Q 140 60, 135 40 Q 115 55, 110 85" />
    <path d="M150 50 Q 180 35, 175 15 Q 155 30, 150 50" />
    <path d="M50 145 Q 25 130, 30 110 Q 50 125, 50 145" />
    <path d="M90 105 Q 65 90, 70 70 Q 90 85, 90 105" />
  </svg>
);

const BotanicalLeafRight = () => (
  <svg
    className="absolute bottom-4 right-4 w-48 h-48 text-white/10 pointer-events-none select-none rotate-180"
    viewBox="0 0 200 200"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M10 190 Q 70 120, 150 50 Q 180 20, 190 10" />
    <path d="M70 120 Q 90 90, 85 70 Q 70 85, 70 120" />
    <path d="M110 85 Q 140 60, 135 40 Q 115 55, 110 85" />
    <path d="M150 50 Q 180 35, 175 15 Q 155 30, 150 50" />
    <path d="M50 145 Q 25 130, 30 110 Q 50 125, 50 145" />
    <path d="M90 105 Q 65 90, 70 70 Q 90 85, 90 105" />
  </svg>
);

export const FaqSection: React.FC = () => {
  // First item open by default matching the reference screenshot
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ewa-mist">
      <div className="max-w-7xl mx-auto">
        {/* Main Container styled in Ewa Derma's signature Deep Teal palette */}
        <div className="relative rounded-[32px] sm:rounded-[44px] bg-gradient-to-br from-[#0D4A5A] via-[#146A80] to-[#1B4B5C] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-ewa-teal-bg-2/30">
          {/* Subtle Botanical Vector Illustrations */}
          <BotanicalLeafLeft />
          <BotanicalLeafRight />

          {/* Ambient Ewa Derma Glow */}
          <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-ewa-magenta/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-ewa-cyan/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            {/* Left Column (Headings & CTA) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6 text-left"
            >
              {/* Badge: • Frequently Asked Questions */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-sans font-medium tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-ewa-magenta animate-pulse" />
                Frequently Asked Questions
              </motion.div>

              {/* Serif Headline - Standard Heading White */}
              <h2 className="heading-standard-white">
                Frequently asked question <br className="hidden sm:inline" />
                find out more
              </h2>

              {/* Description - Standard Paragraph White */}
              <p className="paragraph-standard-white text-sm sm:text-base max-w-md">
                Have questions about our dermatology services? Our &apos;Frequently Asked Questions&apos; section provides clarity on treatments, consultations, and medical safety.
              </p>

              {/* View All FAQs Pill Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0D4A5A] font-sans font-bold text-sm hover:bg-[#E31C79] hover:text-white transition-all duration-200 shadow-lg hover:shadow-ewa-glow-magenta hover:translate-x-0.5 active:scale-95"
                >
                  <span>View All FAQs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column (Interactive Accordion List) */}
            <div className="lg:col-span-7 divide-y divide-white/15">
              {FAQS_DATA.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                    >
                      <h3 className="text-base sm:text-lg font-sans font-medium text-white group-hover:text-ewa-cyan transition-colors">
                        {item.question}
                      </h3>
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shrink-0",
                          isOpen
                            ? "bg-ewa-magenta text-white shadow-md"
                            : "bg-white/10 text-white/80 group-hover:bg-white/20 group-hover:text-white"
                        )}
                      >
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 pr-6 text-sm text-white/85 font-sans leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
