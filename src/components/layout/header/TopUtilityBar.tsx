import { ArrowUpRight, Camera, Mail, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/data/site";

export function TopUtilityBar() {
  return (
    <div className="site-topbar bg-brand-navy text-white">
      <Container className="flex h-full items-center justify-between gap-4 text-[11px] font-semibold sm:text-xs">
        <div className="flex min-w-0 items-center gap-5 lg:gap-8">
          <Link
            href={`mailto:${siteConfig.email}`}
            className="hidden items-center gap-2 text-white/85 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent sm:flex"
          >
            <Mail aria-hidden="true" className="size-3.5 shrink-0 text-brand-accent" />
            <span className="text-brand-accent">E-posta:</span>
            <span className="truncate">{siteConfig.email}</span>
          </Link>
          <Link
            href={siteConfig.phone.href}
            className="flex items-center gap-2 whitespace-nowrap text-white/90 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <Phone aria-hidden="true" className="size-3.5 shrink-0 text-brand-accent" />
            <span className="hidden text-brand-accent sm:inline">Telefon:</span>
            {siteConfig.phone.display}
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <Link
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ETL English Instagram hesabı, yeni sekmede açılır"
            className="flex items-center gap-2 text-white/85 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <Camera aria-hidden="true" className="size-3.5 text-brand-accent" />
            <span className="hidden sm:inline">Instagram</span>
          </Link>
          <Link
            href="#danismanlik"
            className="group/cta inline-flex h-7 items-center gap-1.5 rounded-full bg-brand-accent px-3 text-[10px] font-bold whitespace-nowrap text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy sm:h-8 sm:px-3.5 sm:text-xs"
          >
            <span className="hidden min-[400px]:inline">Ücretsiz Danışmanlık</span>
            <span className="min-[400px]:hidden">Danışmanlık</span>
            <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
