"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Cpu, Eye, Play, Settings } from "lucide-react";
import Particles from "./Particles";
import Ribbon from "./Ribbon";
import { EASE } from "./motion";

const CARDS = [
  { icon: Cpu, title: "AI", sub: "Smart Solutions" },
  { icon: Settings, title: "Automation", sub: "Higher Efficiency" },
  { icon: Eye, title: "Computer Vision", sub: "Visual Intelligence" },
];

const line = {
  hidden: { y: "110%" },
  show: (i: number) => ({ y: "0%", transition: { duration: 1.05, delay: 0.25 + i * 0.12, ease: EASE } }),
};

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
        <motion.div className="hero__content" style={{ y: contentY, opacity: contentFade }}>
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.28em" }}
            transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
          >
            AI <i>|</i> Data <i>|</i> Automation <i>|</i> Computer Vision
          </motion.p>

          <motion.h1 initial="hidden" animate="show">
            <span className="line-mask">
              <motion.span className="hero__l1" variants={line} custom={0}>
                Not Just Technology,
              </motion.span>
            </span>
            <span className="line-mask">
              <motion.span className="hero__l2" variants={line} custom={1}>
                It’s a <span className="text-grad">Smarter</span>
              </motion.span>
            </span>
            <span className="line-mask">
              <motion.span className="hero__l2" variants={line} custom={2}>
                Way to <span className="text-grad">Grow.</span>
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: EASE }}
          >
            Ikonnect Talentum Arrow Pvt. Ltd. builds AI-powered solutions that transform businesses, automate
            processes, and bring intelligence to every frame.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: EASE }}
          >
            <a href="#services" className="btn btn--primary">
              Explore Our AI Solutions <ArrowRight size={18} strokeWidth={2.4} className="arrow" />
            </a>
            <a href="#about" className="btn btn--ghost">
              <span className="play-dot">
                <Play size={12} fill="currentColor" strokeWidth={0} />
              </span>
              Watch Our Story
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="hero__art" style={{ y: artY }}>
          <motion.div
            className="hero__art-inner"
            style={{ x: artX, y: artYm }}
            initial={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.6, delay: 0.15, ease: EASE }}
          >
            <Image
              src="/images/hero-ai.webp"
              alt="AI visualisation – a digital human profile surrounded by neural circuitry over a city skyline"
              fill
              sizes="(max-width: 900px) 100vw, 56vw"
              quality={90}
              loading="eager"
              fetchPriority="high"
              className="hero__art-img"
            />
            <span className="hero__ping" aria-hidden="true">
              <span />
              <span />
            </span>
          </motion.div>
        </motion.div>

        <motion.div className="hero__cards" style={{ y: cardsY }}>
          {CARDS.map(({ icon: Icon, title, sub }, i) => (
            <motion.div
              key={title}
              className={`hero-card-wrap hero-card-wrap--${i + 1}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.7 + i * 0.15, ease: EASE }}
            >
              <motion.div style={{ x: cardX, y: cardYm }}>
                <div className="hero-card" style={{ animationDelay: `${i * -1.6}s` }}>
                  <Icon className="hero-card__icon" strokeWidth={1.6} />
                  <div>
                    <strong>{title}</strong>
                    <span>{sub}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
