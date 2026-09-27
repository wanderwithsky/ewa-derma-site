"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);
  const prefersReducedMotion = useReducedMotion();

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl transition-all duration-200 overflow-hidden border",
              isOpen
                ? "bg-white border-ewa-teal/30 shadow-ewa-sm"
                : "bg-white/70 border-ewa-line hover:border-ewa-teal/20"
            )}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ewa-teal cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-display font-bold text-base text-ewa-teal-deep">
                {item.title}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.25 }}
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-colors",
                  isOpen ? "bg-ewa-teal text-white" : "bg-ewa-teal/10 text-ewa-teal"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-5 pt-1 text-sm text-ewa-ink/75 leading-relaxed border-t border-ewa-line/40">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
