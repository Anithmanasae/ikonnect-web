"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Cpu, Eye, Play, Settings } from "lucide-react";
import Particles from "./Particles";
import Ribbon from "./Ribbon";
import heroImg from "@/public/images/hero-ai.webp";

const CARDS = [
  { icon: Cpu, title: "AI", sub: "Smart Solutions" },
  { icon: Settings, title: "Automation", sub: "Higher Efficiency" },
  { icon: Eye, title: "Computer Vision", sub: "Visual Intelligence" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Scroll parallax
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentFade = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Pointer parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const artX = useTransform(sx, (v) => v * 14);
  const artYm = useTransform(sy, (v) => v * 10);
  const cardX = useTransform(sx, (v) => v * -10);
  const cardYm = useTransform(sy, (v) => v * -8);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section id="home" ref={ref} className="hero" onPointerMove={onMove}>
      <div className="hero__bg" aria-hidden="true">
        <Particles className="hero__particles" />
        <div className="hero__glow" />
      </div>

      <Ribbon id="hero-l" className="hero__ribbon-left" />
      <Ribbon id="hero-r" className="hero__ribbon-right" flip strands={11} />

      <div className="container hero__inner">
        <m.div className="hero__content" style={{ y: contentY, opacity: contentFade }}>
          {/* Intro animations are pure CSS so they start at first paint, not after JavaScript loads. */}
          <p className="hero__eyebrow intro intro--eyebrow">
            AI <i>|</i> Data <i>|</i> Automation <i>|</i> Computer Vision
          </p>

          <h1>
            <span className="line-mask">
              <span className="hero__l1 intro intro--line" style={{ animationDelay: "0.2s" }}>
                Not Just Technology,
              </span>
            </span>
            <span className="line-mask">
              <span className="hero__l2 intro intro--line" style={{ animationDelay: "0.32s" }}>
                It’s a <span className="text-grad">Smarter</span>
              </span>
            </span>
            <span className="line-mask">
              <span className="hero__l2 intro intro--line" style={{ animationDelay: "0.44s" }}>
                Way to <span className="text-grad">Grow.</span>
              </span>
            </span>
          </h1>

          <p className="hero__lead intro intro--up" style={{ animationDelay: "0.4s" }}>
            Ikonnect Talentum Arrow Pvt. Ltd. builds AI-powered solutions that transform businesses, automate
            processes, and bring intelligence to every frame.
          </p>

          <div className="hero__actions intro intro--up" style={{ animationDelay: "0.55s" }}>
            <a href="#services" className="btn btn--primary">
              Explore Our AI Solutions <ArrowRight size={18} strokeWidth={2.4} className="arrow" />
            </a>
            <a href="#about" className="btn btn--ghost">
              <span className="play-dot">
                <Play size={12} fill="currentColor" strokeWidth={0} />
              </span>
              Watch Our Story
            </a>
          </div>
        </m.div>

        <m.div className="hero__art" style={{ y: artY }}>
          <div className="hero__art-intro intro intro--art">
            <m.div className="hero__art-inner" style={{ x: artX, y: artYm }}>
            <Image
              src={heroImg}
              alt="AI visualisation – a digital human profile surrounded by neural circuitry over a city skyline"
              fill
              sizes="(max-width: 900px) 100vw, 56vw"
              quality={90}
              loading="eager"
              fetchPriority="high"
              className="hero__art-img"
            />
            {/* The image paints at full strength immediately (counts for LCP); this veil fades off it. */}
            <span className="hero__art-veil" aria-hidden="true" />
            <span className="hero__ping" aria-hidden="true">
              <span />
              <span />
            </span>
            </m.div>
          </div>
        </m.div>

        <m.div className="hero__cards" style={{ y: cardsY }}>
          {CARDS.map(({ icon: Icon, title, sub }, i) => (
            <div
              key={title}
              className={`hero-card-wrap hero-card-wrap--${i + 1} intro intro--card`}
              style={{ animationDelay: `${0.5 + i * 0.12}s` }}
            >
              <m.div style={{ x: cardX, y: cardYm }}>
                <div className="hero-card" style={{ animationDelay: `${i * -1.6}s` }}>
                  <Icon className="hero-card__icon" strokeWidth={1.6} />
                  <div>
                    <strong>{title}</strong>
                    <span>{sub}</span>
                  </div>
                </div>
              </m.div>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
