"use client";

import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/shared/Container";
import { englishPrograms } from "@/data/education";

type EnglishProgramId = (typeof englishPrograms)[number]["id"];

export function EnglishGoalFinder() {
  const [activeId, setActiveId] = useState<EnglishProgramId>(englishPrograms[0].id);
  const reduceMotion = useReducedMotion();
  const activeProgram = englishPrograms.find((program) => program.id === activeId) ?? englishPrograms[0];

  return (
    <section id="english-goal-finder" aria-labelledby="english-goal-title" className="relative overflow-hidden bg-brand-navy-dark py-20 text-white sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-12 text-[clamp(12rem,28vw,25rem)] font-extrabold leading-none tracking-[-0.12em] text-white/[0.025]">{activeProgram.id === "general" ? "A1" : activeProgram.id.toUpperCase()}</div>
      <Container className="relative z-10">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }} className="max-w-2xl">
          <p className="text-xs font-extrabold tracking-[0.2em] text-brand-accent uppercase">ETL English Academy</p>
          <h2 id="english-goal-title" className="mt-4 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">İngilizceniz<br /><span className="text-brand-accent">Hedeflerinize Engel Olmasın.</span></h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg">Yurt dışı eğitimden akademik hedeflere kadar ihtiyacınıza uygun İngilizce programını birlikte belirleyelim.</p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <nav aria-label="İngilizce programları" className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
            {englishPrograms.map((program) => {
              const active = activeProgram.id === program.id;
              return <button key={program.id} type="button" role="tab" aria-selected={active} onClick={() => setActiveId(program.id)} className={`group flex min-w-max items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors lg:w-full ${active ? "bg-white text-brand-navy" : "text-white/55 hover:bg-white/8 hover:text-white"}`}><span className={`text-[10px] font-extrabold ${active ? "text-brand-accent" : "text-white/25"}`}>{program.number}</span><span className="text-sm font-extrabold">{program.label}</span></button>;
            })}
          </nav>

          <motion.div key={activeProgram.id} initial={reduceMotion ? false : { opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 sm:p-9">
            <div aria-hidden="true" className="absolute right-7 top-5 text-7xl font-extrabold leading-none tracking-[-0.1em] text-white/[0.05]">{activeProgram.number}</div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-accent">{activeProgram.category}</p>
            <h3 className="mt-5 max-w-xl text-3xl font-extrabold tracking-[-0.05em] sm:text-4xl">{activeProgram.headline}</h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base">{activeProgram.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {activeProgram.features.map((feature) => <span key={feature} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-2 text-xs font-bold text-white/75"><Check aria-hidden="true" className="size-3 text-brand-accent" />{feature}</span>)}
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-bold text-white/50">Program kapsamı <span className="ml-2 text-white">{activeProgram.level}</span></p>
              <Link href={activeProgram.href} className="group inline-flex items-center gap-2 text-sm font-extrabold text-white hover:text-brand-accent">Programı İncele <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between"><p>Hangi programın size uygun olduğundan emin değil misiniz?</p><Link href="#danismanlik" className="font-extrabold text-white hover:text-brand-accent">Seviyenizi birlikte değerlendirelim <ArrowUpRight aria-hidden="true" className="ml-1 inline size-4" /></Link></div>
      </Container>
    </section>
  );
}
