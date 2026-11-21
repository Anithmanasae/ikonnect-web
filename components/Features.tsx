"use client";

import { m } from "framer-motion";
import { Globe, Layers, ShieldCheck, Users } from "lucide-react";
import { Stagger, fadeUp } from "./motion";

const ITEMS = [
  { icon: Users, title: "Skilled Global Talent", text: "A diverse and qualified workforce", teal: true },
  { icon: ShieldCheck, title: "High-Quality Data", text: "Accurate, compliant and AI-ready datasets" },
  { icon: Globe, title: "Multilingual & Multicultural", text: "A wide range of languages and regional expertise" },
  { icon: Layers, title: "Scalable Delivery", text: "From pilot projects to large-scale programs" },
];

export default function Features() {
  return (
    <section className="features" aria-label="Why Ikonnect">
      <Stagger className="container features__grid" each={0.1} amount={0.4}>
        {ITEMS.map(({ icon: Icon, title, text, teal }) => (
          <m.div key={title} className="feature" variants={fadeUp}>
            <span className={`feature__icon ${teal ? "is-teal" : ""}`}>
              <Icon strokeWidth={1.5} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </m.div>
        ))}
      </Stagger>
    </section>
  );
}
