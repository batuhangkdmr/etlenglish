import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { ShapeDivider } from "@/components/shared/ShapeDivider";
import { mastersAdvantages } from "@/data/home";
import { cn } from "@/lib/utils";

export function MastersSection() {
  return (
    <section id="yuksek-lisans" className="relative scroll-mt-24 bg-white pb-32 pt-20 sm:pb-40 sm:pt-28">
      <Container>
        <Reveal className="grid overflow-hidden rounded-[2rem] bg-brand-navy shadow-[0_30px_90px_-45px_rgba(3,47,79,0.7)] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[24rem] lg:min-h-[40rem]">
            <Image
              src="/images/masters-campus.jpg"
              alt="Uluslararası bir kampüste birlikte çalışan öğrenciler"
              fill
              sizes="(max-width: 1023px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-navy/45 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-brand-navy/20" />
          </div>

          <div className="relative flex flex-col justify-center px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
            <span aria-hidden="true" className="absolute -right-8 -bottom-16 text-[11rem] leading-none font-extrabold text-white/[0.035]">MA</span>
            <div className="relative">
              <p className="text-xs font-extrabold tracking-[0.2em] text-brand-accent uppercase">Yüksek Lisans</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">Kariyerinizi Dünyaya Taşıyın</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                Uluslararası üniversitelerde yüksek lisans fırsatlarını uzman danışmanlarımızla keşfedin.
              </p>
              <ul className="mt-8 space-y-4">
                {mastersAdvantages.map((advantage) => (
                  <li key={advantage} className="flex items-center gap-3 text-sm font-bold sm:text-base">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-accent text-white">
                      <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />
                    </span>
                    {advantage}
                  </li>
                ))}
              </ul>
              <Link
                href="#danismanlik"
                className={cn(buttonVariants({ size: "lg" }), "group mt-9")}
              >
                Yüksek Lisans Programlarını Keşfet
                <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
      <ShapeDivider variant="asymmetric" fill="#032f4f" className="h-16 sm:h-24 lg:h-28" />
    </section>
  );
}
