import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { ShapeDivider } from "@/components/shared/ShapeDivider";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

import { ConsultationForm } from "./ConsultationForm";

export function ConsultationCTA() {
  return (
    <section id="danismanlik" className="relative isolate scroll-mt-24 overflow-hidden bg-[linear-gradient(125deg,#063f66_0%,#032f4f_72%)] pb-36 pt-20 text-white sm:pb-44 sm:pt-28">
      <div aria-hidden="true" className="absolute -top-32 -right-24 -z-10 size-96 rounded-full border border-white/8" />
      <div aria-hidden="true" className="absolute -right-4 bottom-14 -z-10 size-56 rounded-full border border-brand-accent/20" />
      <svg aria-hidden="true" viewBox="0 0 620 260" className="absolute right-0 bottom-16 -z-10 hidden h-64 w-[42rem] text-white/8 lg:block">
        <path d="M20 218C142 52 354 12 596 84" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 9" />
        <circle cx="20" cy="218" r="5" fill="currentColor" />
        <circle cx="596" cy="84" r="5" fill="currentColor" />
      </svg>

      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="max-w-4xl">
          <p className="text-xs font-extrabold tracking-[0.2em] text-brand-accent uppercase">Ücretsiz Ön Görüşme</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Hayalinizdeki Eğitime<br />Birlikte Başlayalım.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
            Size en uygun ülke, okul ve eğitim programını birlikte belirleyelim.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={siteConfig.phone.href} className={cn(buttonVariants({ size: "lg" }), "group") }>
              Ücretsiz Danışmanlık Al
              <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={siteConfig.phone.href}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-white/18 px-7 font-bold text-white transition-colors hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone aria-hidden="true" className="size-4" />
              {siteConfig.phone.display}
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <ConsultationForm />
        </Reveal>
      </Container>
      <ShapeDivider variant="layeredWave" fill="#032f4f" className="h-20 sm:h-28 lg:h-32" />
    </section>
  );
}
