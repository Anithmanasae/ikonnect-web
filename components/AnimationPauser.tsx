"use client";

import { useEffect } from "react";

/**
 * Pauses every looping CSS animation (ribbons, glows, shimmer, pings) inside sections
 * that are off-screen, so the browser only spends work on what the visitor can see.
 */
export default function AnimationPauser() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".hero, .features, .mid-band > section, .stats, .cta, .footer");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("anim-paused", !e.isIntersecting)),
      { rootMargin: "150px 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return null;
}
