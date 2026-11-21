"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Renders the final value on the server (good for SEO / no-JS) and counts up from 0 once visible. */
export default function CountUp({ to, suffix = "", duration = 2.2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const started = useRef(false);

  useIsoLayoutEffect(() => {
    if (!ref.current || started.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    ref.current.textContent = `0${suffix}`;
  }, [suffix]);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, duration]);

  return (
    <span ref={ref}>
      {to}
      {suffix}
    </span>
  );
}
