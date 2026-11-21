"use client";

import { m } from "framer-motion";
import { CircleCheck, Clock, Handshake, Users } from "lucide-react";
import CountUp from "./CountUp";
import { Stagger, fadeUp } from "./motion";

const STATS = [
  { icon: Handshake, to: 100, suffix: "+", label: "Projects Delivered" },
  { icon: Users, to: 50, suffix: "+", label: "Global Clients" },
  { icon: CircleCheck, to: 99, suffix: "%", label: "Client Satisfaction" },
  { icon: Clock, to: 24, suffix: "/7", label: "Support & Maintenance" },
];

export default function Stats() {
  return (
    <section id="impact" className="stats">
      <div className="stats__glow" aria-hidden="true" />
      <Stagger className="container stats__inner" each={0.1} amount={0.5}>
        <m.h2 variants={fadeUp}>
          Our Impact{" "}
          <br />
          in Numbers
        </m.h2>
        {STATS.map(({ icon: Icon, to, suffix, label }) => (
          <m.div key={label} className="stat" variants={fadeUp}>
            <Icon className="stat__icon" strokeWidth={1.5} />
            <div>
              <div className="stat__num">
                <CountUp to={to} suffix={suffix} />
              </div>
              <div className="stat__label">{label}</div>
            </div>
          </m.div>
        ))}
      </Stagger>
    </section>
  );
}
