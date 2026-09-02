import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { experience } from "@/data/home";

export function ExperienceSection() {
  return (
    <section id="deneyim" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-28">
      <span aria-hidden="true" className="absolute top-1/2 left-[-0.04em] -translate-y-1/2 text-[clamp(10rem,28vw,28rem)] leading-none font-extrabold tracking-[-0.09em] text-brand-navy/[0.028]">
        {experience.years}+
      </span>
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        <Reveal>
          <p className="text-xs font-extrabold tracking-[0.2em] text-brand-accent uppercase">{experience.years}+ Yıllık Tecrübe</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.055em] text-brand-navy sm:text-5xl lg:text-6xl">
            Deneyimimiz,<br />Geleceğiniz İçin.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-brand-ink/65 sm:text-lg sm:leading-8">
            ETL English, yurt dışı eğitim danışmanlığı ve İngilizce eğitimi alanındaki uzmanlığıyla her öğrencinin yolculuğunu kişisel bir planla yönetir.
          </p>
          <ul className="mt-8 space-y-4">
            {experience.advantages.map((advantage) => (
              <li key={advantage} className="flex items-center gap-3 font-bold text-brand-navy">
                <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-brand-accent" />
                {advantage}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="relative aspect-[5/6] overflow-hidden rounded-[6rem_2rem_2rem_2rem] shadow-soft">
            <Image
              src="/images/hero-consultation.png"
              alt="Vize ve seyahat belgeleri için profesyonel danışmanlık süreci"
              fill
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-3 -bottom-5 rounded-2xl bg-brand-accent px-6 py-5 text-white shadow-xl sm:right-8">
            <p className="text-3xl font-extrabold">{experience.years}+</p>
            <p className="text-xs font-bold text-white/75">Yıllık bilgi birikimi</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
