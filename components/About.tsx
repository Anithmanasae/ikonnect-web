"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { Cpu, Globe, ShieldCheck, Users } from "lucide-react";
import Ribbon from "./Ribbon";
import { EASE, Stagger, fadeUp } from "./motion";

const POINTS = [
  { icon: Cpu, label: ["AI Data", "Expertise"] },
  { icon: Globe, label: ["Global", "Delivery"] },
  { icon: ShieldCheck, label: ["Quality &", "Compliance"] },
  { icon: Users, label: ["People", "Centric"] },
];

export default function About() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: mediaRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1.02]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="about" className="about">
      <Ribbon id="about-l" className="about__ribbon" />
      <div className="container about__grid">
        {/* IntersectionObserver ignores fully clipped targets, so observe an unclipped wrapper. */}
        <m.div
          ref={mediaRef}
          className="about__media-wrap"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <m.div
            className="about__media"
            variants={{
              hidden: { clipPath: "inset(0% 100% 0% 0% round 16px)" },
              show: { clipPath: "inset(0% 0% 0% 0% round 16px)", transition: { duration: 1.4, ease: EASE } },
            }}
          >
            <m.div className="about__img" style={{ scale, y }}>
              <Image
                src="/images/about-building.webp"
                alt="Ikonnect Talentum Arrow office building at dusk"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                quality={90}
              />
            </m.div>
            <span className="about__shine" aria-hidden="true" />
          </m.div>
        </m.div>

        <Stagger className="about__copy" each={0.1} amount={0.3}>
          <m.p className="eyebrow" variants={fadeUp}>
            About Us
          </m.p>
          <m.h2 variants={fadeUp}>
            Ikonnect <span className="text-green">Talentum Arrow</span>
            <br />
            Private Limited
          </m.h2>
          <m.p className="about__text" variants={fadeUp}>
            A technology-enabled data services company supporting the global AI ecosystem. We combine skilled human
            intelligence, robust processes and domain expertise to deliver high-quality training, evaluation and data
            solutions for AI and machine learning applications.
          </m.p>
          <m.ul className="about__points" variants={fadeUp}>
            {POINTS.map(({ icon: Icon, label }) => (
              <li key={label[0]} className="point">
                <Icon strokeWidth={1.5} />
                <span>
                  {label[0]}
                  <br />
                  {label[1]}
                </span>
              </li>
            ))}
          </m.ul>
        </Stagger>
      </div>
    </section>
  );
}
