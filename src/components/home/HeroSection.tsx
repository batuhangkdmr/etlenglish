import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { ShapeDivider } from "@/components/shared/ShapeDivider";
import { heroMetrics } from "@/data/home";
import { cn } from "@/lib/utils";

import { HeroVisual } from "./HeroVisual";
import { FlightAnimation } from "./FlightAnimation";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-brand-sky pb-28 pt-[132px] sm:pb-36 sm:pt-[156px] lg:min-h-[860px] lg:pt-[148px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_12%,rgba(255,255,255,0.95),transparent_34%),radial-gradient(circle_at_88%_25%,rgba(183,218,235,0.55),transparent_32%)]"
      />
      <div aria-hidden="true" className="absolute top-32 right-[-12rem] -z-10 size-[34rem] rounded-full bg-white/55 blur-3xl lg:right-[-5rem]" />
      <FlightAnimation />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8 xl:gap-14">
        <div className="relative z-20 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-brand-accent" aria-hidden="true" />
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-brand-accent uppercase sm:text-xs">
              Yurt Dışı Eğitim &amp; Danışmanlık
            </p>
          </div>

          <h1 className="max-w-[780px] text-[clamp(2.35rem,6.8vw,4.75rem)] leading-[1.04] font-extrabold tracking-[-0.058em] text-brand-navy">
            Dünyaya Açılan<br />
            Eğitim Yolculuğunuz<br />
            <span className="text-brand-accent">Burada Başlıyor.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-brand-ink/72 sm:text-lg sm:leading-8">
            Hayalinizdeki ülke ve okula giden yolu birlikte planlayalım. Dil okulundan üniversiteye,
            yurt dışı eğitim yolculuğunuzun her adımında yanınızdayız.
          </p>

          <ul aria-label="ETL English avantajları" className="mt-5 grid max-w-2xl gap-2.5 sm:grid-cols-3 sm:gap-3">
            {[
              "Yüzlerce Okula Sınavsız Kayıt",
              "Dünya Çapında Eğitim Seçenekleri",
              "Başvurudan Vizeye Süreç Desteği",
            ].map((advantage) => (
              <li key={advantage} className="hero-value-item flex items-center gap-2 text-xs font-bold leading-5 text-brand-navy sm:items-start">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-accent/10 text-brand-accent">
                  <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />
                </span>
                <span>{advantage}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#danismanlik" className={cn(buttonVariants({ size: "lg" }), "group w-full sm:w-auto")}>
              Ücretsiz Danışmanlık
              <ArrowRight aria-hidden="true" className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link href="#hizmetler" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full sm:w-auto")}>
              Programları Keşfet
            </Link>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-brand-navy/12 pt-6 sm:gap-6">
            {heroMetrics.map((metric) => (
              <div key={metric.label}>
                <dd className="text-xl font-extrabold tracking-[-0.04em] text-brand-navy sm:text-2xl">{metric.value}</dd>
                <dt className="mt-1 text-[10px] leading-4 font-semibold text-brand-ink/72 sm:text-xs">{metric.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </Container>
      <ShapeDivider variant="curve" fill="#ffffff" className="h-14 sm:h-20 lg:h-28" />
    </section>
  );
}
