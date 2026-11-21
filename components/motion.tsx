"use client";

import { m, type HTMLMotionProps, type Variants } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: EASE } },
};

export const popIn: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: EASE } },
};

export const stagger = (each = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: each, delayChildren: delay } },
});

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number; amount?: number };

/** Fades + lifts its children into view once, when scrolled to. */
export function Reveal({ delay = 0, y = 28, amount = 0.25, children, ...rest }: RevealProps) {
  return (
    <m.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.95, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </m.div>
  );
}

/** Container that staggers `variants`-driven children when it scrolls into view. */
export function Stagger({
  each = 0.08,
  delay = 0,
  amount = 0.2,
  children,
  ...rest
}: HTMLMotionProps<"div"> & { each?: number; delay?: number; amount?: number }) {
  return (
    <m.div
      variants={stagger(each, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </m.div>
  );
}

/** Mouse-follow spotlight: writes the pointer position into CSS vars used by `.spot`. */
export function spotlight(e: React.PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}
