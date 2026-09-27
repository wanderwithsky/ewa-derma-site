"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";

// Lazy-load the heavy 3D WebGL canvas
const DynamicHeroScene = dynamic(
  () => import("@/components/3d/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => null,
  }
);

export const HeroCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" aria-hidden="true">
      {/* High-Performance Ambient Light Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-ewa-cyan/20 blur-[100px]" />
      <div className="absolute top-1/4 right-0 w-[480px] h-[480px] rounded-full bg-ewa-magenta/25 blur-[120px]" />
      <div className="absolute -bottom-24 left-1/3 w-[420px] h-[420px] rounded-full bg-ewa-green/15 blur-[100px]" />
    </div>
  );
};
