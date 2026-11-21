"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { LinkedInIcon, PlayCircleIcon, XIcon, YouTubeIcon } from "./SocialIcons";
import { Stagger, fadeUp } from "./motion";

const COLS = [
  { title: "Quick Links", links: [["Home", "#home"], ["About Us", "#about"], ["Case Studies", "#solutions"], ["Careers", "#cta"]] },
  {
    title: "Our Services",
    links: [
      ["Speech & Audio Data", "#services"],
      ["Image & Video Data", "#services"],
      ["Annotation & Labeling", "#services"],
      ["Data Collection & Curation", "#services"],
    ],
  },
  {
    title: "Industries",
    links: [
      ["Automotive", "#industries"],
      ["Healthcare", "#industries"],
      ["Manufacturing", "#industries"],
      ["Retail & E-commerce", "#industries"],
    ],
  },
];

const SOCIALS = [
  { label: "LinkedIn", Icon: LinkedInIcon, href: "#" },
  { label: "X (Twitter)", Icon: XIcon, href: "#" },
  { label: "YouTube", Icon: YouTubeIcon, href: "#" },
  { label: "Video", Icon: PlayCircleIcon, href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="footer">
      <Stagger className="container footer__top" each={0.07} amount={0.25}>
        <motion.a href="#home" className="footer__brand" variants={fadeUp} aria-label="Ikonnect Talentum Arrow – back to top">
          <Logo className="logo--lg" idPrefix="ftr" />
        </motion.a>
        <span className="footer__vr" aria-hidden="true" />

        {COLS.map((col) => (
          <motion.div key={col.title} className="footer__col" variants={fadeUp}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div className="footer__col footer__contact" variants={fadeUp}>
          <h4>Contact Us</h4>
          <ul>
            <li>
              <Phone strokeWidth={1.7} />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li>
              <Mail strokeWidth={1.7} />
              <a href="mailto:info@ikonnecttalent.com">info@ikonnecttalent.com</a>
            </li>
            <li>
              <MapPin strokeWidth={1.7} />
              <span>Chennai, Tamil Nadu, India</span>
            </li>
          </ul>
        </motion.div>
        <span className="footer__vr" aria-hidden="true" />

        <motion.div className="footer__col" variants={fadeUp}>
          <h4>Follow Us</h4>
          <div className="socials">
            {SOCIALS.map(({ label, Icon, href }) => (
              <a key={label} href={href} aria-label={label} className="social">
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>
      </Stagger>

      <div className="container footer__bottom">
        <p>© {year} Ikonnect Talentum Arrow Private Limited. All rights reserved.</p>
        <nav aria-label="Legal">
          <a href="#">Privacy Policy</a>
          <span aria-hidden="true">|</span>
          <a href="#">Terms of Use</a>
          <span aria-hidden="true">|</span>
          <a href="#">Sitemap</a>
        </nav>
      </div>
    </footer>
  );
}
