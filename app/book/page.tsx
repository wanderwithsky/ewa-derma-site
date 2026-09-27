"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { SERVICE_CATEGORIES, DOCTORS, CLINIC_INFO } from "@/lib/data";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  MapPin,
  Stethoscope,
  ChevronRight,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";

// Generate available slots (30 min intervals, 10:00 AM to 6:30 PM)
const TIME_SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
];

// Generate next 14 bookable days
function getAvailableDates() {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < 14; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);

    const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
    const dayNumber = d.getDate();
    const monthName = d.toLocaleDateString("en-US", { month: "short" });
    const isoString = d.toISOString().split("T")[0];

    dates.push({
      iso: isoString,
      dayName: i === 0 ? "Today" : i === 1 ? "Tomorrow" : dayName,
      dayNumber,
      monthName,
      fullFormatted: d.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      }),
    });
  }
  return dates;
}

function BookingFlowContent() {
  const searchParams = useSearchParams();
  const initialTreatmentParam = searchParams.get("treatment") || "";
  const initialCategoryParam = searchParams.get("category") || "";

  // Multi-step State (1: Treatment, 2: Slot, 3: Details, 4: Confirmed)
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Form Fields State
  const [selectedCategory, setSelectedCategory] = useState<string>("skin");
  const [selectedTreatment, setSelectedTreatment] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [selectedDoctor, setSelectedDoctor] = useState<string>("first-available");
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [honeypot, setHoneypot] = useState<string>("");

  // UI / Status State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [confirmedBooking, setConfirmedBooking] = useState<{
    bookingRef: string;
    createdAt: string;
  } | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  const availableDates = useMemo(() => getAvailableDates(), []);

  // Handle URL Query Params on mount
  useEffect(() => {
    if (initialCategoryParam) {
      const matchedCat = SERVICE_CATEGORIES.find((c) => c.id === initialCategoryParam);
      if (matchedCat) {
        setSelectedCategory(matchedCat.id);
      }
    }

    if (initialTreatmentParam) {
      // Find which category contains this treatment or slug
      for (const cat of SERVICE_CATEGORIES) {
        const found = cat.treatments.find(
          (t) =>
            t.toLowerCase().replace(/\s+/g, "-") === initialTreatmentParam.toLowerCase() ||
            t.toLowerCase().includes(initialTreatmentParam.toLowerCase())
        );
        if (found) {
          setSelectedCategory(cat.id);
          setSelectedTreatment(found);
          break;
        }
      }
    }

    if (availableDates[0]) {
      setSelectedDate(availableDates[0].iso);
    }
  }, [initialTreatmentParam, initialCategoryParam, availableDates]);

  // Current category's treatments
  const currentCategoryData = useMemo(
    () => SERVICE_CATEGORIES.find((c) => c.id === selectedCategory) || SERVICE_CATEGORIES[0],
    [selectedCategory]
  );

  // Set default treatment if empty when category changes
  useEffect(() => {
    if (currentCategoryData.treatments.length > 0 && !selectedTreatment) {
      setSelectedTreatment(currentCategoryData.treatments[0]);
    }
  }, [currentCategoryData, selectedTreatment]);

  // Step 1 Validation
  const handleNextFromStep1 = () => {
    if (!selectedTreatment) {
      setFormErrors({ treatment: "Please select a specific procedure to continue." });
      return;
    }
    setFormErrors({});
    setCurrentStep(2);
  };

  // Step 2 Validation
  const handleNextFromStep2 = () => {
    if (!selectedDate) {
      setFormErrors({ date: "Please select your preferred date." });
      return;
    }
    if (!selectedTimeSlot) {
      setFormErrors({ timeSlot: "Please choose a time slot." });
      return;
    }
    setFormErrors({});
    setCurrentStep(3);
  };

  // Final Submission Handler
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    // Client-side quick checks
    const errors: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters.";
    }
    const cleanPhone = phone.replace(/[\s\-\+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = "Please enter a valid 10-digit Indian phone number.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: currentCategoryData.name,
          treatment: selectedTreatment,
          date: selectedDate,
          timeSlot: selectedTimeSlot,
          doctor:
            selectedDoctor === "first-available"
              ? "First Available Senior Specialist"
              : DOCTORS.find((d) => d.id === selectedDoctor)?.name || selectedDoctor,
          fullName,
          phone,
          email,
          notes,
          website_hp: honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          const flatErrors: Record<string, string> = {};
          for (const key of Object.keys(data.errors)) {
            flatErrors[key] = data.errors[key][0];
          }
          setFormErrors(flatErrors);
        } else {
          setFormErrors({ form: data.message || "Failed to schedule appointment." });
        }
        setIsSubmitting(false);
        return;
      }

      setConfirmedBooking({
        bookingRef: data.bookingRef,
        createdAt: new Date().toISOString(),
      });
      setCurrentStep(4);
    } catch (err) {
      setFormErrors({ form: "Network error. Please check your connection or contact the clinic desk directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRefToClipboard = () => {
    if (confirmedBooking?.bookingRef) {
      navigator.clipboard.writeText(confirmedBooking.bookingRef);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-ewa-mist text-ewa-ink flex flex-col selection:bg-ewa-magenta selection:text-white">
      <Header />

      {/* Hero Bar */}
      <section className="bg-gradient-to-br from-[#0D4A5A] via-[#1B4B5C] to-[#146A80] text-white pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-ewa-teal/30 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-ewa-teal/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-ewa-magenta/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ewa-magenta/20 border border-ewa-magenta/40 text-ewa-magenta-light text-xs font-semibold tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Online Clinical Scheduling System</span>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white leading-tight">
            Schedule Your Consultation
          </h1>

          <p className="text-white/80 text-sm sm:text-base font-sans max-w-xl mx-auto">
            Directly reserve your in-person diagnosis with certified dermatologists and surgeons at Golf City, Lucknow.
          </p>

          {/* Step Progress Pills */}
          {currentStep < 4 && (
            <div className="pt-6 flex items-center justify-center gap-2 sm:gap-4 max-w-lg mx-auto">
              {[
                { step: 1, label: "1. Treatment" },
                { step: 2, label: "2. Date & Time" },
                { step: 3, label: "3. Patient Details" },
              ].map((item) => (
                <div
                  key={item.step}
                  className={`flex-1 py-2 px-2.5 rounded-full text-xs font-semibold transition-all text-center border ${
                    currentStep === item.step
                      ? "bg-ewa-magenta text-white border-ewa-magenta shadow-md shadow-ewa-magenta/30 scale-102"
                      : currentStep > item.step
                      ? "bg-white/20 text-white/90 border-white/30"
                      : "bg-white/5 text-white/40 border-white/10"
                  }`}
                >
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">Step {item.step}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Multi-Step Booking Form Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <AnimatePresence mode="wait">
          {/* ========================================================================= */}
          {/* STEP 1: TREATMENT CATEGORY & PROCEDURE SELECTION */}
          {/* ========================================================================= */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-ewa-line shadow-xl"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-ewa-teal uppercase tracking-wider">Step 1 of 3</span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-ewa-teal-deep">
                  Select Your Treatment & Category
                </h2>
                <p className="text-xs sm:text-sm text-ewa-ink/70">
                  Choose the specialized dermatological or aesthetic protocol you require.
                </p>
              </div>

              {/* Category Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {SERVICE_CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setSelectedTreatment(category.treatments[0] || "");
                      setFormErrors({});
                    }}
                    className={`p-3 rounded-2xl text-xs font-semibold flex flex-col items-center text-center justify-center gap-2 transition-all border ${
                      selectedCategory === category.id
                        ? "bg-[#0D4A5A] text-white border-[#0D4A5A] shadow-md scale-102"
                        : "bg-ewa-mist text-ewa-ink/80 border-ewa-line hover:border-ewa-teal/30 hover:bg-white"
                    }`}
                  >
                    <span className="font-display font-bold leading-tight">{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Specific Treatments Radio/Select Cards Grid */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-ewa-teal-deep uppercase tracking-wider">
                  Available Clinical Protocols under {currentCategoryData.name}:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentCategoryData.treatments.map((treatment) => {
                    const isSelected = selectedTreatment === treatment;
                    return (
                      <div
                        key={treatment}
                        onClick={() => {
                          setSelectedTreatment(treatment);
                          setFormErrors({});
                        }}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-ewa-teal/10 border-ewa-teal shadow-sm text-ewa-teal-deep font-semibold"
                            : "bg-white border-ewa-line/80 hover:border-ewa-teal/40 text-ewa-ink/80"
                        }`}
                      >
                        <span className="text-sm font-display">{treatment}</span>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                            isSelected ? "border-ewa-magenta bg-ewa-magenta text-white" : "border-gray-300"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {formErrors.treatment && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {formErrors.treatment}
                  </p>
                )}
              </div>

              {/* Step 1 Navigation CTA */}
              <div className="pt-6 border-t border-ewa-line flex items-center justify-between">
                <Link href="/services" className="text-xs text-ewa-ink/60 hover:text-ewa-teal font-medium">
                  ← Explore Detailed Service Pages
                </Link>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleNextFromStep1}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Continue to Date & Slot
                </Button>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: DATE & TIME SLOT SELECTION */}
          {/* ========================================================================= */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-ewa-line shadow-xl"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-ewa-teal uppercase tracking-wider">Step 2 of 3</span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-ewa-teal-deep">
                  Choose Appointment Date & Time
                </h2>
                <p className="text-xs sm:text-sm text-ewa-ink/70">
                  Operating Hours: <strong className="text-ewa-teal-deep">{CLINIC_INFO.hours}</strong> (Golf City, Lucknow)
                </p>
              </div>

              {/* Selected Summary Pill */}
              <div className="p-3.5 rounded-2xl bg-ewa-mist border border-ewa-line/80 flex items-center justify-between text-xs">
                <div>
                  <span className="text-ewa-ink/60">Selected Procedure: </span>
                  <strong className="text-ewa-teal-deep">{selectedTreatment}</strong>
                </div>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-ewa-magenta font-semibold hover:underline"
                >
                  Change
                </button>
              </div>

              {/* Date Horizontal Picker Carousel */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-ewa-teal-deep uppercase tracking-wider flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-ewa-teal" /> 1. Select Date (Next 14 Days):
                </label>

                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {availableDates.map((d) => {
                    const isSelected = selectedDate === d.iso;
                    return (
                      <button
                        key={d.iso}
                        type="button"
                        onClick={() => {
                          setSelectedDate(d.iso);
                          setFormErrors({});
                        }}
                        className={`p-3 rounded-2xl border flex flex-col items-center justify-center transition-all ${
                          isSelected
                            ? "bg-[#0D4A5A] text-white border-[#0D4A5A] shadow-md scale-105"
                            : "bg-ewa-mist text-ewa-ink hover:bg-white hover:border-ewa-teal/30"
                        }`}
                      >
                        <span className="text-[11px] font-medium opacity-80">{d.dayName}</span>
                        <span className="text-lg font-display font-bold leading-tight">{d.dayNumber}</span>
                        <span className="text-[10px] opacity-75">{d.monthName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots Grid */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-semibold text-ewa-teal-deep uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-ewa-teal" /> 2. Select Preferred Time Slot:
                </label>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTimeSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => {
                          setSelectedTimeSlot(slot);
                          setFormErrors({});
                        }}
                        className={`py-2.5 px-2 rounded-xl text-xs font-mono font-medium border transition-all text-center ${
                          isSelected
                            ? "bg-ewa-magenta text-white border-ewa-magenta shadow-md scale-105"
                            : "bg-ewa-mist text-ewa-ink/80 border-ewa-line hover:bg-white hover:border-ewa-teal/30"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>

                {formErrors.timeSlot && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {formErrors.timeSlot}
                  </p>
                )}
              </div>

              {/* Step 2 Navigation Actions */}
              <div className="pt-6 border-t border-ewa-line flex items-center justify-between">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setCurrentStep(1)}
                  leftIcon={<ArrowLeft className="w-4 h-4" />}
                >
                  Back to Treatment
                </Button>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleNextFromStep2}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Continue to Details
                </Button>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: PATIENT DETAILS, SPECIALIST & CONFIRMATION */}
          {/* ========================================================================= */}
          {currentStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-ewa-line shadow-xl"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-ewa-teal uppercase tracking-wider">Step 3 of 3</span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-ewa-teal-deep">
                  Patient Information & Specialist
                </h2>
                <p className="text-xs sm:text-sm text-ewa-ink/70">
                  Please enter your contact details. We will send an SMS / Email confirmation immediately.
                </p>
              </div>

              {/* Appointment Overview Summary Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0D4A5A] to-[#146A80] text-white space-y-2 text-xs">
                <div className="flex items-center justify-between border-b border-white/15 pb-2">
                  <span className="font-semibold text-ewa-cyan">Appointment Summary</span>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="text-white/80 hover:text-white underline"
                  >
                    Edit Date & Time
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  <div>
                    <span className="text-white/60 block">Treatment:</span>
                    <strong>{selectedTreatment}</strong>
                  </div>
                  <div>
                    <span className="text-white/60 block">Date:</span>
                    <strong>
                      {availableDates.find((d) => d.iso === selectedDate)?.fullFormatted || selectedDate}
                    </strong>
                  </div>
                  <div>
                    <span className="text-white/60 block">Time Slot:</span>
                    <strong>{selectedTimeSlot}</strong>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleFinalSubmit} className="space-y-5">
                {/* Honeypot Spam Trap (Hidden) */}
                <input
                  type="text"
                  name="website_hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Doctor Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="book-doctor" className="text-xs font-semibold text-ewa-teal-deep flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-ewa-teal" /> Specialist Doctor Preference:
                  </label>
                  <select
                    id="book-doctor"
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-ewa-mist border border-ewa-line text-sm text-ewa-ink focus:ring-2 focus:ring-ewa-teal/30 focus:outline-none transition-all"
                  >
                    <option value="first-available">First Available Senior Specialist (Recommended)</option>
                    {DOCTORS.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} – {doc.specialty}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Patient Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="book-name" className="text-xs font-semibold text-ewa-teal-deep flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-ewa-teal" /> Full Name *
                    </label>
                    <input
                      id="book-name"
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full px-4 py-3 rounded-2xl bg-ewa-mist border text-sm text-ewa-ink focus:outline-none transition-all ${
                        formErrors.fullName
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                          : "border-ewa-line focus:ring-2 focus:ring-ewa-teal/30"
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-[11px] text-red-500 font-medium">{formErrors.fullName}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="book-phone" className="text-xs font-semibold text-ewa-teal-deep flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-ewa-teal" /> Phone Number (10 Digits) *
                    </label>
                    <input
                      id="book-phone"
                      type="tel"
                      required
                      placeholder="e.g. 9120854977"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-4 py-3 rounded-2xl bg-ewa-mist border text-sm text-ewa-ink focus:outline-none transition-all ${
                        formErrors.phone
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                          : "border-ewa-line focus:ring-2 focus:ring-ewa-teal/30"
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] text-red-500 font-medium">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="book-email" className="text-xs font-semibold text-ewa-teal-deep flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-ewa-teal" /> Email Address (For Appointment Confirmation)
                  </label>
                  <input
                    id="book-email"
                    type="email"
                    placeholder="e.g. priya.sharma@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-ewa-mist border border-ewa-line text-sm text-ewa-ink focus:ring-2 focus:ring-ewa-teal/30 focus:outline-none transition-all"
                  />
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label htmlFor="book-notes" className="text-xs font-semibold text-ewa-teal-deep">
                    Specific Symptoms, Concerns or Previous Treatments (Optional)
                  </label>
                  <textarea
                    id="book-notes"
                    rows={3}
                    placeholder="Briefly describe your skin/hair concerns..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-ewa-mist border border-ewa-line text-sm text-ewa-ink focus:ring-2 focus:ring-ewa-teal/30 focus:outline-none transition-all resize-none"
                  />
                </div>

                {formErrors.form && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formErrors.form}</span>
                  </div>
                )}

                {/* Trust & Submit */}
                <div className="pt-4 border-t border-ewa-line space-y-4">
                  <div className="flex items-center gap-2 text-xs text-ewa-ink/70">
                    <ShieldCheck className="w-4 h-4 text-ewa-cyan shrink-0" />
                    <span>DPDP Act 2023 compliant. Your medical details remain 100% confidential.</span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={() => setCurrentStep(2)}
                      leftIcon={<ArrowLeft className="w-4 h-4" />}
                    >
                      Back
                    </Button>

                    <Button
                      type="submit"
                      variant="primary"
                      size="xl"
                      disabled={isSubmitting}
                      className="flex-1 sm:flex-initial"
                      rightIcon={
                        isSubmitting ? (
                          <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4" />
                        )
                      }
                    >
                      {isSubmitting ? "Confirming Slot..." : "Confirm & Schedule Appointment"}
                    </Button>
                  </div>
                </div>
              </form>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* STEP 4: ON-BRAND CONFIRMATION & RECEIPT STATE */}
          {/* ========================================================================= */}
          {currentStep === 4 && confirmedBooking && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-12 border border-ewa-line shadow-2xl space-y-8 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-ewa-green/15 text-ewa-green flex items-center justify-center mx-auto shadow-inner border border-ewa-green/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <Badge variant="magenta" size="sm">
                  Appointment Confirmed
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-ewa-teal-deep">
                  We Look Forward to Seeing You!
                </h2>
                <p className="text-sm text-ewa-ink/75 leading-relaxed font-sans">
                  Dear <strong className="text-ewa-teal-deep">{fullName}</strong>, your consultation slot is reserved in our Lucknow schedule.
                </p>
              </div>

              {/* Luxury Receipt Card */}
              <div className="max-w-md mx-auto bg-ewa-mist rounded-2xl p-5 sm:p-6 border border-ewa-line/80 space-y-3.5 text-left text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-ewa-line pb-3">
                  <span className="text-ewa-ink/60 font-medium">Booking Reference:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-ewa-magenta">{confirmedBooking.bookingRef}</span>
                    <button
                      type="button"
                      onClick={copyRefToClipboard}
                      className="p-1 rounded hover:bg-white text-gray-500 transition-colors"
                      title="Copy Reference"
                    >
                      {copiedRef ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="text-ewa-ink/60">Procedure:</span>
                  <strong className="text-ewa-teal-deep text-right">{selectedTreatment}</strong>
                </div>

                <div className="flex justify-between">
                  <span className="text-ewa-ink/60">Date & Slot:</span>
                  <strong className="text-ewa-teal-deep text-right">
                    {availableDates.find((d) => d.iso === selectedDate)?.fullFormatted || selectedDate} at {selectedTimeSlot}
                  </strong>
                </div>

                <div className="flex justify-between">
                  <span className="text-ewa-ink/60">Specialist:</span>
                  <strong className="text-ewa-teal-deep text-right">
                    {selectedDoctor === "first-available"
                      ? "First Available Senior Specialist"
                      : DOCTORS.find((d) => d.id === selectedDoctor)?.name || selectedDoctor}
                  </strong>
                </div>

                <div className="flex justify-between border-t border-ewa-line pt-3">
                  <span className="text-ewa-ink/60">Location:</span>
                  <span className="text-right text-xs text-ewa-ink/80 max-w-[220px]">
                    The Millennium Place, Golf City, near Lulu Mall, Lucknow
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(
                    `Hello Ewa Derma Clinic, I have booked appointment ref ${confirmedBooking.bookingRef} for ${selectedTreatment} on ${selectedDate} at ${selectedTimeSlot}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:bg-[#20ba5a] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Confirmation to WhatsApp</span>
                </a>

                <Link href="/">
                  <Button variant="outline" size="md">
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ewa-mist flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-3 border-ewa-teal/30 border-t-ewa-teal animate-spin" />
        </div>
      }
    >
      <BookingFlowContent />
    </Suspense>
  );
}
