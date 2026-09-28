"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export const GetInTouchSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    city: "",
    phone: "",
    email: "",
    concern: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setIsSubmitting(true);
    
    // Simulate submission for UI purposes
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="relative w-full min-h-[900px] flex items-center justify-center py-20 lg:py-32 overflow-hidden border-t border-ewa-line">
      {/* Background Video */}
      <video
        src="https://res.cloudinary.com/zvlxacfu/video/upload/v1790591718/gemini_generated_video_5103c2ae.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-[#0D4A5A]/60 sm:bg-[#0D4A5A]/50 z-10" />

      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/95 backdrop-blur-xl rounded-[32px] sm:rounded-[40px] shadow-2xl overflow-hidden border border-white/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Form Section */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-6 flex-1 flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#4FAE7C]/15 text-[#4FAE7C] flex items-center justify-center mx-auto shadow-inner border border-[#4FAE7C]/30">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2 max-w-md">
                      <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#0D4A5A] tracking-tight">
                        Request Received!
                      </h3>
                      <p className="text-sm sm:text-base text-ewa-ink/80 font-sans">
                        Thank you, <strong className="text-[#0D4A5A]">{formData.fullName}</strong>. We will reach out to you shortly to confirm your consultation.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ fullName: "", age: "", gender: "", city: "", phone: "", email: "", concern: "" });
                      }}
                      className="mt-4 px-6 py-3 rounded-full bg-ewa-mist text-ewa-teal-deep font-bold text-sm hover:bg-ewa-teal hover:text-white transition-colors"
                    >
                      Book Another Consultation
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="space-y-2 mb-8">
                      <span className="inline-block px-3.5 py-1 rounded-full bg-ewa-teal/10 text-ewa-teal-deep text-xs font-display font-semibold tracking-wide border border-ewa-teal/20">
                        BOOK YOUR CONSULTATION
                      </span>
                      <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#0D4A5A] tracking-tight">
                        Get In Touch
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                      {/* Full Name */}
                      <div className="space-y-2 sm:col-span-2">
                        <label className="block text-sm font-semibold text-ewa-teal-deep">Full Name *</label>
                        <input required type="text" placeholder="Enter your full name" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all text-ewa-ink placeholder:text-ewa-ink/40" />
                      </div>
                      
                      {/* Age */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-ewa-teal-deep">Age *</label>
                        <input required type="number" min="1" placeholder="Your age" value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all text-ewa-ink placeholder:text-ewa-ink/40" />
                      </div>

                      {/* Gender */}
                      <div className="space-y-2 relative">
                        <label className="block text-sm font-semibold text-ewa-teal-deep">Gender (Optional)</label>
                        <div className="relative">
                          <select value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})} className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all appearance-none cursor-pointer text-ewa-ink">
                            <option value="" disabled>Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ewa-ink/40 pointer-events-none" />
                        </div>
                      </div>
                      
                      {/* City & Locality */}
                      <div className="space-y-2 sm:col-span-2">
                        <label className="block text-sm font-semibold text-ewa-teal-deep">City & Locality *</label>
                        <input required type="text" placeholder="e.g. Lucknow – Gomti Nagar" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all text-ewa-ink placeholder:text-ewa-ink/40" />
                      </div>

                      {/* Mobile Number */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-ewa-teal-deep">Mobile Number *</label>
                        <input required type="tel" pattern="[0-9]{10}" placeholder="10-digit mobile" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all text-ewa-ink placeholder:text-ewa-ink/40" />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-ewa-teal-deep">Email (Optional)</label>
                        <input type="email" placeholder="email@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all text-ewa-ink placeholder:text-ewa-ink/40" />
                      </div>

                      {/* Concern */}
                      <div className="space-y-2 sm:col-span-2 relative">
                        <label className="block text-sm font-semibold text-ewa-teal-deep">What brings you to EWA Derma? *</label>
                        <div className="relative">
                          <select required value={formData.concern} onChange={e => setFormData({...formData, concern: e.target.value})} className="w-full px-4 py-3.5 rounded-xl border border-ewa-line bg-ewa-mist/30 focus:bg-white focus:border-ewa-teal-deep focus:ring-2 focus:ring-ewa-teal-deep/20 outline-none transition-all appearance-none cursor-pointer text-ewa-ink">
                            <option value="" disabled>Select a concern</option>
                            <option value="Acne">Acne</option>
                            <option value="Pigmentation">Pigmentation</option>
                            <option value="Hair Fall">Hair Fall</option>
                            <option value="Hair Restoration">Hair Restoration</option>
                            <option value="Skin Rejuvenation">Skin Rejuvenation</option>
                            <option value="Anti-Aging">Anti-Aging</option>
                            <option value="Laser Treatment">Laser Treatment</option>
                            <option value="Cosmetic Dermatology">Cosmetic Dermatology</option>
                            <option value="General Consultation">General Consultation</option>
                            <option value="Other">Other</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ewa-ink/40 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-ewa-magenta hover:bg-[#c20b4c] text-white py-4 rounded-xl font-display font-bold tracking-wide text-base shadow-lg hover:shadow-xl transition-all active:scale-[0.98] disabled:opacity-75 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            PROCESSING...
                          </>
                        ) : (
                          "BOOK CONSULTATION"
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Clinic Info Section */}
            <div className="lg:col-span-5 bg-[#0D4A5A] text-white p-8 sm:p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-ewa-magenta/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-ewa-cyan/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-10">
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white">
                    EWA Derma Clinic
                  </h3>
                  <p className="text-white/80 font-sans text-base leading-relaxed">
                    Where science meets artistry. Advanced dermatology, skin, hair, laser & aesthetic care.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                      <MapPin className="w-4 h-4 text-ewa-magenta" />
                    </div>
                    <div className="space-y-1 pt-1">
                      <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Address</div>
                      <p className="text-sm text-white/90 leading-relaxed">
                        6th Floor, Unit No. 10, The Millennium Place,<br />
                        near Lulu Mall, Golf City, Sector B Ansal API,<br />
                        Lucknow, UP 226030
                      </p>
                    </div>
                  </div>

                  {/* Clinic Desk */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                      <Phone className="w-4 h-4 text-ewa-magenta" />
                    </div>
                    <div className="space-y-1 pt-1">
                      <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Clinic Desk</div>
                      <p className="text-base font-semibold text-white">
                        +91 9120854977
                      </p>
                    </div>
                  </div>

                  {/* Consultation Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                      <Clock className="w-4 h-4 text-ewa-magenta" />
                    </div>
                    <div className="space-y-1 pt-1">
                      <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Consultation Hours</div>
                      <p className="text-sm text-white/90">
                        Monday – Saturday: 10:00 AM – 7:00 PM<br />
                        Sunday: Appointment Only
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={`https://wa.me/919120854977?text=${encodeURIComponent("Hello Ewa Derma Clinic, I would like to book a consultation.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-sans text-sm font-semibold flex items-center justify-center gap-2 transition-all group"
                  >
                    <MessageCircle className="w-5 h-5 text-[#4FAE7C] group-hover:scale-110 transition-transform" />
                    <span>Instant WhatsApp Booking</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
