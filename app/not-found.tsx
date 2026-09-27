"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { CircularEmblem } from "@/components/ui/CircularEmblem";
import { ArrowRight, Home, Phone, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ewa-mist text-ewa-ink flex flex-col selection:bg-ewa-magenta selection:text-white">
      <Header />

      <Section variant="mist" spacing="xl" className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <CircularEmblem size="lg" icon="logo" animatedRing={false} />

          <Badge variant="magenta" size="md">
            Page Not Found · 404
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-display font-black text-ewa-teal-deep tracking-tight">
            Oops, Let's Get You Back on Track.
          </h1>

          <p className="text-sm sm:text-base text-ewa-ink/75 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been moved or doesn't exist. Explore our clinic treatments or head back to our home page.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button variant="primary" size="lg" leftIcon={<Home className="w-4 h-4" />}>
                Return to Home
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore Treatments
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
