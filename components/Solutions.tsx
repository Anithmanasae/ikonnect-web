"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Ribbon from "./Ribbon";
import robotImg from "@/public/images/banner-robot.webp";
import visionImg from "@/public/images/banner-vision.webp";
import { EASE, Stagger, fadeUp } from "./motion";

export default function Solutions() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const leftX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section id="solutions" className="solutions">
      <Ribbon id="sol-l" className="solutions__ribbon" />
      <div className="container">
        <m.div
          ref={ref}
          className="sol"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <div className="sol__robot">
            <m.div className="sol__img" style={{ x: leftX }}>
              <Image
                src={robotImg}
                alt="Industrial robotic arm on an automated production line"
                fill
                sizes="(max-width: 900px) 100vw, 30vw"
                quality={90}
              />
            </m.div>
          </div>

          <Stagger className="sol__copy" each={0.1} delay={0.2} amount={0.4}>
            <m.h2 variants={fadeUp}>
              <span className="text-grad">AI Solutions</span> with
              <br />
              Real-World Impact
            </m.h2>
            <m.p variants={fadeUp}>
              From computer vision to intelligent automation, our AI solutions are designed to deliver accuracy, speed
              and efficiency — at scale.
            </m.p>
            <m.div variants={fadeUp}>
              <a href="#contact" className="btn btn--primary btn--sm">
                View Case Studies <ArrowRight size={17} strokeWidth={2.4} className="arrow" />
              </a>
            </m.div>
          </Stagger>

          <div className="sol__vision">
            <m.div className="sol__img" style={{ x: rightX }}>
              <Image
                src={visionImg}
                alt="Computer vision detecting vehicles in traffic and an analyst reviewing medical scans"
                fill
                sizes="(max-width: 900px) 100vw, 52vw"
                quality={90}
              />
            </m.div>
            <span className="sol__scan" aria-hidden="true">
              <span />
            </span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
