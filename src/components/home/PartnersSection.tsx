import Image from "next/image";

import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { partners } from "@/data/home";

function PartnerGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-5 pr-5" aria-hidden={hidden || undefined}>
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="flex h-28 w-64 shrink-0 items-center gap-4 rounded-xl border border-brand-navy/8 bg-white px-5 sm:w-72"
        >
          <Image
            src={partner.logo}
            alt=""
            width={150}
            height={146}
            sizes="72px"
            className="size-[4.5rem] shrink-0 object-contain grayscale transition-[filter,opacity] duration-300 hover:grayscale-0"
          />
          <span className="text-sm font-extrabold leading-5 text-brand-navy">{partner.name}</span>
        </div>
      ))}
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] text-brand-accent uppercase">Global Eğitim Ağı</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.045em] text-brand-navy sm:text-4xl">Güçlü iş birlikleri, geniş fırsatlar.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-brand-ink/72">Dünya çapında güvenilir eğitim kurumlarıyla öğrencilerimize daha fazla seçenek sunuyoruz.</p>
        </Reveal>
      </Container>

      <div
        tabIndex={0}
        aria-label="Eğitim partnerleri. Hareketi durdurmak için bu alana odaklanın."
        className="partner-marquee-viewport mt-12 rounded-sm [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
      >
        <div className="partner-marquee flex w-max">
          <PartnerGroup />
          <PartnerGroup hidden />
        </div>
      </div>
    </section>
  );
}
