"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUp, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { whatsappUrl } from "@/data/site";

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 700);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-center gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            type="button"
            aria-label="Sayfanın başına dön"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
            className="grid size-11 place-items-center rounded-full border border-brand-navy/10 bg-white text-brand-navy shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <ArrowUp aria-hidden="true" className="size-5" />
          </motion.button>
        ) : null}
      </AnimatePresence>
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp üzerinden bilgi alın, yeni sekmede açılır"
        className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_-12px_rgba(37,211,102,0.75)] transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
      >
        <MessageCircle aria-hidden="true" className="size-7" fill="currentColor" strokeWidth={1.5} />
      </Link>
    </div>
  );
}
