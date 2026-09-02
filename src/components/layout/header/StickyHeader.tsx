"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function StickyHeader({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const nextValue = window.scrollY > 20;
      if (nextValue === scrolledRef.current) return;
      scrolledRef.current = nextValue;
      setIsScrolled(nextValue);
    };
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
