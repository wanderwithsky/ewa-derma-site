import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/ui/PageTransition";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ewa Derma Clinic | Where Science Meets Artistry — Lucknow",
  description:
    "Ewa Derma Clinic is a premier dermatology, hair transplant, aesthetics, and laser clinic in Golf City, Lucknow. Led by certified dermatologists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://drive.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://docs.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://video.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://play.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://googleusercontent.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://drive.google.com" />
        <link rel="dns-prefetch" href="https://docs.google.com" />
        <link rel="dns-prefetch" href="https://video.google.com" />
        <link rel="dns-prefetch" href="https://play.google.com" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
        <link rel="dns-prefetch" href="https://googleusercontent.com" />
      </head>
      <body className="antialiased bg-ewa-mist text-ewa-ink min-h-screen selection:bg-ewa-magenta selection:text-white flex flex-col font-sans">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
