"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Database, FileText, Mic, Tag, Video } from "lucide-react";
import Ribbon from "./Ribbon";
import { Reveal, Stagger, popIn, spotlight } from "./motion";

const SERVICES = [
  { img: "svc-speech", icon: Mic, title: ["Speech &", "Audio Data"] },
  { img: "svc-text", icon: FileText, title: ["Text &", "Language Data"] },
  { img: "svc-image", icon: Video, title: ["Image &", "Video Data"] },
  { img: "svc-annotation", icon: Tag, title: ["Annotation &", "Labeling"] },
  { img: "svc-data", icon: Database, title: ["Data Collection", "& Curation"] },
  { img: "svc-evaluation", icon: ClipboardCheck, title: ["Evaluation &", "Quality Review"] },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <Ribbon id="svc-r" className="services__ribbon" flip />
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Our Services</p>
          <h2 className="section-title">
            Comprehensive Data Services <span className="text-green">for AI</span>
          </h2>
        </Reveal>

        <Stagger className="services__grid" each={0.08} amount={0.2}>
          {SERVICES.map(({ img, icon: Icon, title }) => (
            <motion.a
              key={img}
              href="#contact"
              className="svc-card spot"
              variants={popIn}
              onPointerMove={spotlight}
              aria-label={`${title.join(" ")} – learn more`}
            >
              <div className="svc-card__media">
                <Image src={`/images/${img}.webp`} alt="" fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 220px" quality={90} />
              </div>
              <div className="svc-card__body">
                <Icon className="svc-card__icon" strokeWidth={1.6} />
                <h3 className="svc-card__title">
                  {title[0]}
                  <br />
                  {title[1]}
                </h3>
              </div>
              <ArrowRight className="svc-card__arrow" size={20} strokeWidth={2} />
            </motion.a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
