"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Ribbon from "./Ribbon";
import mountainImg from "@/public/images/cta-mountain.webp";
import { Stagger, fadeUp } from "./motion";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  return (
    <section id="cta" ref={ref} className="cta">
      <div className="cta__media" aria-hidden="true">
        <m.div className="cta__img" style={{ y, scale }}>
          <Image src={mountainImg} alt="" fill sizes="(max-width: 900px) 100vw, 55vw" quality={90} />
        </m.div>
        <span className="cta__sun" />
      </div>
      <Ribbon id="cta-l" className="cta__ribbon-l" />
      <Ribbon id="cta-r" className="cta__ribbon-r" flip strands={7} />

      <Stagger className="container cta__inner" each={0.12} amount={0.5}>
        <m.h2 variants={fadeUp}>
          Build Your AI Future
          <br />
          <span className="text-grad text-grad--teal">With Us</span>
        </m.h2>
        <m.span className="cta__divider" variants={fadeUp} aria-hidden="true" />
        <m.div className="cta__copy" variants={fadeUp}>
          <p>Have a project in mind? Let’s discuss how our AI and data services can help you achieve more, faster.</p>
          <a href="#contact" className="btn btn--primary btn--sm">
            Get in Touch <ArrowRight size={17} strokeWidth={2.4} className="arrow" />
          </a>
        </m.div>
      </Stagger>
    </section>
  );
}
