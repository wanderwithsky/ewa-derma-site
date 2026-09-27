"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  User,
  Activity,
  ArrowRight,
} from "lucide-react";
import { CLINIC_INFO } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const GetInTouchSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    treatment: "acne-skin",
    doctor: "first-available",
    preferredDate: "",
    timeSlot: "morning",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          treatment: formData.treatment,
          doctor: formData.doctor,
          timeSlot: formData.timeSlot,
          message: formData.message,
          website_hp: honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setServerError(data.message || "Failed to submit consultation request. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      setServerError("Network error. Please try again or call the clinic desk directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F0F7F7] relative overflow-hidden border-t border-[#146A80]/15">
      {/* Ambient background glows */}
      <div className="absolute -top-24 left-1/4 w-[600px] h-[400px] bg-[#146A80]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[500px] h-[400px] bg-[#E31C79]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#146A80]/10 text-[#0D4A5A] text-xs font-semibold tracking-wider uppercase border border-[#146A80]/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31C79] animate-pulse" />
            <span>Consultation & Inquiries</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-standard"
          >
            Get In Touch with Our Specialists
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="paragraph-standard text-sm sm:text-base max-w-2xl mx-auto"
          >
            Schedule a personalized one-on-one diagnostic consultation with our certified dermatologists and hair restoration surgeons in Golf City, Lucknow.
          </motion.p>
        </div>

        {/* 2-Column Form & Contact Info Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* ================= LEFT COLUMN: INTERACTIVE FORM ================= */}
          <div className="lg:col-span-7 bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-[#146A80]/15 shadow-xl flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 sm:py-16 text-center space-y-6 flex-1 flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-[#4FAE7C]/15 text-[#4FAE7C] flex items-center justify-center mx-auto shadow-inner border border-[#4FAE7C]/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2 max-w-md">
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#0D4A5A]">
                      Consultation Request Received!
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      Thank you, <strong className="text-[#0D4A5A]">{formData.fullName || "valued patient"}</strong>. Our clinical coordinator will call you back within <strong className="text-[#0D4A5A]">15 minutes</strong> to confirm your slot.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F0F7F7] border border-[#146A80]/15 text-xs text-gray-600 max-w-sm w-full space-y-1 text-left">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#0D4A5A]">Phone:</span>
                      <span>{formData.phone || "On File"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#0D4A5A]">Treatment Area:</span>
                      <span className="capitalize">{formData.treatment.replace("-", " ")}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        phone: "",
                        email: "",
                        treatment: "acne-skin",
                        doctor: "first-available",
                        preferredDate: "",
                        timeSlot: "morning",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#0D4A5A] text-white font-bold text-xs hover:bg-[#146A80] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-gray-100 pb-4">
                    <h3 className="text-xl sm:text-2xl font-serif text-[#0D4A5A]">
                      Book Your Appointment
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Fill out the form below. We will confirm your consultation time shortly.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="touch-full-name" className="text-xs font-semibold text-[#0D4A5A] flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#146A80]" /> Full Name *
                      </label>
                      <input
                        id="touch-full-name"
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F0F7F7] border border-gray-200 text-sm text-[#14262B] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#146A80]/40 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="touch-phone" className="text-xs font-semibold text-[#0D4A5A] flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#146A80]" /> Phone Number *
                      </label>
                      <input
                        id="touch-phone"
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F0F7F7] border border-gray-200 text-sm text-[#14262B] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#146A80]/40 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Treatment Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="touch-email" className="text-xs font-semibold text-[#0D4A5A] flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#146A80]" /> Email Address
                      </label>
                      <input
                        id="touch-email"
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F0F7F7] border border-gray-200 text-sm text-[#14262B] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#146A80]/40 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="touch-treatment" className="text-xs font-semibold text-[#0D4A5A] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#146A80]" /> Treatment of Interest *
                      </label>
                      <select
                        id="touch-treatment"
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F0F7F7] border border-gray-200 text-sm text-[#14262B] focus:outline-none focus:ring-2 focus:ring-[#146A80]/40 transition-all"
                      >
                        <option value="acne-skin">Acne & Clinical Dermatology</option>
                        <option value="hair-transplant">Hair Transplant & GFC/PRP</option>
                        <option value="anti-aging">Anti-Aging, Botox & Fillers</option>
                        <option value="laser-removal">Laser Hair / Tattoo Removal</option>
                        <option value="pigmentation">Vitiligo & Melasma Correction</option>
                        <option value="body-contouring">Body Shaping & Exilis</option>
                        <option value="general-consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Specialist Doctor & Preferred Timing */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="touch-doctor" className="text-xs font-semibold text-[#0D4A5A] flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#146A80]" /> Select Specialist
                      </label>
                      <select
                        id="touch-doctor"
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F0F7F7] border border-gray-200 text-sm text-[#14262B] focus:outline-none focus:ring-2 focus:ring-[#146A80]/40 transition-all"
                      >
                        <option value="first-available">First Available Senior Specialist</option>
                        <option value="dr-ana">Dr. Ana (Dr. Ananya Sharma) – Dermatology</option>
                        <option value="dr-rohit">Dr. Rohit Verma – Hair Restoration</option>
                        <option value="dr-priya">Dr. Priya Saxena – Aesthetics & Botox</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="touch-timeslot" className="text-xs font-semibold text-[#0D4A5A] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#146A80]" /> Preferred Time Slot
                      </label>
                      <select
                        id="touch-timeslot"
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F0F7F7] border border-gray-200 text-sm text-[#14262B] focus:outline-none focus:ring-2 focus:ring-[#146A80]/40 transition-all"
                      >
                        <option value="morning">Morning (10:00 AM – 1:00 PM)</option>
                        <option value="afternoon">Afternoon (1:00 PM – 4:00 PM)</option>
                        <option value="evening">Evening (4:00 PM – 7:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="touch-message" className="text-xs font-semibold text-[#0D4A5A]">
                      Describe Your Concern (Optional)
                    </label>
                    <textarea
                      id="touch-message"
                      rows={3}
                      placeholder="Briefly share any specific symptoms, previous treatments, or goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F0F7F7] border border-gray-200 text-sm text-[#14262B] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#146A80]/40 transition-all resize-none"
                    />
                  </div>

                  {/* Hidden Honeypot Spam Trap */}
                  <input
                    type="text"
                    name="website_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {serverError && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-[#0D4A5A] text-white font-sans font-bold text-sm sm:text-base hover:bg-[#E31C79] transition-all duration-200 shadow-lg hover:shadow-ewa-glow-magenta flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>Processing Your Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm Consultation Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* ================= RIGHT COLUMN: CLINIC CONTACT CARD ================= */}
          <div className="lg:col-span-5 rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#0D4A5A] via-[#146A80] to-[#1B4B5C] text-white p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden border border-white/10">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-ewa-magenta/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-8 relative z-10">
              <div className="space-y-2">
                <Badge variant="magenta" size="sm">
                  Visit Our Clinic
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-serif text-white leading-tight">
                  Ewa Derma Clinic
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                  Where science meets artistry. Premier dermatology & aesthetics center near Lulu Mall.
                </p>
              </div>

              {/* Clinic Detail Items */}
              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white shrink-0 border border-white/20">
                    <MapPin className="w-5 h-5 text-ewa-cyan" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                      Address
                    </div>
                    <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
                      6th Floor, Unit No. 10, The Millennium Place, near Lulu Mall, Golf City, Sector B Ansal API, Lucknow, UP 226030
                    </p>
                  </div>
                </div>

                {/* Phone & Hotline */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white shrink-0 border border-white/20">
                    <Phone className="w-5 h-5 text-ewa-green" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                      Clinic Desk
                    </div>
                    <p className="text-xs sm:text-sm font-mono font-bold text-white">
                      +91 9120854977
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white shrink-0 border border-white/20">
                    <Clock className="w-5 h-5 text-amber-300" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                      Consultation Hours
                    </div>
                    <p className="text-xs sm:text-sm text-white/95">
                      Monday – Sunday: 10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919120854977?text=${encodeURIComponent(
                    "Hello Ewa Derma Clinic, I would like to book a consultation with the specialist doctor."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md text-white font-sans text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-[#4FAE7C] group-hover:scale-110 transition-transform" />
                  <span>Instant WhatsApp Booking</span>
                </a>
              </div>
            </div>

            {/* Bottom Trust Badge */}
            <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] text-white/75 relative z-10">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-ewa-cyan" /> Verified Medical Board
              </span>
              <span>Lucknow, Uttar Pradesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
