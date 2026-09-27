import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { CLINIC_INFO } from "@/lib/data";
import {
  Calendar,
  Sparkles,
  ShieldCheck,
  Award,
  Clock,
  HeartPulse,
  ArrowLeft,
  CheckCircle2,
  Phone,
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return [
    { slug: "acne-and-scar-treatment" },
    { slug: "hair-transplant" },
    { slug: "botox-injections" },
    { slug: "laser-hair-removal" },
  ];
}

export default function ServiceDetailPage({ params }: PageProps) {
  const slug = params?.slug || "treatment-detail";

  // Formatted readable title from slug
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const faqs = [
    {
      id: "1",
      title: `How many sessions are typically required for ${title}?`,
      content:
        "The exact number of sessions depends on your baseline skin or hair condition, depth of concern, and physiological response. During your initial clinical consultation in Lucknow, our dermatologists conduct a thorough examination to map out a precise session timeline.",
    },
    {
      id: "2",
      title: "Is the procedure painful, and what is the recovery protocol?",
      content:
        "Most of our procedures use advanced chilling-tip laser technology or topical numbing agents to maximize comfort. Downtime is generally minimal (0 to 48 hours depending on treatment depth), and our medical team provides complete post-procedure recovery care kits.",
    },
    {
      id: "3",
      title: "Are the technologies used at Ewa Derma US-FDA approved?",
      content:
        "Yes. At Ewa Derma Clinic, patient safety is non-negotiable. We operate exclusively with internationally certified, US-FDA cleared clinical equipment and medical-grade products.",
    },
    {
      id: "4",
      title: "How do I prepare for my first consultation?",
      content:
        "We recommend arriving with clean skin without active makeup for facial procedures, or washing your hair beforehand for scalp assessments. Bring any previous dermatological prescriptions for review.",
    },
  ];

  return (
    <div className="min-h-screen bg-ewa-mist text-ewa-ink flex flex-col selection:bg-ewa-magenta selection:text-white">
      <Header />

      {/* Hero */}
      <Section variant="dark-teal" spacing="lg" className="border-b border-ewa-teal-bg-2/30">
        <div className="max-w-4xl mx-auto space-y-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-display font-semibold text-white/80 hover:text-ewa-magenta transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>

          <div className="space-y-3">
            <Badge variant="magenta" size="sm">
              Clinical Treatment Protocol
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight">
              {title}
            </h1>
            <p className="text-white/85 text-base sm:text-lg font-sans leading-relaxed max-w-2xl">
              Advanced clinical protocol combining state-of-the-art medical technology with artistic precision for optimal, safe, and lasting aesthetic outcomes.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" leftIcon={<Calendar className="w-4 h-4" />}>
                Book Consultation for {title}
              </Button>
            </Link>
            <a href={`tel:${CLINIC_INFO.phone}`}>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white/40 hover:bg-white/10 hover:text-white"
                leftIcon={<Phone className="w-4 h-4" />}
              >
                Call Clinic
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* Overview & What It Treats */}
      <Section variant="mist" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <Card variant="glass" className="p-8 space-y-6">
              <h2 className="font-display font-black text-2xl text-ewa-teal-deep">
                Procedure Overview & Clinical Science
              </h2>
              <p className="text-sm sm:text-base text-ewa-ink/80 leading-relaxed">
                At Ewa Derma Clinic in Golf City, Lucknow, <strong>{title}</strong> is performed under the direct supervision of certified medical dermatologists and aesthetic specialists. Every treatment begins with a personalized diagnostic assessment to map your unique skin phototype or hair density index.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-ewa-line space-y-1">
                  <div className="font-display font-bold text-sm text-ewa-teal-deep flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ewa-cyan" />
                    Targeted Accuracy
                  </div>
                  <p className="text-xs text-ewa-ink/70">
                    Medical protocols engineered for high-precision treatment delivery.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-ewa-line space-y-1">
                  <div className="font-display font-bold text-sm text-ewa-teal-deep flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ewa-green" />
                    FDA-Approved Safety
                  </div>
                  <p className="text-xs text-ewa-ink/70">
                    Strict sterilization and international clinical safety adherence.
                  </p>
                </div>
              </div>
            </Card>

            {/* Interactive FAQ Accordion */}
            <div className="space-y-4">
              <div className="space-y-1">
                <Badge variant="teal">Frequently Asked Questions</Badge>
                <h3 className="font-display font-black text-2xl text-ewa-teal-deep">
                  Everything You Need to Know
                </h3>
              </div>
              <Accordion items={faqs} />
            </div>
          </div>

          {/* Right Column: Treatment Metadata Card */}
          <div className="lg:col-span-4 space-y-6">
            <Card variant="glass" className="p-6 space-y-5 border-ewa-teal/20">
              <h3 className="font-display font-bold text-lg text-ewa-teal-deep border-b border-ewa-line pb-3">
                Treatment Snapshot
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-ewa-teal shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-ewa-teal-deep">Procedure Duration</div>
                    <p className="text-ewa-ink/70">30 – 60 Minutes (Per Session)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HeartPulse className="w-4 h-4 text-ewa-green shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-ewa-teal-deep">Downtime & Recovery</div>
                    <p className="text-ewa-ink/70">Minimal to None (Same-Day Normal Activity)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-ewa-magenta shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-ewa-teal-deep">Results Timeline</div>
                    <p className="text-ewa-ink/70">Progressive Improvement over 2–6 Weeks</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-ewa-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-ewa-teal-deep">Anesthesia / Comfort</div>
                    <p className="text-ewa-ink/70">Topical Cooling / Numbing Gel as Needed</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-ewa-line">
                <Link href={`/book?treatment=${slug}`} className="block">
                  <Button variant="primary" size="md" className="w-full">
                    Book In-Person Consultation
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
