"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { ServiceCardAlternating } from "@/components/sections/ServiceCardAlternating";
import { SERVICE_CATEGORIES } from "@/lib/data";
import {
  Calendar,
  Sparkles,
  ShieldCheck,
  Award,
  ArrowRight,
  Phone,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all"
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((c) => c.id === activeCategory);

  const tabItems = [
    { id: "all", label: "All Treatments", count: 38 },
    { id: "skin", label: "Clinical Dermatology", count: 8 },
    { id: "antiaging", label: "Anti-Aging & Aesthetics", count: 9 },
    { id: "hair", label: "Hair Restoration", count: 5 },
    { id: "body", label: "Body Shaping", count: 8 },
    { id: "laser", label: "Laser & Intimate Care", count: 8 },
  ];

  return (
    <div className="min-h-screen bg-ewa-mist text-ewa-ink flex flex-col selection:bg-ewa-magenta selection:text-white">
      <Header />

      {/* Hero Section */}
      <Section variant="dark-teal" spacing="lg" className="border-b border-ewa-teal-bg-2/30 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-ewa-cyan/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="magenta">Doctor-Led Excellence</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-standard-white"
          >
            Our Clinical Treatments & Protocols
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="paragraph-standard-white text-base sm:text-lg max-w-2xl mx-auto"
          >
            Discover our full spectrum of specialized dermatology, aesthetic medicine, hair restoration, and laser procedures in Golf City, Lucknow.
          </motion.p>
        </div>
      </Section>

      {/* Filter Tabs with tactile sliding indicator */}
      <Section variant="mist" spacing="sm">
        <div className="flex justify-center overflow-x-auto pb-2">
          <Tabs
            items={tabItems}
            activeId={activeCategory}
            onChange={setActiveCategory}
            variant="glass"
          />
        </div>
      </Section>

      {/* Alternating Left-to-Right Service Cards Section */}
      <Section variant="mist" spacing="md">
        <div className="space-y-12 sm:space-y-16 max-w-7xl mx-auto">
          {filteredCategories.map((category, index) => (
            <ServiceCardAlternating
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Personalized Assessment Bottom CTA */}
      <Section variant="white" spacing="xl" className="relative overflow-hidden border-t border-[#146A80]/10 bg-gradient-to-b from-white to-[#F9FCFC]">
        {/* Subtle Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Subtle soft teal gradient blob */}
          <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-[#146A80]/[0.03] rounded-full blur-[80px]" />
          
          {/* Very subtle pink/magenta glow blob */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E31C79]/[0.03] rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />

          {/* Minimal abstract organic curves / decorative line patterns */}
          <svg className="absolute top-0 right-0 w-[800px] h-[800px] text-[#146A80]/[0.02] -translate-y-1/4 translate-x-1/3 rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.15">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="35" />
            <circle cx="50" cy="50" r="25" />
            <path d="M 0 50 Q 50 10 100 50 T 200 50" strokeDasharray="1 2" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Badge variant="magenta">Personalized Assessment</Badge>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-standard"
          >
            Unsure Which Treatment Is Right for You?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg max-w-2xl mx-auto text-[#0E2A32]/85 font-sans leading-relaxed"
          >
            Our certified dermatologists in Lucknow provide in-depth skin analysis and trichoscopy examinations to design a treatment protocol tailored to your unique biology.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="xl"
                className="w-full sm:w-auto shadow-xl hover:shadow-2xl"
                leftIcon={<Calendar className="w-5 h-5" />}
              >
                Book Doctor Consultation
              </Button>
            </Link>
            <a href="tel:+919120854977" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto text-[#0D4A5A] border-[#146A80]/30 hover:bg-[#146A80]/5 hover:border-[#146A80]/50 bg-white/50 backdrop-blur-sm"
                leftIcon={<Phone className="w-5 h-5" />}
              >
                Call +91 9120854977
              </Button>
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer />
      <FloatingActions />
    </div>
  );
}

