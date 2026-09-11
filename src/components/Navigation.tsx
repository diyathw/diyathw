import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contact } from "../data/portfolio";

const navLinks = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Engineering", "#engineering"],
  ["Skills", "#skills"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [instantClose, setInstantClose] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setInstantClose(true);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className={scrolled ? "site-nav is-scrolled" : "site-nav"}>
      <div className="site-nav__inner">
        <a className="site-nav__brand" href="#top" aria-label="Diyath W., home">Diyath W.<span /></a>
        <nav className="site-nav__links" aria-label="Primary navigation">
          {navLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <div className="site-nav__actions">
          <a href={contact.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
          <a className="resume-link" href={contact.resume} download>Resume</a>
        </div>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence onExitComplete={() => setInstantClose(false)}>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(-6px) scale(0.98)" }}
            animate={{ opacity: 1, transform: "translateY(0) scale(1)" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(-4px) scale(0.98)" }}
            transition={{ duration: instantClose ? 0 : reduceMotion ? 0.12 : 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            {navLinks.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
            <div className="mobile-menu__actions">
              <a href={contact.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={contact.resume} download>Resume</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
