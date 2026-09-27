"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { DOCTORS } from "@/lib/data";
import {
  Calendar,
  ShieldCheck,
  Award,
  CheckCircle2,
  Phone,
  Clock,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-ewa-mist text-ewa-ink flex flex-col selection:bg-ewa-magenta selection:text-white">
      <Header />

      {/* Hero */}
      <Section variant="dark-teal" spacing="lg" className="border-b border-ewa-teal-bg-2/30">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <Badge variant="magenta">Certified Specialists</Badge>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight">
            Meet Our Medical Experts
          </h1>
          <p className="text-white/85 text-base sm:text-lg font-sans leading-relaxed">
            Treatments performed by certified dermatologists, trichologists, and aesthetic surgeons registered with the Medical Council of India.
          </p>
        </div>
      </Section>

      {/* Doctors Profiles Grid */}
      <Section variant="mist" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <Card
              key={doc.id}
              variant="glass"
              className="p-8 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Doctor Avatar Badge */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-ewa-teal-bg via-ewa-teal to-ewa-teal-deep flex items-center justify-center text-white font-display font-black text-2xl shadow-lg border-2 border-white">
                    {doc.name.replace("Dr. ", "").charAt(0)}
                  </div>
                  <div>
                    <h2 className="font-display font-black text-xl text-ewa-teal-deep">
                      {doc.name}
                    </h2>
                    <p className="text-xs font-semibold text-ewa-magenta mt-0.5">
                      {doc.designation}
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-medium text-ewa-teal bg-ewa-teal/10 px-2 py-0.5 rounded-full">
                      {doc.experience}
                    </span>
                  </div>
                </div>

                {/* Registration & Credentials */}
                <div className="p-3.5 rounded-xl bg-white border border-ewa-line space-y-1.5 text-xs">
                  <div className="font-mono text-ewa-ink/70 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-ewa-teal shrink-0" />
                    <span>{doc.registrationNo}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-ewa-ink/80">
                    <GraduationCap className="w-4 h-4 text-ewa-green shrink-0 mt-0.5" />
                    <span>{doc.qualifications.join(", ")}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-ewa-ink/80 leading-relaxed">
                  {doc.bio}
                </p>

                {/* Specializations Tags */}
                <div className="space-y-2">
                  <div className="text-xs font-display font-bold text-ewa-teal-deep uppercase tracking-wider">
                    Core Specializations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.specializations.map((spec) => (
                      <Badge key={spec} variant="outline" size="sm">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-ewa-line">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    leftIcon={<Calendar className="w-4 h-4" />}
                  >
                    Consult with {doc.name.split(" ")[1]}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
