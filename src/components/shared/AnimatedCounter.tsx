"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

const formatter = new Intl.NumberFormat("tr-TR");

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(reduceMotion ? value : 0);
  const display = useTransform(count, (latest) => `${formatter.format(Math.round(latest))}${suffix}`);

  useEffect(() => {
    if (reduceMotion) {
      count.set(value);
      return;
    }

    if (!isInView) return;

    const controls = animate(count, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [count, isInView, reduceMotion, value]);

  return (
    <span ref={ref}>
      <span className="sr-only">{`${formatter.format(value)}${suffix}`}</span>
      <motion.span aria-hidden="true">{display}</motion.span>
    </span>
  );
}
