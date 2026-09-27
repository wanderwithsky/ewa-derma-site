"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0.85 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="w-full flex-1 flex flex-col will-change-transform"
    >
      {children}
    </motion.div>
  );
};
