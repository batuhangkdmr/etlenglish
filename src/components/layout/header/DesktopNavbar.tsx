"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type FocusEvent } from "react";

import { leftNavigation, rightNavigation, type NavigationItem } from "@/data/navigation";

type DesktopNavbarProps = {
  className?: string;
};

function NavigationList({ items, side }: { items: ReadonlyArray<NavigationItem>; side: "left" | "right" }) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpenLabel(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const open = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenLabel(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenLabel(null), 120);
  };

  const handleFocus = (event: FocusEvent<HTMLLIElement>, item: NavigationItem) => {
    if (item.children && event.currentTarget.contains(event.relatedTarget as Node | null)) return;
    if (item.children) open(item.label);
  };

  return (
    <nav aria-label={`${side === "left" ? "Sol" : "Sağ"} ana menü`}>
      <ul className="flex flex-nowrap items-center gap-4 whitespace-nowrap xl:gap-5 2xl:gap-7">
        {items.map((item) => {
          const hasChildren = Boolean(item.children?.length);
          const isOpen = openLabel === item.label;

          return (
            <li
              key={item.label}
              className="group/nav relative flex h-full items-center"
              onMouseEnter={() => hasChildren && open(item.label)}
              onMouseLeave={scheduleClose}
              onFocus={(event) => handleFocus(event, item)}
            >
              <Link
                href={item.href}
                aria-expanded={hasChildren ? isOpen : undefined}
                aria-haspopup={hasChildren ? "true" : undefined}
                className="relative inline-flex items-center gap-1.5 py-2 text-[13px] font-semibold text-brand-navy transition-colors duration-200 hover:text-brand-accent focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent 2xl:text-[14px]"
              >
                {item.label}
                {hasChildren ? <ChevronDown aria-hidden="true" className={`size-3.5 text-brand-navy/45 transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-accent" : ""}`} /> : null}
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-center scale-x-0 rounded-full bg-brand-accent transition-transform duration-200 group-hover/nav:scale-x-100" />
              </Link>

              {hasChildren && item.children ? (
                <div
                  className={`absolute top-[calc(100%-0.3rem)] ${side === "right" ? "right-0" : "left-0"} z-[90] w-64 rounded-2xl border border-brand-navy/8 bg-white p-2.5 shadow-[0_24px_60px_-20px_rgba(3,47,79,0.25)] transition-[opacity,transform,visibility] duration-200 ${isOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-1 scale-[0.98] opacity-0 pointer-events-none"}`}
                  onMouseEnter={() => open(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <p className="px-3.5 pb-2 pt-1 text-[10px] font-extrabold tracking-[0.16em] text-brand-accent uppercase">{item.label}</p>
                  <ul className="space-y-1" aria-label={`${item.label} alt menüsü`}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link href={child.href} className="group/child flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold text-brand-ink/78 transition-colors hover:bg-brand-mist hover:text-brand-accent focus-visible:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent">
                          <span>{child.label}</span>
                          <ArrowRight aria-hidden="true" className="size-3.5 text-brand-accent opacity-0 transition-[opacity,transform] group-hover/child:translate-x-0.5 group-hover/child:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function DesktopNavbar({ className = "" }: DesktopNavbarProps) {
  return (
    <div className={`hidden h-full min-w-0 items-center justify-between min-[1360px]:flex ${className}`}>
      <NavigationList items={leftNavigation} side="left" />
      <NavigationList items={rightNavigation} side="right" />
    </div>
  );
}
