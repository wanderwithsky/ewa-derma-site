"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
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
  Building2,
  HeartHandshake,
  User,
  Mail,
  FileCheck,
  Sparkle,
} from "lucide-react";

export default function AboutPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ewa-mist text-ewa-ink flex flex-col selection:bg-ewa-magenta selection:text-white">
      <Header />

      {/* Hero with Clinical Dermatology & Aesthetics Showcase Card */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0D4A5A] via-[#1B4B5C] to-[#146A80] text-white pt-16 sm:pt-20 pb-20 sm:pb-24 border-b border-ewa-teal-bg-2/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: About Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <Badge variant="magenta" size="md">
                About Ewa Derma Clinic
              </Badge>
              <h1 className="heading-standard-white">
                Where Science <br />
                <span className="text-gradient-brand">Meets Artistry.</span>
              </h1>
              <p className="paragraph-standard-white text-base sm:text-lg max-w-xl">
                Experience the pinnacle of aesthetic care. From advanced laser treatments to surgical hair restoration, we redefine clinical beauty standards with precision, safety, and luxury in Lucknow.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact">
                  <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Book a Consultation
                  </Button>
                </Link>
                <Link href="/doctors">
                  <Button variant="outline" size="lg" className="text-white border-white/40 hover:bg-white/10 hover:text-white">
                    Meet Our Specialists
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Clinical Dermatology & Aesthetics Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative p-8 rounded-3xl glass-panel-dark border border-white/25 shadow-2xl flex flex-col items-center text-center max-w-sm w-full">
                <div className="w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 relative shadow-inner">
                  <Sparkles className="w-10 h-10 text-ewa-cyan" />
                  <div className="absolute inset-0 rounded-full border border-ewa-magenta/40 animate-pulse" />
                </div>

                <div className="space-y-2">
                  <Badge variant="magenta" size="sm">
                    Ewa Derma Clinic
                  </Badge>
                  <h3 className="subheading-standard-white">
                    Clinical Dermatology & Aesthetics
                  </h3>
                  <p className="paragraph-standard-white text-xs">
                    The Millennium Place, Near Lulu Mall, Golf City, Lucknow 226030
                  </p>
                </div>

                <div className="mt-6 w-full pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/80">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-ewa-cyan" /> 10:00 AM – 7:00 PM
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="font-bold text-ewa-magenta hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" /> {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beauty Redefined & Restored Section */}
      <Section variant="mist" spacing="lg">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Badge variant="teal">Our Philosophy</Badge>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-standard"
          >
            Beauty Redefined & Restored
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="paragraph-standard text-base sm:text-lg max-w-3xl mx-auto"
          >
            At Ewa Derma Clinic, we believe beauty is a science. Led by expert dermatologists, we combine state-of-the-art medical technology with artistic precision to deliver transformative results. Whether you are seeking advanced hair transplants, clinical skin rejuvenation, or body contouring, our premium treatments are tailored to reveal the most confident version of yourself.
          </motion.p>

          {/* 4 Markers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-2xl glass-card border-ewa-teal/20 text-center space-y-1 hover:scale-105 transition-transform duration-300">
              <Badge variant="teal" dot size="sm">FDA Approved Tech</Badge>
              <div className="text-[11px] text-ewa-ink/60">Certified Technology</div>
            </div>
            <div className="p-4 rounded-2xl glass-card border-ewa-green/30 text-center space-y-1 hover:scale-105 transition-transform duration-300">
              <Badge variant="hair" dot size="sm">Expert Specialists</Badge>
              <div className="text-[11px] text-ewa-ink/60">Certified Dermatologists</div>
            </div>
            <div className="p-4 rounded-2xl glass-card border-ewa-cyan/30 text-center space-y-1 hover:scale-105 transition-transform duration-300">
              <Badge variant="skin" dot size="sm">Personalized Care</Badge>
              <div className="text-[11px] text-ewa-ink/60">Tailored Protocols</div>
            </div>
            <div className="p-4 rounded-2xl glass-card border-ewa-magenta/20 text-center space-y-1 hover:scale-105 transition-transform duration-300">
              <Badge variant="magenta" dot size="sm">Hygiene & Safety</Badge>
              <div className="text-[11px] text-ewa-ink/60">International Standards</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision (Distinct Layout: Interactive Side-by-Side Comparison Cards) */}
      <Section variant="white" spacing="lg" className="border-y border-ewa-line">
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="skin">Foundational Values</Badge>
            <h2 className="heading-standard">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card variant="glass" accentBorder="cyan" className="p-8 space-y-5 h-full">
                <div className="w-12 h-12 rounded-2xl bg-ewa-cyan/15 flex items-center justify-center text-ewa-cyan">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="subheading-standard">
                  Mission
                </h3>
                <p className="paragraph-standard text-sm sm:text-base">
                  "To empower our clients by enhancing their natural beauty through ethical, safe, and scientifically proven treatments. We strive to provide a sanctuary where medical expertise meets aesthetic artistry."
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Card variant="glass" accentBorder="green" className="p-8 space-y-5 h-full">
                <div className="w-12 h-12 rounded-2xl bg-ewa-green/15 flex items-center justify-center text-ewa-green">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="subheading-standard">
                  Vision
                </h3>
                <p className="paragraph-standard text-sm sm:text-base">
                  "To be the most trusted and innovative dermatology clinic, redefining the standards of care and becoming the preferred destination for those seeking holistic skin and body transformation."
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Placeholders for Clinic Story, Doctor Credentials, & Accreditation Badges (Clearly marked) */}
      <Section variant="mist" spacing="lg">
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="teal">Clinic Credentials & Infrastructure</Badge>
            <h2 className="text-3xl font-display font-black text-ewa-teal-deep">
              Official Facility Documentation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder 1: Clinic Story */}
            <Card variant="glass" className="p-6 space-y-4 border-2 border-dashed border-ewa-teal/20">
              <div className="w-10 h-10 rounded-xl bg-ewa-teal/10 flex items-center justify-center text-ewa-teal">
                <Building2 className="w-5 h-5" />
              </div>
              <Badge variant="outline" size="sm">Coming Soon</Badge>
              <h3 className="font-display font-bold text-lg text-ewa-teal-deep">
                Clinic Heritage & Story
              </h3>
              <p className="text-xs text-ewa-ink/70 leading-relaxed">
                Detailed timeline of Ewa Derma Clinic’s clinical inception, advanced infrastructure, and milestone patient transformations.
              </p>
              <div className="text-[11px] font-mono text-ewa-teal font-semibold pt-2">
                [Phase 4 CMS Slot]
              </div>
            </Card>

            {/* Placeholder 2: Doctor Credentials */}
            <Card variant="glass" className="p-6 space-y-4 border-2 border-dashed border-ewa-green/30">
              <div className="w-10 h-10 rounded-xl bg-ewa-green/10 flex items-center justify-center text-ewa-green">
                <Award className="w-5 h-5" />
              </div>
              <Badge variant="hair" size="sm">Verification Pending</Badge>
              <h3 className="font-display font-bold text-lg text-ewa-teal-deep">
                Doctor Credentials Archive
              </h3>
              <p className="text-xs text-ewa-ink/70 leading-relaxed">
                Certified medical registration documentation, fellowship diplomas, and surgical certifications from ISHRS and MCI.
              </p>
              <div className="text-[11px] font-mono text-ewa-green font-semibold pt-2">
                [Client to Supply in Phase 4]
              </div>
            </Card>

            {/* Placeholder 3: Accreditation Badges */}
            <Card variant="glass" className="p-6 space-y-4 border-2 border-dashed border-ewa-magenta/25">
              <div className="w-10 h-10 rounded-xl bg-ewa-magenta/10 flex items-center justify-center text-ewa-magenta">
                <FileCheck className="w-5 h-5" />
              </div>
              <Badge variant="magenta" size="sm">Certifications</Badge>
              <h3 className="font-display font-bold text-lg text-ewa-teal-deep">
                Accreditation & Safety Badges
              </h3>
              <p className="text-xs text-ewa-ink/70 leading-relaxed">
                Official seals for US-FDA equipment approvals, ISO clinical sterilization standards, and bio-safety compliance badges.
              </p>
              <div className="text-[11px] font-mono text-ewa-magenta font-semibold pt-2">
                [Client to Supply in Phase 4]
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Get In Touch Contact Form */}
      <Section variant="white" spacing="lg" className="border-t border-ewa-line">
        <div className="max-w-3xl mx-auto">
          <Card variant="glass" className="p-8 sm:p-12 border-ewa-teal/20">
            <div className="text-center space-y-2 mb-8">
              <Badge variant="magenta">Direct Consultation</Badge>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-ewa-teal-deep">
                Get In Touch with Our Specialists
              </h2>
              <p className="text-xs sm:text-sm text-ewa-ink/70">
                Send us an inquiry or schedule an evaluation with our dermatologists in Lucknow.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-white border border-green-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                <h3 className="font-display font-bold text-lg text-ewa-teal-deep">
                  Inquiry Successfully Received
                </h3>
                <p className="text-xs sm:text-sm text-ewa-ink/75">
                  Our patient coordinator will contact you shortly at your provided phone/email.
                </p>
                <Button variant="outline" size="sm" onClick={() => setFormSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="Full Name"
                    placeholder="e.g. Rahul Singh"
                    leftIcon={<User className="w-4 h-4" />}
                    required
                  />
                  <Input
                    label="Phone Number"
                    placeholder="e.g. 9876543210"
                    leftIcon={<Phone className="w-4 h-4" />}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="Email Address"
                    placeholder="rahul@example.com"
                    leftIcon={<Mail className="w-4 h-4" />}
                    type="email"
                    required
                  />
                  <Select
                    label="Treatment Interest"
                    required
                    options={[
                      { value: "dermatology", label: "Clinical Dermatology & Acne" },
                      { value: "hair", label: "Hair Restoration & PRP" },
                      { value: "antiaging", label: "Anti-Aging & Aesthetics" },
                      { value: "body", label: "Body Shaping & Surgery" },
                      { value: "laser", label: "Laser & Intimate Care" },
                    ]}
                  />
                </div>

                <Textarea
                  label="Your Message or Questions"
                  placeholder="Share details about your skin, hair, or aesthetic goals..."
                  rows={4}
                  required
                />

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-ewa-ink/65 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-ewa-cyan" />
                    <span>DPDP Act 2023 compliant data processing.</span>
                  </div>
                  <Button variant="primary" size="lg" type="submit">
                    Send Inquiry
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </Section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
