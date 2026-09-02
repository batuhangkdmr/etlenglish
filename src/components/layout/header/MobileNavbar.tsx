"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { siteConfig } from "@/data/site";

import { MobileDrawer } from "./MobileDrawer";

export function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeAtDesktop = () => {
      if (window.innerWidth >= 1360) setIsMenuOpen(false);
    };

    window.addEventListener("resize", closeAtDesktop);
    return () => window.removeEventListener("resize", closeAtDesktop);
  }, []);

  return (
    <div className="relative flex h-full items-center justify-between min-[1360px]:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((previous) => !previous)}
        className="relative z-[70] grid size-11 place-items-center rounded-xl border border-brand-navy/10 bg-white/90 text-brand-navy shadow-xs transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
      >
        {isMenuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
      </button>

      <Link
        href={siteConfig.phone.href}
        aria-label={`ETL English'i arayın: ${siteConfig.phone.display}`}
        className="relative z-[70] grid size-11 place-items-center rounded-xl border border-brand-navy/10 bg-white/90 text-brand-navy shadow-xs transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
      >
        <Phone aria-hidden="true" className="size-[18px]" />
      </Link>

      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        triggerRef={triggerRef}
      />
    </div>
  );
}
