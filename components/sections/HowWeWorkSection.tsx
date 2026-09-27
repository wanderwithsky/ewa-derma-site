"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CLINIC_INFO } from "@/lib/data";
import { Phone, ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Personalized Consultation",
    description:
      "This helps us create a customized treatment plan that aligns with your specific needs and expectations.",
  },
  {
    number: "02",
    title: "Tailored Treatment Plans",
    description:
      "Using medical-grade multi-spectrum diagnostic imaging, our specialists craft targeted protocols for your skin type.",
  },
  {
    number: "03",
    title: "Continuous Care & Follow-Up",
    description:
      "Comprehensive post-procedure monitoring, follow-up evaluations, and medical homecare guarantee lasting results.",
  },
];

export function HowWeWorkSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FBFDFD] relative overflow-hidden border-b border-ewa-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8 text-left"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ewa-teal/10 text-ewa-teal-deep text-xs font-display font-semibold tracking-wide border border-ewa-teal/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ewa-teal animate-pulse" />
              <span>How We work</span>
            </motion.div>

            {/* Title - Standard Heading */}
            <h2 className="heading-standard">
              How we work: a commitment <br className="hidden sm:inline" />
              to your skin health
            </h2>

            {/* Subtitle - Standard Paragraph */}
            <p className="paragraph-standard text-base sm:text-lg">
              We&apos;re dedicated to helping you achieve and maintain beautiful, healthy skin. Trust us to provide exceptional care tailored to you.
            </p>

            {/* Step Items */}
            <div className="space-y-8 pt-4">
              {STEPS.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="flex items-start gap-6 group"
                >
                  {/* Big Number */}
                  <div className="font-display text-4xl sm:text-5xl font-light text-ewa-teal-deep tracking-tight shrink-0 select-none group-hover:text-ewa-magenta transition-colors">
                    {step.number}
                  </div>

                  {/* Step Description */}
                  <div className="space-y-1.5 pt-1">
                    <h3 className="subheading-standard group-hover:text-ewa-cyan transition-colors">
                      {step.title}
                    </h3>
                    <p className="paragraph-standard">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Hero Image with Floating Help Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full h-[480px] sm:h-[560px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/images/how-we-work.png"
                  alt="Doctor consultation at Ewa Derma Clinic Lucknow"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top brightness-[0.98] group-hover:scale-105 transition-transform duration-700"
                  priority
                />

              {/* Aesthetic Dark Teal Gradient Overlay at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C33]/95 via-[#0B2C33]/25 to-transparent pointer-events-none" />

              {/* Floating Bottom Card with Pop Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-6 left-6 right-6 p-6 sm:p-7 rounded-[24px] bg-[#0D4A5A]/90 backdrop-blur-md border border-white/20 text-white shadow-2xl space-y-4"
              >
                <h4 className="subheading-standard-white">
                  Have Questions? We&apos;re Here to Help You!
                </h4>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white text-ewa-teal-deep font-display font-bold text-sm hover:bg-ewa-magenta hover:text-white transition-all duration-300 shadow-md group active:scale-95"
                  >
                    <div className="w-6 h-6 rounded-full bg-ewa-teal-deep text-white group-hover:bg-white group-hover:text-ewa-magenta flex items-center justify-center transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span>{CLINIC_INFO.phone}</span>
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white underline underline-offset-4"
                  >
                    <span>Request Callback</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
