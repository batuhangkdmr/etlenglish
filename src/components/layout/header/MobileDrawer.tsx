"use client";

import { ArrowUpRight, Camera, ChevronDown, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import { buttonVariants } from "@/components/shared/Button";
import { leftNavigation, rightNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

export function MobileDrawer({ isOpen, onClose, triggerRef }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const items = [...leftNavigation, ...rightNavigation];

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    drawerRef.current?.querySelector<HTMLButtonElement>("button")?.focus();

    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      trigger?.focus();
    };
  }, [isOpen, onClose, triggerRef]);

  const trapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !drawerRef.current) return;

    const elements = Array.from(drawerRef.current.querySelectorAll<HTMLElement>(focusableSelector));
    const first = elements[0];
    const last = elements.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <>
      <button
        type="button"
        aria-label="Menüyü kapat"
        onClick={onClose}
        className="mobile-drawer-backdrop fixed inset-x-0 bottom-0 top-[var(--mobile-header-offset,104px)] z-[80] cursor-default border-0 bg-brand-navy-dark/45 p-0"
      />
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil navigasyon"
        id="mobile-navigation"
        onKeyDown={trapFocus}
        className="mobile-drawer-panel fixed bottom-0 left-0 top-[var(--mobile-header-offset,104px)] z-[90] flex w-[80vw] max-w-[440px] flex-col overflow-y-auto bg-white text-brand-navy shadow-2xl sm:px-8"
      >
        <nav aria-label="Mobil menü" className="px-5 pb-3 pt-0 sm:px-8">
          <ul>
            {items.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isExpanded = openSection === item.label;

              return (
                <li key={item.label} className="mobile-drawer-item border-b border-brand-navy/10">
                  {hasChildren && item.children ? (
                    <div>
                      <button type="button" aria-expanded={isExpanded} onClick={() => setOpenSection(isExpanded ? null : item.label)} className="group flex w-full items-center justify-between py-3 text-left transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent sm:py-3.5">
                        <span className="text-base font-extrabold tracking-[-0.025em]">{item.label}</span>
                        <span className={`grid size-7 place-items-center rounded-full border border-brand-navy/12 transition-colors group-hover:border-brand-accent ${isExpanded ? "border-brand-accent bg-brand-accent" : ""}`}>
                          <ChevronDown aria-hidden="true" className={`size-3.5 text-brand-navy/45 transition-transform duration-300 ${isExpanded ? "rotate-180 text-white" : ""}`} />
                        </span>
                      </button>
                      {isExpanded ? (
                        <ul className="mobile-drawer-submenu mb-2 ml-7 space-y-0.5 border-l-2 border-brand-accent/60 pl-3">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link href={child.href} onClick={onClose} className="block rounded-sm py-1.5 text-xs font-semibold text-brand-ink/65 transition-transform hover:translate-x-1 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent">
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ) : (
                    <Link href={item.href} onClick={onClose} className="group flex items-center justify-between py-3 transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent sm:py-3.5">
                      <span className="text-base font-extrabold tracking-[-0.025em]">{item.label}</span>
                      <span className="grid size-7 place-items-center rounded-full border border-brand-navy/12 transition-colors group-hover:border-brand-accent group-hover:bg-brand-accent">
                        <ArrowUpRight aria-hidden="true" className="size-3.5 text-brand-navy/45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-brand-navy/10 px-5 pb-8 pt-4 sm:px-8">
          <Link href="#danismanlik" onClick={onClose} className={cn(buttonVariants({ size: "lg" }), "mobile-drawer-cta w-full justify-center py-3 text-sm shadow-[0_16px_28px_-16px_rgba(232,33,88,0.8)]")}>Ücretsiz Danışmanlık <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
          <div className="flex flex-col gap-1.5 text-[11px] font-semibold text-brand-ink/60">
            <Link href={siteConfig.phone.href} onClick={onClose} className="flex items-center gap-2 hover:text-brand-accent"><Phone aria-hidden="true" className="size-3.5 text-brand-accent" />{siteConfig.phone.display}</Link>
            <Link href={`mailto:${siteConfig.email}`} onClick={onClose} className="flex items-center gap-2 hover:text-brand-accent"><Mail aria-hidden="true" className="size-3.5 text-brand-accent" />{siteConfig.email}</Link>
            <Link href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" onClick={onClose} className="flex items-center gap-2 hover:text-brand-accent"><Camera aria-hidden="true" className="size-3.5 text-brand-accent" />Instagram</Link>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}
