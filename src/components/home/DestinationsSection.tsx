import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { ShapeDivider } from "@/components/shared/ShapeDivider";
import { destinations } from "@/data/home";
import { cn } from "@/lib/utils";

const cardLayouts = [
  "lg:col-span-2 lg:row-span-2 lg:min-h-[38rem]",
  "lg:min-h-[18rem]",
  "lg:min-h-[18rem]",
  "lg:min-h-[18rem]",
  "lg:min-h-[18rem]",
  "lg:col-span-4 lg:min-h-[21rem]",
] as const;

export function DestinationsSection() {
  return (
    <section id="destinasyonlar" className="relative isolate scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_8%_22%,rgba(232,33,88,0.26),transparent_25%),linear-gradient(135deg,#032f4f_0%,#063f66_62%,#0b5c89_100%)] py-24 text-white sm:py-32">
      <ShapeDivider position="top" variant="asymmetric" fill="#ffffff" className="h-12 sm:h-20" />
      <div className="pointer-events-none absolute -right-28 top-28 size-80 rounded-full border-[52px] border-white/5" />
      <Container className="relative z-20">
        <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.16em] text-brand-accent uppercase">Dil Okulları</p>
            <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white/55">ETL English</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Yurt Dışı Dil Okulları ile<br />Dünya&apos;ya Açılın
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-white/75">
            İngilizce eğitiminizi uluslararası bir deneyime dönüştürecek seçkin destinasyonları keşfedin.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[18rem] gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-auto">
          {destinations.map((destination, index) => (
            <Reveal key={destination.name} delay={(index % 3) * 0.06} className={cn("min-h-[18rem]", cardLayouts[index])}>
              <Link
                href={destination.href}
                className="group relative block size-full overflow-hidden rounded-2xl bg-brand-navy-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                <Image
                  src={destination.image}
                  alt=""
                  fill
                  sizes={index === destinations.length - 1 ? "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, min(100vw, 1400px)" : index === 0 ? "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, min(50vw, 700px)" : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, min(25vw, 350px)"}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy-dark via-brand-navy-dark/15 to-transparent transition-colors group-hover:from-brand-navy-dark/90" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-2xl font-extrabold tracking-[-0.035em]">{destination.name}</p>
                  <span className="mt-2 flex items-center gap-2 text-xs font-bold text-white/72">
                    Dil Okullarını İncele
                    <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
      <ShapeDivider variant="layeredWave" fill="#ffffff" className="h-12 sm:h-20" />
    </section>
  );
}
