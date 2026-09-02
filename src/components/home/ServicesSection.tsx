import { ArrowUpRight, FileCheck2, Globe2, GraduationCap, Languages } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { ShapeDivider } from "@/components/shared/ShapeDivider";
import { services } from "@/data/home";

const serviceIcons = {
  globe: Globe2,
  languages: Languages,
  graduation: GraduationCap,
  passport: FileCheck2,
} as const;

export function ServicesSection() {
  return (
    <section
      id="hizmetler"
      aria-label="ETL English hizmetleri"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_90%_18%,rgba(232,33,88,0.22),transparent_25%),linear-gradient(135deg,#032f4f_0%,#063f66_58%,#0b5c89_100%)] py-24 text-white sm:py-32"
    >
      <ShapeDivider position="top" variant="layeredWave" fill="#ffffff" className="h-10 sm:h-16" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-72 rounded-full border-[48px] border-white/5" />
      <Container className="relative z-20">
        <Reveal className="mb-10 max-w-xl sm:mb-14">
          <p className="text-xs font-extrabold tracking-[0.22em] text-brand-accent uppercase">Hizmetlerimiz</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] sm:text-5xl">Hedefinize giden yolu birlikte çizelim.</h2>
        </Reveal>
        <div className="grid border-y border-white/15 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <article
                  className="group relative flex min-h-[270px] flex-col border-b border-white/15 px-1 py-7 transition-colors hover:bg-white/8 md:min-h-[300px] md:px-7 md:[&:nth-child(even)]:border-l md:[&:nth-child(n+3)]:border-t md:[&:nth-child(odd)]:pl-0 md:[&:nth-child(even)]:border-white/15 xl:border-t-0 xl:border-l xl:border-white/15 xl:first:border-l-0 xl:first:pl-0 xl:last:pr-0"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-2xl border border-brand-accent/45 bg-brand-accent/12">
                      <Icon
                        aria-hidden="true"
                        className="size-6 text-brand-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6"
                        strokeWidth={1.7}
                      />
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold tracking-[-0.025em] text-white">{service.title}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-white/70">{service.description}</p>
                  <Link
                    href={service.href}
                    aria-label={`${service.title} hakkında bilgi alın`}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-bold text-white transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                  >
                    Bilgi Al
                    <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
      <ShapeDivider variant="curve" fill="#ffffff" className="h-12 sm:h-20" />
    </section>
  );
}
