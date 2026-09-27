"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { MapPin, Phone, Clock, Mail, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ewa-teal-deep text-white border-t border-ewa-teal-bg-2/30 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ewa-teal/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ewa-magenta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" size="lg" />
            <p className="text-white/80 text-sm leading-relaxed max-w-md pt-2">
              Where Science Meets Artistry. Premium dermatology, hair transplant, aesthetic medicine, vitiligo, and clinical laser care in Lucknow, Uttar Pradesh.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-white/70">
              <ShieldCheck className="w-4 h-4 text-ewa-cyan" />
              <span>FDA Approved Technology · Certified Dermatologists</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-ewa-cyan">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <Link href="/" prefetch={true} className="hover:text-ewa-magenta transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" prefetch={true} className="hover:text-ewa-magenta transition-colors">
                  About Clinic
                </Link>
              </li>
              <li>
                <Link href="/services" prefetch={true} className="hover:text-ewa-magenta transition-colors">
                  All Treatments
                </Link>
              </li>
              <li>
                <Link href="/gallery" prefetch={true} className="hover:text-ewa-magenta transition-colors">
                  Results Gallery
                </Link>
              </li>
              <li>
                <Link href="/doctors" prefetch={true} className="hover:text-ewa-magenta transition-colors">
                  Our Specialists
                </Link>
              </li>
              <li>
                <Link href="/contact" prefetch={true} className="hover:text-ewa-magenta transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Treatments */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-ewa-cyan">
              Specialties
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>Clinical Dermatology</li>
              <li>Hair Transplant & PRP/GFC</li>
              <li>Anti-Aging & Botox/Fillers</li>
              <li>Body Shaping & Contour</li>
              <li>Laser & Intimate Rejuvenation</li>
              <li>Vitiligo (Safed Dag) Care</li>
            </ul>
          </div>

          {/* Col 4: Contact & NAP */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-ewa-cyan">
              Visit Clinic
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-ewa-magenta shrink-0 mt-0.5" />
                <span>
                  6th floor, Unit 10, The Millennium Place, near Lulu Mall, Golf City, Sector B Ansal API, Lucknow, UP 226030
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-ewa-green shrink-0" />
                <a href="tel:+919120854977" className="hover:text-white font-medium">
                  +91 9120854977
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-ewa-cyan shrink-0" />
                <span>Mon–Sun: 10:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Ewa Derma Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy (DPDP Act)
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/style-guide" className="hover:text-ewa-magenta text-ewa-magenta/80 transition-colors font-mono">
              Dev Style Guide
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
