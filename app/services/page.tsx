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
      <Section variant="dark-teal" spacing="xl" className="border-t border-ewa-teal-bg-2/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="magenta">Personalized Assessment</Badge>
          <h2 className="heading-standard-white">
            Unsure Which Treatment Is Right for You?
          </h2>
          <p className="paragraph-standard-white text-sm sm:text-base max-w-2xl mx-auto">
            Our certified dermatologists in Lucknow provide in-depth skin analysis and trichoscopy examinations to design a treatment protocol tailored to your unique biology.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                variant="primary"
                size="xl"
                leftIcon={<Calendar className="w-5 h-5" />}
              >
                Book Doctor Consultation
              </Button>
            </Link>
            <a href="tel:+919120854977">
              <Button
                variant="outline"
                size="xl"
                className="text-white border-white/40 hover:bg-white/10 hover:text-white"
                leftIcon={<Phone className="w-5 h-5" />}
              >
                Call +91 9120854977
              </Button>
            </a>
          </div>
        </div>
      </Section>

      <Footer />
      <FloatingActions />
    </div>
  );
}

