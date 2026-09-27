"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { ShieldCheck, AlertCircle } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-ewa-mist text-ewa-ink flex flex-col selection:bg-ewa-magenta selection:text-white">
      <Header />

      <Section variant="dark-teal" spacing="lg" className="border-b border-ewa-teal-bg-2/30">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="teal">Compliance & Governance</Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight">
            Privacy Policy
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
              1. Overview & Commitment to Data Privacy
            </h2>
            <p>
              Ewa Derma Clinic ("we", "our", or "the Clinic"), situated at The Millennium Place, Golf City, Sector B Ansal API, Lucknow, Uttar Pradesh 226030, is committed to safeguarding the personal and sensitive health data of our patients and site visitors in accordance with the Digital Personal Data Protection (DPDP) Act, 2023 and the Information Technology Act, 2000.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-ewa-teal-deep">
              2. Personal Data We Collect
            </h2>
            <p>We only collect personal information that is necessary for scheduling clinical consultations, diagnosing dermatological/trichological conditions, and providing personalized aesthetic treatment plans:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li><strong>Contact Information:</strong> Full name, telephone/mobile number, email address.</li>
              <li><strong>Appointment Data:</strong> Requested treatment categories, preferred dates, and communication history.</li>
              <li><strong>Clinical Notes (In-Clinic Only):</strong> Medical history, allergy profiles, skin/hair examination imagery collected under explicit written patient consent.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-ewa-teal-deep">
              3. Purpose of Processing & Consent
            </h2>
            <p>
              By submitting an appointment or contact form on this website, you provide explicit consent for Ewa Derma Clinic staff to contact you via telephone call, SMS, or WhatsApp regarding your consultation. We do not sell, rent, or trade your personal data to third-party marketing companies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-ewa-teal-deep">
              4. Patient Rights Under DPDP Act 2023
            </h2>
            <p>
              Under Indian data protection laws, you retain the right to access summary details of your processed data, request correction of inaccurate records, withdraw consent for marketing communication, or request erasure of non-statutory records by emailing <strong>care@ewaderma.com</strong>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-ewa-teal-deep">
              5. Data Protection Officer (DPO) Contact
            </h2>
            <p>
              For grievances or privacy inquiries, contact our Data Protection Officer at:
              <br />
              <strong>Ewa Derma Clinic</strong>
              <br />
              6th Floor, Unit 10, The Millennium Place, Golf City, Lucknow, UP 226030
              <br />
              Phone: +91 9120854977 | Email: care@ewaderma.com
            </p>
          </div>
        </Card>
      </Section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
