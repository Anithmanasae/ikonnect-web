"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight, ClipboardCheck, Database, FileText, Mic, Tag, Video } from "lucide-react";
import Ribbon from "./Ribbon";
import speechImg from "@/public/images/svc-speech.webp";
import textImg from "@/public/images/svc-text.webp";
import imageImg from "@/public/images/svc-image.webp";
import annotationImg from "@/public/images/svc-annotation.webp";
import dataImg from "@/public/images/svc-data.webp";
import evaluationImg from "@/public/images/svc-evaluation.webp";
import { Reveal, Stagger, popIn, spotlight } from "./motion";

const SERVICES = [
  { img: speechImg, icon: Mic, title: ["Speech &", "Audio Data"] },
  { img: textImg, icon: FileText, title: ["Text &", "Language Data"] },
  { img: imageImg, icon: Video, title: ["Image &", "Video Data"] },
  { img: annotationImg, icon: Tag, title: ["Annotation &", "Labeling"] },
  { img: dataImg, icon: Database, title: ["Data Collection", "& Curation"] },
  { img: evaluationImg, icon: ClipboardCheck, title: ["Evaluation &", "Quality Review"] },
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
            <m.a
              key={title.join(" ")}
              href="#contact"
              className="svc-card spot"
              variants={popIn}
              onPointerMove={spotlight}
              aria-label={`${title.join(" ")} – learn more`}
            >
              <div className="svc-card__media">
                <Image src={img} alt="" fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 220px" quality={90} />
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
            </m.a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
