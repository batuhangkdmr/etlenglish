import { ArrowUpRight, Camera, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { ShapeDivider } from "@/components/shared/ShapeDivider";
import { footerLinks, siteConfig } from "@/data/site";

import { FooterWorldMap } from "./FooterWorldMap";

const footerLinkClass = "group inline-flex min-h-10 items-center gap-2 rounded-sm py-1.5 text-sm text-white/68 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent min-[1280px]:min-h-0 min-[1280px]:py-0";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_15%_0%,#0b5c89_0%,transparent_32%),linear-gradient(135deg,#063f66_0%,#032f4f_72%)] text-white">
      <ShapeDivider position="top" variant="curve" fill="#032f4f" className="h-10 min-[768px]:h-16 min-[1280px]:h-24" />
      <FooterWorldMap />

      <Container className="relative z-10 pt-20 min-[768px]:pt-24 min-[1280px]:pt-28">
        <Reveal className="footer-global-intro flex flex-col gap-3 border-b border-white/12 pb-8 min-[768px]:flex-row min-[768px]:items-end min-[768px]:justify-between min-[768px]:pb-10">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-accent">Global education network</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.045em] sm:text-3xl">ETL English ile Dünyaya Açılın</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/62">Yurt dışı eğitim yolculuğunuzun her adımında yanınızdayız.</p>
        </Reveal>

        <div className="grid gap-12 py-12 min-[768px]:gap-14 min-[1280px]:grid-cols-[0.85fr_1.15fr] min-[1280px]:gap-20 min-[1280px]:py-20">
          <Reveal className="footer-brand max-w-sm">
            <div className="footer-logo-frame h-14 w-[120px] overflow-hidden rounded-xl bg-white px-1.5 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.45)] min-[1280px]:h-[70px] min-[1280px]:w-[150px] min-[1280px]:px-2">
              <Link href="/" aria-label="ETL English ana sayfa" className="block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2">
                <Image src={siteConfig.logo} alt="ETL Yurt Dışı Eğitim Danışmanlığı" width={1600} height={1600} sizes="150px" className="size-full scale-[1.35] object-contain" />
              </Link>
            </div>
            <p className="mt-6 text-2xl font-extrabold leading-tight tracking-[-0.045em] sm:text-3xl">Hayalleriniz<br />dünyaya açılsın.</p>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/70">{siteConfig.description}</p>
          </Reveal>

          <div className="grid gap-10 min-[768px]:grid-cols-2 min-[1280px]:grid-cols-3 min-[1280px]:gap-8">
            <Reveal className="order-2 min-[1280px]:order-1" delay={0.06}><FooterColumn title="Hızlı Bağlantılar" links={footerLinks.quick} /></Reveal>
            <Reveal className="order-3 min-[1280px]:order-2" delay={0.12}><FooterColumn title="Programlar" links={footerLinks.programs} /></Reveal>
            <Reveal className="order-1 min-[1280px]:order-3" delay={0.18}><ContactColumn /></Reveal>
          </div>
        </div>

        <Reveal className="border-t border-white/10 py-7" delay={0.22}>
          <Link href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram'da ETL English'i takip edin" className="group inline-flex items-center gap-3 text-sm font-bold text-white/72 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent">
            <span className="grid size-9 place-items-center rounded-full border border-brand-accent/60 text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white"><Camera aria-hidden="true" className="size-4" /></span>
            Instagram&apos;da Bizi Takip Edin
            <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </Container>

      <div className="relative z-10 border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 pr-20 pb-20 text-[11px] text-white/55 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-between min-[768px]:pr-20 min-[1280px]:py-5 min-[1280px]:pr-8 min-[1280px]:pb-5">
          <p>© {new Date().getFullYear()} ETL English. Tüm hakları saklıdır.</p>
          <p>Yurt Dışı Eğitim &amp; İngilizce Eğitimi</p>
        </Container>
      </div>
    </footer>
  );
}

function ContactColumn() {
  return (
    <div>
      <FooterHeading title="İletişim" />
      <ul className="mt-5 space-y-3 text-sm text-white/72 min-[1280px]:mt-6 min-[1280px]:space-y-4">
        <li><Link href={siteConfig.phone.href} className="group flex min-h-11 items-center gap-3 transition-colors hover:text-white"><Phone aria-hidden="true" className="size-4 shrink-0 text-brand-accent transition-transform group-hover:-translate-y-0.5" />{siteConfig.phone.display}</Link></li>
        <li><Link href={`mailto:${siteConfig.email}`} className="group flex min-h-11 items-center gap-3 break-all transition-colors hover:text-white"><Mail aria-hidden="true" className="size-4 shrink-0 text-brand-accent transition-transform group-hover:-translate-y-0.5" />{siteConfig.email}</Link></li>
        <li className="flex items-start gap-3 leading-6"><MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-accent" /><span className="wrap-break-word">{siteConfig.address}</span></li>
      </ul>
    </div>
  );
}

type FooterColumnProps = { title: string; links: ReadonlyArray<{ label: string; href: string }> };

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <nav aria-label={title}>
      <FooterHeading title={title} />
      <ul className="mt-5 space-y-1.5 min-[1280px]:mt-6 min-[1280px]:space-y-3">
        {links.map((link) => <li key={link.label}><Link href={link.href} className={footerLinkClass}><span className="text-brand-accent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">→</span>{link.label}</Link></li>)}
      </ul>
    </nav>
  );
}

function FooterHeading({ title }: { title: string }) {
  return <h2 className="flex items-center gap-2 text-xs font-extrabold tracking-[0.16em] text-white/70 uppercase"><span className="h-px w-5 bg-brand-accent" aria-hidden="true" />{title}</h2>;
}
