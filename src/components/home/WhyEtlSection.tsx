import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ShapeDivider } from "@/components/shared/ShapeDivider";
import { whyEtlAdvantages } from "@/data/home";
import { cn } from "@/lib/utils";

export function WhyEtlSection() {
  return (
    <section className="relative bg-brand-mist pb-32 pt-20 sm:pb-40 sm:pt-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="relative aspect-[4/5] w-[84%] overflow-hidden rounded-[2rem_2rem_7rem_2rem] bg-brand-navy shadow-soft">
            <Image
              src="/images/experience-consultancy.jpg"
              alt="Uluslararası eğitim seçeneklerini birlikte değerlendiren danışmanlık ekibi"
              fill
              sizes="(max-width: 1023px) 84vw, 38vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-10 max-w-[15rem] rounded-2xl bg-white p-5 shadow-[0_24px_60px_-28px_rgba(3,47,79,0.5)]">
            <p className="text-4xl font-extrabold tracking-[-0.06em] text-brand-accent">25+</p>
            <p className="mt-1 text-sm leading-5 font-bold text-brand-navy">Yıllık danışmanlık deneyimi</p>
          </div>
          <span aria-hidden="true" className="absolute -top-5 -right-3 -z-10 size-32 rounded-full border border-brand-accent/20" />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Neden ETL?"
            title="Hayalinizdeki Eğitime Doğru Rota ile Ulaşın"
            description="ETL English; okul seçiminden başvuru sürecine, vizeden konaklamaya kadar yurt dışı eğitim yolculuğunuzun her adımında size rehberlik eder."
          />
          <ul className="mt-8 space-y-4">
            {whyEtlAdvantages.map((advantage) => (
              <li key={advantage} className="flex items-center gap-3 font-bold text-brand-navy">
                <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-brand-accent" />
                {advantage}
              </li>
            ))}
          </ul>
          <Link href="#deneyim" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "group mt-9")}>
            ETL English&apos;i Tanıyın
            <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>
      <ShapeDivider variant="layeredWave" fill="#063f66" className="h-16 sm:h-24 lg:h-28" />
    </section>
  );
}
