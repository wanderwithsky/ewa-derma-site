"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  MapPin,
  Phone,
  Clock,
  Mail,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  User,
  Navigation,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    treatment: "Clinical Dermatology & Acne",
    message: "",
    website_hp: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.message || "Failed to send consultation inquiry. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMsg("Network error. Please try again or call our clinic directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-ewa-mist text-ewa-ink flex flex-col selection:bg-ewa-magenta selection:text-white">
      <Header />

      {/* Hero */}
      <Section variant="dark-teal" spacing="lg" className="border-b border-ewa-teal-bg-2/30">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <Badge variant="magenta">Contact & Appointments</Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight">
            Visit Our Clinic in Lucknow
          </h1>
          <p className="text-white/85 text-base sm:text-lg font-sans leading-relaxed">
            Conveniently located at The Millennium Place, Golf City, near Lulu Mall. Our medical specialists are ready to assist you.
          </p>
        </div>
      </Section>

      {/* Contact Grid & Map */}
      <Section variant="mist" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="glass" className="p-6 sm:p-8 space-y-6 border-ewa-teal/20">
              <h2 className="font-display font-black text-2xl text-ewa-teal-deep">
                Clinic Information
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-ewa-magenta/15 flex items-center justify-center text-ewa-magenta shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-ewa-teal-deep">Clinic Address</div>
                    <p className="text-ewa-ink/80 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {CLINIC_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-ewa-green/15 flex items-center justify-center text-ewa-green shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-ewa-teal-deep">Phone / Booking Line</div>
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="text-ewa-ink/80 text-xs sm:text-sm mt-0.5 hover:text-ewa-magenta font-semibold block"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-ewa-cyan/15 flex items-center justify-center text-ewa-cyan shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-ewa-teal-deep">Consultation Hours</div>
                    <p className="text-ewa-ink/80 text-xs sm:text-sm mt-0.5">
                      {CLINIC_INFO.hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-ewa-teal-deep">WhatsApp Direct Inquiries</div>
                    <a
                      href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Ewa%20Derma`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-[#25D366] font-bold hover:underline block mt-0.5"
                    >
                      Chat with Clinic Coordinator →
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Styled Intentional Google Maps Placeholder / Live Embed */}
            <div className="rounded-3xl overflow-hidden shadow-ewa-md border border-ewa-line bg-gradient-to-br from-ewa-teal-bg to-ewa-teal-deep text-white p-6 relative flex flex-col justify-between h-72">
              <div className="relative z-10 space-y-2">
                <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
                  <Navigation className="w-3.5 h-3.5 text-ewa-cyan" /> Interactive Map Location
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  The Millennium Place, Golf City
                </h3>
                <p className="text-xs text-white/80 max-w-xs">
                  Near Lulu Mall, Sector B Ansal API, Lucknow 226030
                </p>
              </div>

              {/* Map background iframe or styled canvas */}
              <div className="absolute inset-0 opacity-40">
                <iframe
                  title="Ewa Derma Clinic Location Map"
                  src={CLINIC_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>

              <div className="relative z-10 pt-2 flex items-center justify-between">
                <a
                  href="https://maps.google.com/?q=The+Millennium+Place+Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-white bg-ewa-magenta hover:bg-ewa-magenta-deep px-4 py-2 rounded-full shadow-md transition-colors"
                >
                  Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Full Booking-Intent Form */}
          <div className="lg:col-span-7">
            <Card variant="glass" className="p-6 sm:p-10 border-ewa-teal/20">
              <div className="space-y-2 mb-6">
                <Badge variant="magenta">Appointment Request</Badge>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-ewa-teal-deep">
                  Book Your Consultation
                </h2>
                <p className="text-xs sm:text-sm text-ewa-ink/70">
                  Please submit your preferred details. Our clinic coordinator will contact you to confirm your slot within 15 minutes during clinic hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-white border border-green-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-ewa-teal-deep">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-ewa-ink/80 max-w-md mx-auto">
                    Thank you! Our patient care team in Lucknow will call or WhatsApp you shortly at your registered number to confirm your preferred time slot.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Request
                    </Button>
                    <Link href="/book">
                      <Button variant="primary" size="md">
                        Direct Online Slot Booking →
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Honeypot Spam Trap */}
                  <input
                    type="text"
                    name="website_hp"
                    value={formData.website_hp}
                    onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Full Name"
                      placeholder="e.g. Priya Sharma"
                      leftIcon={<User className="w-4 h-4" />}
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    <Input
                      label="Phone Number"
                      placeholder="e.g. 9876543210"
                      leftIcon={<Phone className="w-4 h-4" />}
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Email Address"
                      placeholder="priya@example.com"
                      leftIcon={<Mail className="w-4 h-4" />}
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Select
                      label="Treatment Category"
                      required
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      options={[
                        { value: "Clinical Dermatology & Acne", label: "Clinical Dermatology & Acne" },
                        { value: "Hair Restoration & PRP / GFC", label: "Hair Restoration & PRP / GFC" },
                        { value: "Anti-Aging & Aesthetics", label: "Anti-Aging & Aesthetics" },
                        { value: "Body Shaping & Surgery", label: "Body Shaping & Surgery" },
                        { value: "Laser & Intimate Care", label: "Laser & Intimate Care" },
                      ]}
                    />
                  </div>

                  <Textarea
                    label="Specific Concerns or Preferred Time"
                    placeholder="Tell us about your skin or hair goals..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-ewa-ink/70">
                      <ShieldCheck className="w-4 h-4 text-ewa-cyan shrink-0" />
                      <span>DPDP Act 2023 compliant. 100% confidential.</span>
                    </div>
                    <Button
                      variant="primary"
                      size="lg"
                      leftIcon={<Calendar className="w-4 h-4" />}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Book Appointment"}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Section>

      {/* Book Appointment CTA Band with Call Button */}
      <Section variant="dark-teal" spacing="lg" className="border-t border-ewa-teal-bg-2/30">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white">
            Need Immediate Assistance or Directions?
          </h2>
          <p className="text-white/85 text-sm sm:text-base">
            Our Lucknow clinic front desk is open Monday to Sunday from 10:00 AM to 7:00 PM.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a href={`tel:${CLINIC_INFO.phone}`}>
              <Button
                variant="primary"
                size="xl"
                leftIcon={<Phone className="w-5 h-5" />}
              >
                Call Front Desk: {CLINIC_INFO.phone}
              </Button>
            </a>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Ewa%20Derma`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="whatsapp"
                size="xl"
                leftIcon={<MessageCircle className="w-5 h-5 fill-white" />}
              >
                WhatsApp Quick Chat
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
