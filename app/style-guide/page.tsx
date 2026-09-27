"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CircularEmblem } from "@/components/ui/CircularEmblem";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Tabs } from "@/components/ui/Tabs";
import { Section } from "@/components/ui/Section";
import { FloatingActions } from "@/components/ui/FloatingActions";
import {
  Calendar,
  Sparkles,
  ShieldCheck,
  Award,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  User,
  Mail,
  Sliders,
  Eye,
  Check,
  AlertCircle,
  Copy,
  Layers,
  Sparkle,
} from "lucide-react";

// Utility for contrast calculation
function getLuminance(hex: string): number {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;
  const a = [r, g, b].map((v) =>
    v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  );
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return Number(((brightest + 0.05) / (darkest + 0.05)).toFixed(2));
}

export default function StyleGuidePage() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [btnLoading, setBtnLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [drawRing, setDrawRing] = useState(true);

  const colors = [
    {
      name: "--ewa-teal",
      hex: "#146A80",
      role: "Primary Brand Color",
      desc: "Used for navigation, trust markers, headers, and anchoring elements.",
      tags: ["Header", "Trust", "Primary"],
    },
    {
      name: "--ewa-teal-deep",
      hex: "#0D4A5A",
      role: "Deep Anchor Teal",
      desc: "Darker teal for footer, depth layers, and active hover states.",
      tags: ["Footer", "Depth", "Dark BG"],
    },
    {
      name: "--ewa-teal-bg",
      hex: "#1B4B5C",
      role: "Gradient Base Stop",
      desc: "Base backdrop tone matching the official 3D logo's gradient depth.",
      tags: ["Hero Backdrop", "Atmosphere"],
    },
    {
      name: "--ewa-teal-bg-2",
      hex: "#2B6E86",
      role: "Gradient Lighter Stop",
      desc: "Secondary gradient stop for subtle dimensional lighting and highlights.",
      tags: ["Lighting", "Bevels"],
    },
    {
      name: "--ewa-magenta",
      hex: "#E31C79",
      role: "High-Signal Conversion CTA",
      desc: "Reserved almost exclusively for Book Consultation, Call, and WhatsApp triggers.",
      tags: ["Primary CTA", "High Signal", "Conversion"],
    },
    {
      name: "--ewa-magenta-deep",
      hex: "#B4145F",
      role: "Magenta Active/Hover",
      desc: "Rich pressed and hover state for the primary CTA buttons.",
      tags: ["Active", "Hover State"],
    },
    {
      name: "--ewa-green",
      hex: "#4FAE7C",
      role: "Hair Restoration Accent",
      desc: "Echoes the male profile silhouette in the logo; color-codes hair transplant content.",
      tags: ["Hair", "PRP", "Transplants"],
    },
    {
      name: "--ewa-cyan",
      hex: "#2E93A8",
      role: "Clinical Skin Accent",
      desc: "Echoes the female profile silhouette in the logo; color-codes skin treatments.",
      tags: ["Skin", "Lasers", "Rejuvenation"],
    },
    {
      name: "--ewa-ink",
      hex: "#0E2A32",
      role: "Deep Body Text",
      desc: "Ultra-high-contrast charcoal teal for crisp readability on light backgrounds.",
      tags: ["Body Text", "Headings"],
    },
    {
      name: "--ewa-mist",
      hex: "#F2F7F8",
      role: "Crisp Background Wash",
      desc: "Light, clean spa-like canvas tone that prevents harsh pure-white glare.",
      tags: ["Canvas", "Light Sections"],
    },
  ];

  const currentColor = selectedColor || colors[0];
  const contrastWithWhite = getContrastRatio(currentColor.hex, "#FFFFFF");
  const contrastWithInk = getContrastRatio(currentColor.hex, "#0E2A32");

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-ewa-mist text-ewa-ink flex flex-col selection:bg-ewa-magenta selection:text-white">
      {/* Live Header Shell Preview */}
      <Header />

      {/* Style Guide Hero Banner */}
      <Section variant="dark-teal" spacing="lg" className="border-b border-ewa-teal-bg-2/40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ewa-magenta/20 border border-ewa-magenta/40 text-white text-xs font-display font-semibold tracking-wider uppercase">
              <Sparkle className="w-3.5 h-3.5 text-ewa-magenta fill-ewa-magenta" />
              Phase 1 Deliverable — Foundation & Design System
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white leading-tight">
              Where Science <br className="hidden sm:inline" />
              <span className="text-gradient-brand">Meets Artistry.</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Living design system & interactive component specification for{" "}
              <strong>Ewa Derma Clinic</strong> in Lucknow, India. Built with tokenized brand colors, Sora + Manrope typography, accessible form controls, and fluid micro-motion.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={() => {
                  const el = document.getElementById("palette-section");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Interactive Palette
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white/40 hover:bg-white/10 hover:text-white"
                onClick={() => {
                  const el = document.getElementById("components-section");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Test Components
              </Button>
            </div>
          </motion.div>

          {/* Signature Orchestrated Motion Moment (Emblem load animation) */}
          <motion.div
            initial={prefersReducedMotion ? {} : { scale: 0.6, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="relative shrink-0 flex flex-col items-center"
          >
            <CircularEmblem
              size="xl"
              icon="logo"
              label="• WHERE SCIENCE MEETS ARTISTRY • LUCKNOW •"
              animatedRing={true}
            />
            <span className="text-[11px] font-mono text-white/70 mt-3 uppercase tracking-widest">
              Dimensional Logo Emblem
            </span>
          </motion.div>
        </div>
      </Section>

      {/* Main Content Area */}
      <main className="flex-1 py-16 space-y-20">
        {/* SECTION 1: INTERACTIVE COLOR PALETTE & CONTRAST CHECKER */}
        <Section id="palette-section" variant="mist" spacing="none">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-ewa-line pb-4">
              <div>
                <div className="flex items-center gap-2 text-ewa-teal font-display font-bold text-xs uppercase tracking-widest">
                  <span className="w-2.5 h-2.5 rounded-full bg-ewa-teal" />
                  Source of Truth
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-ewa-teal-deep mt-1">
                  1. Official Logo Color Tokens
                </h2>
              </div>
              <p className="text-xs text-ewa-ink/60 max-w-sm sm:text-right">
                Click any swatch to inspect usage guidelines, copy hex values, and check live WCAG 2.1 contrast ratios.
              </p>
            </div>

            {/* Swatch Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
              {colors.map((c) => {
                const isSelected = currentColor.name === c.name;
                return (
                  <motion.div
                    key={c.name}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedColor(c)}
                    className={cn(
                      "p-4 rounded-2xl cursor-pointer flex flex-col justify-between h-36 relative transition-all shadow-ewa-sm",
                      isSelected
                        ? "ring-4 ring-ewa-magenta shadow-ewa-lg scale-[1.03]"
                        : "hover:shadow-md"
                    )}
                    style={{ backgroundColor: c.hex }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-mono font-bold text-white drop-shadow-md">
                        {c.hex}
                      </span>
                      {isSelected && (
                        <span className="w-5 h-5 rounded-full bg-white text-ewa-magenta flex items-center justify-center shadow">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs text-white drop-shadow-md">
                        {c.name}
                      </div>
                      <div className="text-[10px] text-white/90 font-medium truncate drop-shadow-sm mt-0.5">
                        {c.role}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Live Inspector & Contrast Ratio Check Card */}
            <Card variant="glass" className="p-6 sm:p-8 mt-6 border-ewa-teal/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Color Overview */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl shadow-md border-2 border-white"
                      style={{ backgroundColor: currentColor.hex }}
                    />
                    <div>
                      <h3 className="font-display font-black text-xl text-ewa-teal-deep">
                        {currentColor.name}
                      </h3>
                      <button
                        onClick={() => copyToClipboard(currentColor.hex)}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-ewa-magenta hover:underline font-semibold"
                      >
                        {currentColor.hex}
                        {copiedHex === currentColor.hex ? (
                          <span className="text-green-600 text-[11px] font-bold">✓ Copied!</span>
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-ewa-ink/80 leading-relaxed">
                    {currentColor.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {currentColor.tags.map((t: string) => (
                      <span
                        key={t}
                        className="text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full bg-ewa-teal/10 text-ewa-teal"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* WCAG Live Contrast Test with White Text */}
                <div
                  className="p-5 rounded-2xl flex flex-col justify-between h-36 shadow-inner text-white relative overflow-hidden"
                  style={{ backgroundColor: currentColor.hex }}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase tracking-wider">White Text Preview</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/30 backdrop-blur-sm">
                      {contrastWithWhite}:1
                    </span>
                  </div>
                  <p className="text-sm font-semibold">Where Science Meets Artistry</p>
                  <div className="flex items-center gap-2 text-[11px] font-bold">
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded",
                        contrastWithWhite >= 4.5 ? "bg-green-600 text-white" : "bg-red-500 text-white"
                      )}
                    >
                      {contrastWithWhite >= 4.5 ? "✓ WCAG AA Pass" : "✗ Fails for Body (<4.5:1)"}
                    </span>
                    {contrastWithWhite >= 3.0 && contrastWithWhite < 4.5 && (
                      <span className="text-[10px] opacity-85">Passes for Large Text / UI</span>
                    )}
                  </div>
                </div>

                {/* WCAG Live Contrast Test with Ink Text */}
                <div
                  className="p-5 rounded-2xl flex flex-col justify-between h-36 shadow-inner text-ewa-ink relative overflow-hidden"
                  style={{ backgroundColor: currentColor.hex }}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase tracking-wider text-ewa-ink">
                      Ink Text Preview
                    </span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/40 backdrop-blur-sm text-ewa-ink">
                      {contrastWithInk}:1
                    </span>
                  </div>
                  <p className="text-sm font-bold text-ewa-ink">FDA Approved Clinical Care</p>
                  <div className="flex items-center gap-2 text-[11px] font-bold">
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded",
                        contrastWithInk >= 4.5 ? "bg-green-600 text-white" : "bg-red-500 text-white"
                      )}
                    >
                      {contrastWithInk >= 4.5 ? "✓ WCAG AA Pass" : "✗ Fails for Body (<4.5:1)"}
                    </span>
                    {contrastWithInk >= 3.0 && contrastWithInk < 4.5 && (
                      <span className="text-[10px] opacity-85">Passes for Large Text / UI</span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* SECTION 2: MODULAR TYPOGRAPHY SYSTEM */}
        <Section variant="white" spacing="md" className="border-y border-ewa-line">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-ewa-line pb-4">
              <div>
                <div className="flex items-center gap-2 text-ewa-magenta font-display font-bold text-xs uppercase tracking-widest">
                  <span className="w-2.5 h-2.5 rounded-full bg-ewa-magenta" />
                  Type Hierarchy
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-ewa-teal-deep mt-1">
                  2. Typography Scale (Sora + Manrope)
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="teal">Display: Sora (Geometric + Warm)</Badge>
                <Badge variant="skin">Body: Manrope (Clean Sans)</Badge>
              </div>
            </div>

            <div className="space-y-6">
              {/* Display 1 */}
              <div className="p-4 rounded-xl hover:bg-ewa-mist/60 transition-colors border border-transparent hover:border-ewa-line">
                <div className="text-xs text-ewa-teal font-mono mb-1">
                  Display 1 — font-display / 48px (3rem) / Bold 800
                </div>
                <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-ewa-teal-deep tracking-tight">
                  Where Science Meets Artistry
                </h1>
              </div>

              {/* Display 2 */}
              <div className="p-4 rounded-xl hover:bg-ewa-mist/60 transition-colors border border-transparent hover:border-ewa-line">
                <div className="text-xs text-ewa-teal font-mono mb-1">
                  Heading 1 (H1) — font-display / 36px (2.25rem) / Bold 700
                </div>
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-ewa-teal-deep">
                  Beauty Redefined & Restored
                </h1>
              </div>

              {/* H2 */}
              <div className="p-4 rounded-xl hover:bg-ewa-mist/60 transition-colors border border-transparent hover:border-ewa-line">
                <div className="text-xs text-ewa-teal font-mono mb-1">
                  Heading 2 (H2) — font-display / 28px (1.75rem) / SemiBold 600
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-ewa-ink">
                  Advanced Hair Restoration & Clinical Dermatology
                </h2>
              </div>

              {/* H3 */}
              <div className="p-4 rounded-xl hover:bg-ewa-mist/60 transition-colors border border-transparent hover:border-ewa-line">
                <div className="text-xs text-ewa-teal font-mono mb-1">
                  Heading 3 (H3) — font-display / 22px (1.375rem) / Medium 500
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-ewa-teal">
                  Laser Rejuvenation, Vitiligo & Aesthetic Medicine
                </h3>
              </div>

              {/* Body Lead */}
              <div className="p-4 rounded-xl hover:bg-ewa-mist/60 transition-colors border border-transparent hover:border-ewa-line">
                <div className="text-xs text-ewa-teal font-mono mb-1">
                  Body Lead — font-sans / 18px (1.125rem) / Regular 400
                </div>
                <p className="text-lg text-ewa-ink/90 font-sans leading-relaxed max-w-4xl">
                  At Ewa Derma Clinic, we believe beauty is a science. Led by expert dermatologists, we combine state-of-the-art medical technology with artistic precision to deliver transformative results.
                </p>
              </div>

              {/* Body Regular & Small */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-ewa-mist/50 border border-ewa-line/60">
                  <div className="text-xs text-ewa-teal font-mono mb-1">
                    Body Regular — 14px / Regular 400
                  </div>
                  <p className="text-sm text-ewa-ink/80 leading-normal">
                    Whether you are seeking advanced hair transplants, clinical skin rejuvenation, or body contouring, our premium treatments are tailored to reveal the most confident version of yourself in Lucknow.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-ewa-mist/50 border border-ewa-line/60">
                  <div className="text-xs text-ewa-teal font-mono mb-1">
                    Caption / Small — 12px / Medium 500
                  </div>
                  <p className="text-xs text-ewa-ink/65 leading-relaxed">
                    6th floor, Unit 10, The Millennium Place, near Lulu Mall, Golf City, Sector B Ansal API, Lucknow, Uttar Pradesh 226030 · Phone: +91 9120854977 · Mon–Sun 10:00 AM – 7:00 PM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 3: REUSABLE COMPONENT PRIMITIVES (LIVE INTERACTIVE) */}
        <Section id="components-section" variant="mist" spacing="none">
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-ewa-line pb-4">
              <div>
                <div className="flex items-center gap-2 text-ewa-green font-display font-bold text-xs uppercase tracking-widest">
                  <span className="w-2.5 h-2.5 rounded-full bg-ewa-green" />
                  Interactive Primitives
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-ewa-teal-deep mt-1">
                  3. Live Component Showcase
                </h2>
              </div>
              <p className="text-xs text-ewa-ink/60">
                Every component is interactive with spring physics, magnetic cursor tracking, and accessible focus outlines.
              </p>
            </div>

            {/* 3.1 Buttons Showcase */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-ewa-teal-deep flex items-center gap-2">
                <span>3.1 Button Variants & States</span>
                <span className="text-xs font-mono font-normal text-ewa-ink/50">(Magnetic + Shimmer)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Primary Magenta CTA */}
                <Card className="p-6 space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <Badge variant="magenta" size="sm">Primary CTA (Magenta)</Badge>
                      <span className="text-[11px] font-mono text-ewa-ink/50">High-Conversion</span>
                    </div>
                    <p className="text-xs text-ewa-ink/70 mt-2">
                      High-signal button with subtle magnetic hover and glowing shadow for all "Book Consultation" triggers.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <Button variant="primary" size="md" rightIcon={<Calendar className="w-4 h-4" />}>
                      Book Appointment
                    </Button>
                    <Button variant="primary" size="sm">
                      Quick Book
                    </Button>
                  </div>
                </Card>

                {/* Secondary Teal */}
                <Card className="p-6 space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <Badge variant="teal" size="sm">Secondary (Teal)</Badge>
                      <span className="text-[11px] font-mono text-ewa-ink/50">Trust Navigation</span>
                    </div>
                    <p className="text-xs text-ewa-ink/70 mt-2">
                      Used for secondary page navigation, treatments exploration, and clinical downloads.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <Button variant="secondary" size="md" leftIcon={<Sparkles className="w-4 h-4" />}>
                      Explore Services
                    </Button>
                    <Button variant="outline" size="md">
                      Learn More
                    </Button>
                  </div>
                </Card>

                {/* WhatsApp & Call Triggers */}
                <Card className="p-6 space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <Badge variant="hair" size="sm">Direct Communication</Badge>
                      <span className="text-[11px] font-mono text-ewa-ink/50">Mobile High-Intent</span>
                    </div>
                    <p className="text-xs text-ewa-ink/70 mt-2">
                      Optimized for Indian mobile-first clinic traffic for instant WhatsApp and dialer engagement.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <Button
                      variant="whatsapp"
                      size="md"
                      leftIcon={<MessageCircle className="w-4 h-4 fill-white" />}
                    >
                      WhatsApp Us
                    </Button>
                    <Button
                      variant="call"
                      size="md"
                      leftIcon={<Phone className="w-4 h-4" />}
                    >
                      +91 9120854977
                    </Button>
                  </div>
                </Card>

                {/* Loading & Disabled States */}
                <Card className="p-6 space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" size="sm">State Transitions</Badge>
                      <span className="text-[11px] font-mono text-ewa-ink/50">Interactive</span>
                    </div>
                    <p className="text-xs text-ewa-ink/70 mt-2">
                      Toggle loading state to test spinner transition and disabled interaction.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-2 items-center">
                    <Button
                      variant="primary"
                      size="md"
                      isLoading={btnLoading}
                      onClick={() => {
                        setBtnLoading(true);
                        setTimeout(() => setBtnLoading(false), 2500);
                      }}
                    >
                      {btnLoading ? "Processing..." : "Trigger Loading"}
                    </Button>
                    <Button variant="secondary" size="md" disabled>
                      Disabled
                    </Button>
                  </div>
                </Card>

                {/* Ghost & Icon Variants */}
                <Card className="p-6 space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" size="sm">Ghost / Text</Badge>
                      <span className="text-[11px] font-mono text-ewa-ink/50">Inline Actions</span>
                    </div>
                    <p className="text-xs text-ewa-ink/70 mt-2">
                      Subtle actions for modal close, pagination, and breadcrumbs.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-2 items-center">
                    <Button variant="ghost" size="md">
                      View All Doctors →
                    </Button>
                    <Button variant="ghost" size="sm">
                      Cancel
                    </Button>
                  </div>
                </Card>

                {/* Sizing Scale */}
                <Card className="p-6 space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" size="sm">Scale: SM to XL</Badge>
                      <span className="text-[11px] font-mono text-ewa-ink/50">4 Sizes</span>
                    </div>
                    <p className="text-xs text-ewa-ink/70 mt-2">
                      Systematic padding and typography scaling.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-1.5 items-center">
                    <Button variant="primary" size="sm">SM</Button>
                    <Button variant="primary" size="md">MD</Button>
                    <Button variant="primary" size="lg">LG</Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* 3.2 Category Tabs / Filter Switcher (Framer Motion sliding pill) */}
            <div className="space-y-4 pt-4">
              <h3 className="font-display font-bold text-lg text-ewa-teal-deep flex items-center gap-2">
                <span>3.2 Interactive Filter Tabs</span>
                <span className="text-xs font-mono font-normal text-ewa-ink/50">
                  (Smooth Framer Motion layoutId pill)
                </span>
              </h3>

              <Card className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-ewa-ink/70 max-w-md">
                    Click any tab to test the fluid sliding active pill indicator that will be used for gallery filtering and treatment categories:
                  </p>
                  <Tabs
                    activeId={activeTab}
                    onChange={setActiveTab}
                    items={[
                      { id: "all", label: "All Treatments", count: 28 },
                      { id: "skin", label: "Clinical Skin", count: 8 },
                      { id: "hair", label: "Hair Restoration", count: 5 },
                      { id: "antiaging", label: "Anti-Aging", count: 9 },
                      { id: "laser", label: "Laser & Body", count: 6 },
                    ]}
                  />
                </div>

                <div className="p-4 rounded-xl bg-ewa-mist/70 border border-ewa-line text-xs font-mono text-ewa-teal">
                  Active Filter State: <strong>"{activeTab.toUpperCase()}"</strong> · Rendering matching dynamic treatment data
                </div>
              </Card>
            </div>

            {/* 3.3 Badges & Circular Trust Motifs */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-lg text-ewa-teal-deep flex items-center gap-2">
                  <span>3.3 Category Pills & Self-Drawing Trust Badges</span>
                </h3>
                <button
                  onClick={() => setDrawRing(!drawRing)}
                  className="text-xs font-display font-semibold text-ewa-magenta hover:underline"
                >
                  {drawRing ? "Disable SVG Ring Animation" : "Enable SVG Ring Animation"}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-5 flex flex-col items-start gap-3">
                  <Badge variant="hair" dot animatedRing={drawRing}>
                    Hair Restoration (Green)
                  </Badge>
                  <p className="text-xs text-ewa-ink/70">
                    Color-coded for Hair Transplants, PRP & GFC therapies, echoing the male silhouette.
                  </p>
                </Card>

                <Card className="p-5 flex flex-col items-start gap-3">
                  <Badge variant="skin" dot animatedRing={drawRing}>
                    Clinical Dermatology (Cyan)
                  </Badge>
                  <p className="text-xs text-ewa-ink/70">
                    Color-coded for Acne, Pigmentation, Vitiligo, and Laser therapies, echoing the female silhouette.
                  </p>
                </Card>

                <Card className="p-5 flex flex-col items-start gap-3">
                  <Badge variant="teal" dot animatedRing={drawRing}>
                    FDA Approved Tech (Teal)
                  </Badge>
                  <p className="text-xs text-ewa-ink/70">
                    Used for clinical trust badges, international certifications, and medical standards.
                  </p>
                </Card>

                <Card className="p-5 flex flex-col items-start gap-3">
                  <Badge variant="magenta" dot animatedRing={drawRing}>
                    Limited Slot Booking (Magenta)
                  </Badge>
                  <p className="text-xs text-ewa-ink/70">
                    Used for high-priority appointment notices, seasonal offers, and new clinic procedures.
                  </p>
                </Card>
              </div>
            </div>

            {/* 3.4 Glassmorphic Cards & Surface Treatments */}
            <div className="space-y-4 pt-4">
              <h3 className="font-display font-bold text-lg text-ewa-teal-deep">
                3.4 Glassmorphism Cards & Depth Layers
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Light Glass Card with Skin Cyan Accent */}
                <Card variant="glass" accentBorder="cyan" className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="skin">Clinical Skin</Badge>
                    <span className="text-[11px] font-mono text-ewa-ink/50">Glass Light</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-ewa-teal-deep">
                    Acne & Scar Treatment
                  </h4>
                  <p className="text-xs text-ewa-ink/75 leading-relaxed">
                    Advanced solutions for acne scars, pigmentation, and rosacea using medical-grade laser technology and dermatological protocols.
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs text-ewa-cyan font-bold">
                    <span>View Treatment Protocol</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>

                {/* Light Glass Card with Hair Green Accent */}
                <Card variant="glass" accentBorder="green" className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="hair">Hair Care</Badge>
                    <span className="text-[11px] font-mono text-ewa-ink/50">Glass Light</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-ewa-teal-deep">
                    PRP / GFC Hair Restoration
                  </h4>
                  <p className="text-xs text-ewa-ink/75 leading-relaxed">
                    Restoring confidence with autologous growth factor concentrates, medical micro-needling, and natural hair density therapy.
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs text-ewa-green font-bold">
                    <span>View Treatment Protocol</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>

                {/* Dark Glass Luxe Card */}
                <Card variant="glass-dark" accentBorder="magenta" className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="magenta">Luxe Aesthetic</Badge>
                    <span className="text-[11px] font-mono text-white/50">Glass Dark</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    Vampire Facelift (PRP)
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Turn back the clock with non-surgical rejuvenation designed to lift, tighten, and restore radiant elasticity with zero downtime.
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs text-ewa-magenta font-bold">
                    <span>Book Priority Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </div>
            </div>

            {/* 3.5 Accessible Form Primitives */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-lg text-ewa-teal-deep flex items-center gap-2">
                  <span>3.5 Accessible Form Primitives & Validation States</span>
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setHasErrors(!hasErrors)}
                  className="text-xs"
                >
                  {hasErrors ? "Clear Validation Errors" : "Simulate Validation Errors"}
                </Button>
              </div>

              <Card className="p-6 sm:p-8">
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                  <Input
                    label="Patient Full Name"
                    placeholder="e.g. Dr. Ananya Verma"
                    leftIcon={<User className="w-4 h-4" />}
                    required
                    error={hasErrors ? "Please enter the patient's full name" : undefined}
                  />

                  <Input
                    label="Contact Phone (India)"
                    placeholder="e.g. 9876543210"
                    leftIcon={<Phone className="w-4 h-4" />}
                    required
                    error={hasErrors ? "Valid 10-digit mobile number required" : undefined}
                  />

                  <Select
                    label="Select Specialty / Concern"
                    required
                    error={hasErrors ? "Please select a primary concern" : undefined}
                    options={[
                      { value: "skin", label: "Clinical Dermatology & Acne" },
                      { value: "hair", label: "Hair Restoration & PRP / GFC" },
                      { value: "antiaging", label: "Anti-Aging & Aesthetics (Botox/Fillers)" },
                      { value: "body", label: "Body Shaping & Surgery" },
                      { value: "laser", label: "Laser & Intimate Care" },
                      { value: "vitiligo", label: "Vitiligo (Safed Dag) Special Care" },
                    ]}
                  />

                  <Input
                    label="Email Address"
                    placeholder="ananya@example.com"
                    leftIcon={<Mail className="w-4 h-4" />}
                    type="email"
                    helperText="We send appointment confirmation & reminders."
                  />

                  <div className="sm:col-span-2">
                    <Textarea
                      label="Specific Concern or Aesthetic Goals"
                      placeholder="Describe your skin or hair condition..."
                      rows={3}
                      error={hasErrors ? "Brief description needed for specialist assignment" : undefined}
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-ewa-line">
                    <div className="flex items-center gap-2 text-xs text-ewa-ink/70">
                      <ShieldCheck className="w-4 h-4 text-ewa-cyan shrink-0" />
                      <span>
                        DPDP Act 2023 compliant. Your medical details are strictly confidential.
                      </span>
                    </div>
                    <Button variant="primary" size="lg" leftIcon={<Calendar className="w-4 h-4" />}>
                      Book Consultation
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </Section>
      </main>

      {/* Live Footer Shell Preview */}
      <Footer />

      {/* Floating Call & WhatsApp Triggers */}
      <FloatingActions />
    </div>
  );
}
