"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Activity,
  Zap,
  ShieldCheck,
  Feather,
  ArrowUpRight,
} from "lucide-react";

export interface ServiceSlide {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  slug: string;
}

const SERVICES: ServiceSlide[] = [
  {
    id: "acne-treatment",
    title: "Acne Treatment",
    category: "Clinical Dermatology",
    description: "From preventive care to specialized treatments, our wide range of clinical protocols restores skin clarity.",
    image: "/images/services/service_skin.jpg",
    icon: <Sparkles className="w-5 h-5 text-ewa-cyan" />,
    slug: "acne-and-scar-treatment",
  },
  {
    id: "skin-tightening",
    title: "Skin Tightening",
    category: "Anti-Aging & Aesthetics",
    description: "Non-surgical RF and ultrasound therapies designed to lift, firm, and stimulate natural collagen synthesis.",
    image: "/images/services/service_antiaging.jpg",
    icon: <Layers className="w-5 h-5 text-ewa-magenta" />,
    slug: "botox-injections",
  },
  {
    id: "scar-revision",
    title: "Scar Revision",
    category: "Laser Surgery",
    description: "Multi-modal fractional lasers and subcision to smooth textural irregularities and post-acne scarring.",
    image: "/images/gallery/Screenshot 2026-09-17 150413.png",
    icon: <Activity className="w-5 h-5 text-ewa-green" />,
    slug: "acne-and-scar-treatment",
  },
  {
    id: "hair-restoration",
    title: "Hair Restoration & PRP",
    category: "Trichology",
    description: "Advanced GFC, PRP, and precision FUE follicular unit extraction for natural, dense hair regrowth.",
    image: "/images/services/service_hair.jpg",
    icon: <Zap className="w-5 h-5 text-ewa-green" />,
    slug: "hair-transplant",
  },
  {
    id: "laser-aesthetics",
    title: "Laser Hair Removal",
    category: "Laser Aesthetics",
    description: "Painless triple-wavelength laser hair reduction suitable for all Fitzpatrick skin tones with zero downtime.",
    image: "/images/services/service_laser.jpg",
    icon: <ShieldCheck className="w-5 h-5 text-ewa-cyan" />,
    slug: "laser-hair-removal",
  },
  {
    id: "chemical-peels",
    title: "Chemical Peels & Glow",
    category: "Medi-Facials",
    description: "Medical-grade customized chemical peels targeting deep melasma, hyperpigmentation, and sun damage.",
    image: "/images/services/service_body.jpg",
    icon: <Feather className="w-5 h-5 text-ewa-magenta" />,
    slug: "acne-and-scar-treatment",
  },
];

export function ServicesCarouselSection() {

  return (
    <section className="py-20 sm:py-28 bg-[#FBFDFD] relative overflow-hidden border-b border-ewa-line">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ewa-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ewa-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ewa-teal/10 text-ewa-teal-deep text-xs font-display font-semibold tracking-wide border border-ewa-teal/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ewa-teal animate-pulse" />
            <span>Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-standard"
          >
            Comprehensive dermatology services <br className="hidden sm:inline" />
            for every skin need
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="paragraph-standard text-base sm:text-lg max-w-2xl mx-auto"
          >
            From preventive care to specialized treatments, our wide range of services is designed to support your health at every stage.
          </motion.p>
        </div>
      </div>

      {/* Full-Width Infinite Moving Marquee Stream */}
      <div className="relative w-full overflow-hidden py-4 pause-marquee">


        {/* Moving Cards Track */}
        <motion.div 
          className="flex w-max py-4 hover:[animation-play-state:paused]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {/* First Set */}
          <div className="flex shrink-0 gap-6 px-3">
            {SERVICES.map((service, index) => (
              <div
                key={`${service.id}-${index}-1`}
                className="flex-shrink-0 w-[290px] sm:w-[350px] lg:w-[370px]"
              >
                <Link
                  href={`/services/${service.slug}`}
                  prefetch={true}
                  className="block relative h-[440px] rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group/card border border-ewa-line/60 bg-ewa-teal-deep hover:-translate-y-2"
                >
                  {/* Background Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out brightness-[0.92]"
                  />

                  {/* Aesthetic Luxury Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C33]/95 via-[#0B2C33]/45 to-transparent pointer-events-none" />

                  {/* Top Category Tag + Direct Link Arrow */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-display font-semibold text-white/90 bg-black/30 backdrop-blur-md border border-white/20">
                      {service.category}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-0 -translate-x-2 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-3">
                    {/* Icon Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center border border-white/60 group-hover/card:bg-white transition-colors">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-snug group-hover/card:text-ewa-cyan transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/80 line-clamp-2 font-sans leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Second Set (Duplicate for seamless looping) */}
          <div className="flex shrink-0 gap-6 px-3" aria-hidden="true">
            {SERVICES.map((service, index) => (
              <div
                key={`${service.id}-${index}-2`}
                className="flex-shrink-0 w-[290px] sm:w-[350px] lg:w-[370px]"
              >
                <Link
                  href={`/services/${service.slug}`}
                  prefetch={true}
                  className="block relative h-[440px] rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group/card border border-ewa-line/60 bg-ewa-teal-deep hover:-translate-y-2"
                >
                  {/* Background Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out brightness-[0.92]"
                  />

                  {/* Aesthetic Luxury Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C33]/95 via-[#0B2C33]/45 to-transparent pointer-events-none" />

                  {/* Top Category Tag + Direct Link Arrow */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-display font-semibold text-white/90 bg-black/30 backdrop-blur-md border border-white/20">
                      {service.category}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-0 -translate-x-2 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-3">
                    {/* Icon Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center border border-white/60 group-hover/card:bg-white transition-colors">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-snug group-hover/card:text-ewa-cyan transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/80 line-clamp-2 font-sans leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Subtle Interaction Indicator */}
      <div className="max-w-7xl mx-auto px-4 text-center mt-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ewa-mist text-ewa-ink/70 text-xs font-sans font-medium border border-ewa-line">
          <span className="w-2 h-2 rounded-full bg-ewa-cyan animate-ping" />
          <span>Continuous Moving Showcase · Hover any card to pause & explore</span>
        </div>
      </div>
    </section>
  );
}
