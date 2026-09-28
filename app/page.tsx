"use client";

import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CircularEmblem } from "@/components/ui/CircularEmblem";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ServicesCarouselSection } from "@/components/sections/ServicesCarouselSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { OurBenefitsSection } from "@/components/sections/OurBenefitsSection";
import { OurResultsSection } from "@/components/sections/OurResultsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { GetInTouchSection } from "@/components/sections/GetInTouchSection";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { CLINIC_INFO } from "@/lib/data";
import {
  Calendar,
  Sparkles,
  ShieldCheck,
  Award,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Sparkle,
} from "lucide-react";

export default function HomePage() {
  const welcomeRef = React.useRef(null);
  const isWelcomeInView = useInView(welcomeRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-ewa-ink flex flex-col selection:bg-ewa-magenta selection:text-white">
      <Header />

      {/* 1. HERO SECTION (Redesigned Editorial Luxury Aesthetics & Organic Curves) */}
      <HeroSection />

      {/* 2. WHY CHOOSE US SECTION (Reference 2: Overlapping Cards + Contact Badge + Stats) */}
      <WhyChooseUsSection />

      {/* 3. OUR SERVICES SECTION (Reference 1: Horizontal Carousel Slides + Luxury Photography) */}
      <ServicesCarouselSection />

      {/* 4. HOW WE WORK SECTION (Reference 3: 01, 02, 03 Process Steps + Question Call Box) */}
      <HowWeWorkSection />

      {/* 5. OUR BENEFITS SECTION (Reference 4: Luxury Teal Background + 3-Column Grid + Arch Portrait of Dr. Ana) */}
      <OurBenefitsSection />

      {/* 6. OUR RESULT SECTION (Clinical Before & After Interactive Transformations) */}
      <OurResultsSection />

      {/* 7. TESTIMONIALS SECTION (Continuous Moving Verified Google Reviews) */}
      <Section variant="mist" spacing="xl" className="border-t border-[#146A80]/15">
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Badge variant="magenta">Verified Patient Stories</Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-standard"
            >
              Real Client Reviews & Testimonials
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="paragraph-standard text-sm sm:text-base max-w-2xl mx-auto"
            >
              Read verified Google reviews from patients who experienced transformative dermatology, hair restoration, and aesthetic care at our Golf City clinic.
            </motion.p>
          </div>

          <TestimonialCarousel />
        </div>
      </Section>

      {/* 8. FAQS SECTION (Interactive Accordion & Clinical Answers) */}
      <FaqSection />

      {/* 9. CLOSING CTA BAND ("READY TO GLOW?") */}
      <Section variant="dark-teal" spacing="xl" className="border-t border-ewa-teal-bg-2/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Badge variant="magenta">Begin Your Transformation</Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-standard-white"
          >
            Ready to Glow?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="paragraph-standard-white text-base sm:text-lg max-w-3xl mx-auto"
          >
            Your journey to flawless skin and restored confidence begins here. We invite you to visit our clinic to experience our world-class facilities firsthand. Step into a space of comfort and luxury where our experts are ready to listen to your needs. Consultations are tailored to your unique skin type and aesthetic goals. Let us redefine your beauty standards.
          </motion.p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                variant="primary"
                size="xl"
                magnetic={true}
                leftIcon={<Calendar className="w-5 h-5" />}
                asDiv={true}
              >
                Book a Consultation
              </Button>
            </Link>

            <a href={`tel:${CLINIC_INFO.phone}`}>
              <Button
                variant="outline"
                size="xl"
                className="text-white border-white/40 hover:bg-white/10 hover:text-white"
                leftIcon={<Phone className="w-5 h-5" />}
                asDiv={true}
              >
                Call {CLINIC_INFO.phone}
              </Button>
            </a>
          </div>

          <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-ewa-cyan" /> The Millennium Place, Golf City, Lucknow
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-ewa-green" /> Mon–Sun: 10:00 AM – 7:00 PM
            </span>
          </div>
        </div>
      </Section>

      {/* 10. GET IN TOUCH WITH OUR SPECIALISTS (Interactive Booking & Direct Consultation Form) */}
      <GetInTouchSection />

      <Footer />
      <FloatingActions />
    </div>
  );
}
