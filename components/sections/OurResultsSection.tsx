"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GALLERY_CASES } from "@/lib/data";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

export const OurResultsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Transformations" },
    { id: "skin", label: "Acne & Texture" },
    { id: "antiaging", label: "Anti-Aging & Lasers" },
    { id: "hair", label: "Hair Restoration" },
  ];

  const filteredCases =
    activeCategory === "all"
      ? GALLERY_CASES
      : GALLERY_CASES.filter((c) => c.category === activeCategory);

  return (
    <Section variant="white" spacing="xl" containerSize="full" className="relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#146A80]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto space-y-12 relative z-10">
        {/* Header matching user's design reference */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          {/* Tag: • Our Result */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#146A80]/10 border border-[#146A80]/20 text-[#0D4A5A] text-xs font-semibold tracking-wider uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D4A5A] animate-pulse" />
            Our Result
          </motion.div>

          {/* Heading - Standard Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-standard"
          >
            Before & after: witness the power of dermatology
          </motion.h2>


          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-2 pt-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#0D4A5A] text-white shadow-sm scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Before & After Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 sm:p-5 rounded-[32px] border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <BeforeAfterSlider
                title={item.title}
                category={item.categoryLabel}
                timeline={item.timeline}
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                beforeLabel={item.beforeLabel || "Before"}
                afterLabel={item.afterLabel || "After"}
                details={item.details}
                initialPosition={index === 0 ? 50 : index === 1 ? 55 : 48}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
};
