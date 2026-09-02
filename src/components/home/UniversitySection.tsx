import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { universities } from "@/data/home";

export function UniversitySection() {
  return (
    <section id="universite" className="relative scroll-mt-24 bg-brand-mist py-20 sm:py-28">
      <span aria-hidden="true" className="absolute top-8 right-6 text-[clamp(5rem,16vw,14rem)] leading-none font-extrabold tracking-[-0.08em] text-brand-navy/[0.035]">UNI</span>
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Sınavsız Üniversite"
            title="Hayalinizdeki Üniversiteye Dünyanın Her Yerinden Ulaşın"
            description="Yurt dışında üniversite hedefiniz için ülke seçiminden kabul sürecine kadar kişisel bir başvuru stratejisi oluşturun."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {universities.map((university, index) => (
            <Reveal key={university.name} delay={index * 0.08}>
              <Link
                href={university.href}
                className="group relative block aspect-[16/10] overflow-hidden rounded-2xl bg-brand-navy shadow-soft transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <Image
                  src={university.image}
                  alt=""
                  fill
                  sizes="(max-width: 1023px) 100vw, min(33vw, 440px)"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy-dark via-brand-navy/15 to-transparent" />
                <span className="absolute top-5 right-5 text-sm font-extrabold tracking-[0.18em] text-white/70">{university.code}</span>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="max-w-xs text-2xl font-extrabold tracking-[-0.035em] text-white">{university.name}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white/72 transition-colors group-hover:text-white">
                    Programları İncele
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
