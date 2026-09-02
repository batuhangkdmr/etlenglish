"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import { Container } from "@/components/shared/Container";
import { processSteps } from "@/data/home";

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 0.8", "end 0.65"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section ref={sectionRef} className="bg-brand-mist py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold tracking-[0.2em] text-brand-accent uppercase">Yol Haritanız</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-brand-navy sm:text-5xl">
            Yurt Dışı Eğitim Yolculuğunuz<br className="hidden sm:block" /> 4 Adımda Başlasın
          </h2>
        </div>

        <div className="relative mt-14 lg:mt-20">
          <div aria-hidden="true" className="absolute top-5 bottom-5 left-5 w-px bg-brand-navy/12 lg:inset-x-0 lg:top-5 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto" />
          <motion.div
            aria-hidden="true"
            style={reduceMotion ? undefined : { scaleY: progress }}
            className="absolute top-5 bottom-5 left-5 w-px origin-top bg-brand-accent lg:hidden"
          />
          <motion.div
            aria-hidden="true"
            style={reduceMotion ? undefined : { scaleX: progress }}
            className="absolute inset-x-0 top-5 hidden h-px origin-left bg-brand-accent lg:block"
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, index) => (
              <motion.li
                key={step.number}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative grid grid-cols-[2.5rem_1fr] gap-5 lg:block"
              >
                <span className="relative z-10 grid size-10 place-items-center rounded-full border border-brand-accent/30 bg-brand-mist text-xs font-extrabold text-brand-accent lg:mb-8">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-extrabold tracking-[-0.025em] text-brand-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-ink/72">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
