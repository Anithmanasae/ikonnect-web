"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { EASE } from "./motion";

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  {
    label: "AI Solutions",
    href: "#solutions",
    children: [
      { label: "Smart AI Solutions", href: "#solutions" },
      { label: "Intelligent Automation", href: "#solutions" },
      { label: "Computer Vision", href: "#solutions" },
      { label: "Model Evaluation", href: "#services" },
    ],
  },
  {
    label: "Data Services",
    href: "#services",
    children: [
      { label: "Speech & Audio Data", href: "#services" },
      { label: "Text & Language Data", href: "#services" },
      { label: "Image & Video Data", href: "#services" },
      { label: "Annotation & Labeling", href: "#services" },
      { label: "Data Collection & Curation", href: "#services" },
      { label: "Evaluation & Quality Review", href: "#services" },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    children: [
      { label: "Automotive & Mobility", href: "#industries" },
      { label: "Healthcare & Life Sciences", href: "#industries" },
      { label: "Manufacturing & Industrial", href: "#industries" },
      { label: "Retail & E-commerce", href: "#industries" },
      { label: "Banking & Financial Services", href: "#industries" },
      { label: "Robotics & Automation", href: "#industries" },
    ],
  },
  { label: "Case Studies", href: "#solutions" },
  { label: "Insights", href: "#impact" },
  { label: "Careers", href: "#cta" },
  { label: "Contact", href: "#contact" },
];

/** Section id -> nav label, used for scroll-spy highlighting. */
const SPY: Record<string, string> = {
  home: "Home",
  about: "About Us",
  services: "Data Services",
  industries: "Industries",
  solutions: "AI Solutions",
  impact: "Insights",
  cta: "Careers",
  contact: "Contact",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Object.keys(SPY)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(SPY[entry.target.id]);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const indicatorOn = hovered ?? active;

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container container--wide header__inner">
        <a href="#home" className="header__logo" aria-label="Ikonnect Talentum Arrow – home">
          <Logo idPrefix="hdr" />
        </a>

        <nav className="nav" aria-label="Primary" onMouseLeave={() => setHovered(null)}>
          {NAV.map((item) => (
            <div
              key={item.label}
              className="nav__item"
              onMouseEnter={() => {
                setHovered(item.label);
                setOpenMenu(item.children ? item.label : null);
              }}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                href={item.href}
                className={`nav__link ${active === item.label ? "is-active" : ""}`}
                aria-haspopup={item.children ? "true" : undefined}
                aria-expanded={item.children ? openMenu === item.label : undefined}
                onFocus={() => item.children && setOpenMenu(item.label)}
              >
                {item.label}
                {item.children && <ChevronDown className="nav__chev" size={14} strokeWidth={2.4} />}
                {indicatorOn === item.label && (
                  <m.span
                    layoutId="nav-indicator"
                    className="nav__indicator"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </a>

              <AnimatePresence>
                {item.children && openMenu === item.label && (
                  <m.div
                    className="dropdown"
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.28, ease: EASE }}
                  >
                    {item.children.map((c) => (
                      <a key={c.label} href={c.href} onClick={() => setOpenMenu(null)}>
                        <span className="dropdown__dot" />
                        {c.label}
                        <ArrowRight size={14} className="dropdown__arrow" />
                      </a>
                    ))}
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <a href="#contact" className="btn btn--primary btn--sm header__cta">
          Get in Touch <ArrowRight size={17} strokeWidth={2.4} className="arrow" />
        </a>

        <button
          type="button"
          className="header__burger"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            className="mobile-nav"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: EASE }}
            data-lenis-prevent
          >
            <m.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.12 } } }}
            >
              {NAV.map((item) => (
                <m.li
                  key={item.label}
                  variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
                >
                  <a
                    href={item.href}
                    className={active === item.label ? "is-active" : ""}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                    <ArrowRight size={16} />
                  </a>
                </m.li>
              ))}
            </m.ul>
            <a href="#contact" className="btn btn--primary" onClick={() => setMobileOpen(false)}>
              Get in Touch <ArrowRight size={17} strokeWidth={2.4} className="arrow" />
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
