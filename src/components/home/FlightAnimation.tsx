"use client";

import { motion, useReducedMotion } from "motion/react";

const bannerSegments = Array.from({ length: 10 }, (_, index) => index);

export function FlightAnimation() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      <motion.div
        initial={{ x: "-12vw", y: "78vh", scale: 1.05, opacity: 0 }}
        animate={{
          x: ["-12vw", "10vw", "42vw", "75vw", "112vw"],
          y: ["78vh", "70vh", "52vh", "30vh", "8vh"],
          scale: [1.05, 1.03, 1, 0.91, 0.82],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 8.5,
          delay: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: [0.33, 0.05, 0.2, 1],
          times: [0, 0.04, 0.45, 0.78, 1],
        }}
        className="absolute top-0 left-0 h-[clamp(70px,8vw,110px)] w-[clamp(290px,32vw,520px)] [perspective:1000px]"
      >
        <div className="relative size-full">
        <div className="hero-flight-banner absolute top-1/2 left-0 h-[clamp(35px,4vw,65px)] w-[clamp(150px,20vw,300px)] -translate-y-1/2 overflow-hidden rounded-[0.25rem_0.8rem_0.8rem_0.25rem] border border-brand-navy/10 bg-white/95 shadow-[0_10px_25px_-16px_rgba(3,47,79,0.55)]">
          <div className="absolute inset-0 flex">
            {bannerSegments.map((segment) => (
              <span key={segment} className="hero-flight-banner-segment h-full flex-1 border-r border-brand-navy/5 bg-linear-to-b from-white via-brand-mist to-white" />
            ))}
          </div>
          <span className="relative z-10 flex h-full items-center justify-center gap-1.5 px-2 text-[10px] font-extrabold tracking-[0.1em] text-brand-navy uppercase sm:text-base">
            <strong>ETL</strong><em className="not-italic text-brand-accent">English</em>
          </span>
        </div>

        <svg aria-hidden="true" viewBox="0 0 100 80" preserveAspectRatio="none" className="absolute top-1/2 left-[57%] z-10 h-14 w-[18%] -translate-y-1/2 overflow-visible text-brand-navy/40 sm:h-20">
          <path d="M0 22C28 14 54 16 100 34M0 58C30 65 60 61 100 46" fill="none" stroke="currentColor" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="absolute top-1/2 right-0 z-20 w-[clamp(100px,11vw,230px)] -translate-y-1/2 rotate-[-11deg] [transform-style:preserve-3d]">
          {/* Existing transparent aircraft asset, kept as a single decorative plane instance. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/plane/plane_PNG5253.png" alt="" className="block h-auto w-full object-contain drop-shadow-[0_14px_12px_rgba(3,47,79,0.2)]" />
        </div>
        </div>
      </motion.div>
    </div>
  );
}
