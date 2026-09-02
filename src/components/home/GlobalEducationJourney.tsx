"use client";

import { ArrowUpRight, Check, Plane } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/shared/Container";
import { ShapeDivider } from "@/components/shared/ShapeDivider";
import { journeySteps } from "@/data/education";

export function GlobalEducationJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="global-journey" aria-labelledby="journey-title" className="relative overflow-hidden bg-white pb-24 pt-20 sm:pb-32 sm:pt-28">
      <Container className="relative z-10">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }} className="max-w-2xl">
          <p className="text-xs font-extrabold tracking-[0.2em] text-brand-accent uppercase">Yurt Dışı Eğitim Yolculuğu</p>
          <h2 id="journey-title" className="mt-4 text-4xl font-extrabold tracking-[-0.055em] text-brand-navy sm:text-5xl">Hayalinizdeki Eğitime<br />Giden Yolu <span className="text-brand-accent">Birlikte Planlayalım.</span></h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-brand-ink/65 sm:text-lg">Doğru ülke ve program seçiminden başvuru, vize ve konaklama süreçlerine kadar yurt dışı eğitim yolculuğunuzu adım adım planlayın.</p>
        </motion.div>

        <div className="relative mt-16 lg:mt-24">
          <svg aria-hidden="true" viewBox="0 0 1200 150" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-9 hidden h-28 w-full text-brand-navy/15 lg:block">
            <path d="M20 72C160 15 245 20 370 72S610 130 735 72s210-57 445 0" fill="none" stroke="currentColor" strokeDasharray="5 9" strokeWidth="1.5" />
            <path d="M20 72C160 15 245 20 370 72S610 130 735 72s210-57 445 0" fill="none" stroke="currentColor" strokeDasharray="180 1020" strokeWidth="2" className="journey-progress-path" />
          </svg>
          <div className="absolute top-5 bottom-5 left-5 w-px bg-brand-navy/12 lg:hidden" />
          <div className="absolute top-5 bottom-5 left-5 w-px origin-top bg-brand-accent/70 lg:hidden" style={{ transform: `scaleY(${(activeStep + 1) / journeySteps.length})` }} />
          <ol className="grid gap-8 lg:grid-cols-6 lg:gap-4">
            {journeySteps.map((step, index) => {
              const active = activeStep === index;
              return (
                <motion.li key={step.number} initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="relative grid grid-cols-[2.5rem_1fr] gap-4 lg:block">
                  <button type="button" aria-label={`${step.number} ${step.title}`} aria-pressed={active} onClick={() => setActiveStep(index)} className={`relative z-10 grid size-10 place-items-center rounded-full border-2 bg-white text-[10px] font-extrabold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent lg:mb-8 ${active ? "border-brand-accent bg-brand-accent text-white" : "border-brand-navy/15 text-brand-navy/45 hover:border-brand-accent hover:text-brand-accent"}`}>
                    {active ? <Check aria-hidden="true" className="size-4" strokeWidth={3} /> : step.number}
                  </button>
                  <div className="pt-0.5 lg:pr-3">
                    <h3 className={`text-base font-extrabold tracking-[-0.02em] transition-colors ${active ? "text-brand-accent" : "text-brand-navy"}`}>{step.title}</h3>
                    <p className={`mt-2 text-sm leading-6 transition-colors ${active ? "text-brand-ink/75" : "text-brand-ink/50"}`}>{step.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand-navy/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-sm font-bold text-brand-navy/60"><Plane aria-hidden="true" className="size-4 text-brand-accent" /> Hayalinizdeki ülkeye giden yol, doğru planlamayla başlar.</p>
          <Link href="#danismanlik" className="group inline-flex items-center gap-2 text-sm font-extrabold text-brand-navy hover:text-brand-accent">Yolculuğunuzu Planlayalım <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
        </div>
      </Container>
      <ShapeDivider variant="curve" fill="#032f4f" className="h-12 sm:h-20" />
    </section>
  );
}
