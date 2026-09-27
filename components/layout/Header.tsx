"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Phone, Calendar, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-ewa-sm border-b border-ewa-line py-3"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <BrandLogo size="md" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={true}
              className="text-sm font-display font-medium text-ewa-ink/80 hover:text-ewa-teal transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ewa-magenta hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Click to Call */}
          <a
            href="tel:+919120854977"
            className="flex items-center gap-2 text-xs font-display font-semibold text-ewa-teal-deep hover:text-ewa-magenta px-3 py-2 rounded-full transition-colors"
            aria-label="Call Ewa Derma Clinic"
          >
            <div className="w-7 h-7 rounded-full bg-ewa-teal/10 flex items-center justify-center text-ewa-teal">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>+91 9120854977</span>
          </a>

          {/* High Conversion Primary CTA */}
          <Link href="/book">
            <Button
              variant="primary"
              size="md"
              leftIcon={<Calendar className="w-4 h-4" />}
            >
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-ewa-ink hover:bg-ewa-teal/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ewa-teal"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-ewa-line px-4 py-6 shadow-ewa-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-display font-semibold text-ewa-ink/90 hover:text-ewa-magenta py-2 border-b border-ewa-line/50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link href="/book" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  leftIcon={<Calendar className="w-4 h-4" />}
                >
                  Book Consultation
                </Button>
              </Link>
              <a
                href="tel:+919120854977"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-ewa-teal py-2"
              >
                <Phone className="w-4 h-4" /> Call +91 9120854977
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
