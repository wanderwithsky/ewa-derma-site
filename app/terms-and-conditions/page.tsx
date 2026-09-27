"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { AlertCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ewa-mist text-ewa-ink flex flex-col selection:bg-ewa-magenta selection:text-white">
      <Header />

      <Section variant="dark-teal" spacing="lg" className="border-b border-ewa-teal-bg-2/30">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="teal">Terms of Service</Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight">
            Terms & Conditions
          </h1>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs px-3 py-1 rounded-full font-mono">
            <AlertCircle className="w-3.5 h-3.5" />
            Placeholder — Requires Client Legal Review Prior to Launch
          </div>
        </div>
      </Section>

      <Section variant="mist" spacing="lg">
        <Card variant="glass" className="p-8 sm:p-12 max-w-4xl mx-auto space-y-8 text-sm sm:text-base leading-relaxed text-ewa-ink/85">
          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-ewa-teal-deep">
              1. Medical Consultation Disclaimer
            </h2>
            <p>
              Information provided on this website is for educational and appointment scheduling purposes only. It does not constitute formal medical diagnosis or establish a formal doctor-patient relationship until an in-person physical clinical examination is conducted by our certified dermatologists.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-ewa-teal-deep">
              2. Appointment Booking & Cancellation Policy
            </h2>
            <p>
              Consultation slots scheduled online are tentative until confirmed by clinic staff via telephone or WhatsApp. We request at least 24 hours prior notice for rescheduling or cancellations to allow other waiting patients access to our specialists.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-ewa-teal-deep">
              3. Treatment Outcomes & Individual Variation
            </h2>
            <p>
              Dermatological, trichological, laser, and aesthetic treatments produce results that naturally vary based on individual genetic predispositions, hormonal conditions, skin phototypes, and adherence to after-care instructions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-ewa-teal-deep">
              4. Governing Law & Jurisdiction
            </h2>
            <p>
              All interactions and services rendered are governed exclusively by the laws of India, subject to the jurisdiction of the competent courts in Lucknow, Uttar Pradesh.
            </p>
          </div>
        </Card>
      </Section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
