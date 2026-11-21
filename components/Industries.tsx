"use client";

import { m } from "framer-motion";
import {
  Building2,
  CarFront,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Plus,
  ShoppingCart,
  SquarePlay,
} from "lucide-react";
import Ribbon from "./Ribbon";
import { Reveal, Stagger, popIn, spotlight } from "./motion";

const INDUSTRIES = [
  { icon: CarFront, label: ["Automotive", "& Mobility"] },
  { icon: HeartPulse, label: ["Healthcare", "& Life Sciences"] },
  { icon: Factory, label: ["Manufacturing", "& Industrial"] },
  { icon: ShoppingCart, label: ["Retail &", "E‑commerce"] },
  { icon: GraduationCap, label: ["Education", "& EdTech"] },
  { icon: SquarePlay, label: ["Media &", "Entertainment"] },
  { icon: Landmark, label: ["Banking &", "Financial Services"] },
  { icon: Building2, label: ["Smart Cities", "& Surveillance"] },
];

export default function Industries() {
  return (
    <section id="industries" className="industries">
      <Ribbon id="ind-l" className="industries__ribbon-l" />
      <Ribbon id="ind-r" className="industries__ribbon-r" flip />
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Industries We Serve</p>
          <h2 className="section-title">Tailored AI for Every Industry</h2>
        </Reveal>

        <Stagger className="ind-grid" each={0.06} amount={0.3}>
          {INDUSTRIES.map(({ icon: Icon, label }) => (
            <m.a
              key={label[0]}
              href="#contact"
              className="ind spot"
              variants={popIn}
              onPointerMove={spotlight}
            >
              <Icon strokeWidth={1.6} />
              <span>
                {label[0]}
                <br />
                {label[1]}
              </span>
            </m.a>
          ))}
          <m.a href="#contact" className="ind ind--more spot" variants={popIn} onPointerMove={spotlight}>
            <Plus strokeWidth={1.8} />
            <span>And More</span>
          </m.a>
        </Stagger>
      </div>
    </section>
  );
}
