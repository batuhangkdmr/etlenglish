"use client";

import { useEffect, useState, type ReactNode } from "react";

export function StickyHeader({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--mobile-header-offset",
      isScrolled ? "68px" : "104px",
    );
  }, [isScrolled]);

  return (
    <header data-scrolled={isScrolled} className="site-header fixed inset-x-0 top-0 z-40">
      {children}
    </header>
  );
}
