import { ArrowDownRight, ArrowUpRight, BarChart3, Boxes, BrainCircuit, Check, Github, Linkedin, Mail, MapPin, Plug, Sparkles, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FaAws } from "react-icons/fa";
import { SiDotnet, SiNodedotjs, SiServerless } from "react-icons/si";
import type { IconType } from "react-icons";
import { useRef } from "react";
import { ArchitectureFlow } from "./components/ArchitectureFlow";
import { HeroArchitecture } from "./components/HeroArchitecture";
import { Navigation } from "./components/Navigation";
import { ProjectCard } from "./components/ProjectCard";
import { Reveal } from "./components/Reveal";
import { contact, experience, metrics, projects, skills, systemPatterns } from "./data/portfolio";

const focusIcons: Partial<Record<string, LucideIcon | IconType>> = {
  AWS: FaAws,
  Serverless: SiServerless,
  "Node.js": SiNodedotjs,
  ".NET Core": SiDotnet,
  Microservices: Boxes,
  Analytics: BarChart3,
  Integrations: Plug,
};

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <Reveal className="section-heading">
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      {copy && <p>{copy}</p>}
    </Reveal>
  );
}

function App() {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 68%"],
  });
  const timelineProgressTransform = useTransform(timelineProgress, [0, 1], ["scaleY(0)", "scaleY(1)"]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />

      <main id="main">
        <section className="hero section-grid" id="top">
          <div className="hero__glow" aria-hidden="true" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <span className="eyebrow"><span className="eyebrow-dot" />Senior Software Engineer</span>
              <h1>Engineering scalable products,<br /> <span>cloud systems & intelligent workflows.</span></h1>
              <p className="hero__lead">I’m Diyath Wickramaratne, a Senior Software Engineer with 10+ years of experience designing and building production software across full-stack development, backend systems and AWS cloud infrastructure.</p>
              <p className="hero__support">My work spans React, TypeScript, Node.js, .NET, multi-tenant SaaS, event-driven systems, AWS infrastructure and modern AI-assisted engineering workflows.</p>
              <div className="hero__buttons">
                <a className="button button--primary" href="#work">View My Work <ArrowDownRight size={17} /></a>
                <a className="button button--secondary" href="#experience">Explore Experience</a>
              </div>
              <div className="hero__meta">
                <span><MapPin size={14} />Toronto, Canada</span>
                <span><span className="status-dot" />Open to Senior Software Engineering opportunities</span>
              </div>
            </div>
            <div className="hero__visual"><HeroArchitecture /></div>
          </div>
        </section>

        <section className="impact" aria-label="Professional impact">
          <div className="container impact__grid">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
            ))}
          </div>
        </section>

        <section className="section section-grid" id="about">
          <Reveal className="container about-grid">
            <div className="about-intro">
              <span className="eyebrow">About</span>
              <h2>Engineering beyond<br />the interface.</h2>
              <figure className="about-portrait">
                <img src="/diyath-wickramaratne-cutout-v2.png" alt="Diyath Wickramaratne" loading="lazy" width="1029" height="1528" />
              </figure>
            </div>
            <div className="about-copy">
              <p className="large-copy">I work across the system, from the interaction a user sees to the services, data and cloud infrastructure that make it dependable.</p>
              <p>That has meant building frontend systems, backend APIs, databases, integrations, production monitoring, CI/CD and enterprise applications across building management, transport technology, veterinary technology, smart workplaces and ERP/POS systems.</p>
              <div className="principles-list">
                {["Maintainability", "Reliability", "Scalability", "Performance", "Automation", "Developer productivity", "Pragmatic architecture"].map((item) => <span key={item}><Check size={14} />{item}</span>)}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section section-grid section--work" id="work">
          <div className="container">
            <SectionHeading eyebrow="Selected work" title="Selected Engineering Work" copy="A selection of production systems and engineering problems I’ve contributed to throughout my career." />
            <div className="projects-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}</div>
          </div>
        </section>

        <section className="section section-grid" id="experience">
          <div className="container">
            <SectionHeading eyebrow="Experience" title="A decade across the stack." copy="Roles summarized by the systems, problems and engineering disciplines that mattered most." />
            <div className="timeline" ref={timelineRef}>
              <motion.div
                className="timeline__progress absolute z-[1] top-0 bottom-0 left-[1.325rem] min-[601px]:left-[1.7rem] min-[821px]:left-[2.25rem] w-px pointer-events-none origin-top bg-gradient-to-b from-[var(--accent)] to-[rgba(108,140,255,.2)] shadow-[0_0_14px_rgba(108,140,255,.28)]"
                aria-hidden="true"
                style={{ transform: reduceMotion ? "scaleY(1)" : timelineProgressTransform }}
              />
              {experience.map((role, index) => (
                <motion.article
                  className="timeline__item"
                  key={role.company}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(8px)" }}
                  whileInView={{ opacity: 1, transform: "translateY(0)" }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: reduceMotion ? 0.14 : 0.28, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="timeline__rail"><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="timeline__when"><span>{role.period}</span><span>{role.location}</span></div>
                  <div className="timeline__content">
                    <h3>
                      {role.website ? (
                        <a className="timeline__company-link" href={role.website} target="_blank" rel="noreferrer">
                          {role.logo && <span className="timeline__logo"><img src={role.logo} alt={role.logoAlt ?? role.company} /></span>}
                          <span>{role.company}</span><ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      ) : role.company}
                    </h3>
                    <h4>{role.role}</h4><p>{role.summary}</p>
                    {role.productLinks && <div className="timeline__product-links" aria-label={`${role.company} product links`}>
                      {role.productLinks.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}<ArrowUpRight size={13} aria-hidden="true" /></a>)}
                    </div>}
                    <div className="tag-list">{role.focus.map((item) => {
                      const FocusIcon = focusIcons[item];
                      return <span key={item}>{FocusIcon && <FocusIcon size={13} strokeWidth={1.8} aria-hidden="true" />}{item}</span>;
                    })}</div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section enterprise-section">
          <Reveal className="container enterprise-grid">
            <div><span className="eyebrow">Clients</span><h2>Systems built for real organizations.</h2><p>Contributed to professional software delivered for client environments including:</p></div>
            <div className="enterprise-names" aria-label="Enterprise organizations">
              <a href="https://www.avaya.com/en/" target="_blank" rel="noreferrer" aria-label="Visit Avaya website"><img src="/logos/avaya.svg" alt="Avaya" /></a>
              <a href="https://www.lta.gov.sg/content/ltagov/en.html" target="_blank" rel="noreferrer" aria-label="Visit Land Transport Authority website"><img src="/logos/lta.png" alt="Land Transport Authority" /></a>
              <a href="https://www.nhghealth.com.sg/ktph" target="_blank" rel="noreferrer" aria-label="Visit Khoo Teck Puat Hospital website"><img src="/logos/ktph.svg" alt="Khoo Teck Puat Hospital" /></a>
              <a href="https://www.nuh.com.sg/" target="_blank" rel="noreferrer" aria-label="Visit National University Hospital website"><img src="/logos/nuh.png" alt="National University Hospital" /></a>
              <a href="https://www.bhp.com/" target="_blank" rel="noreferrer" aria-label="Visit BHP website"><img src="/logos/bhp.svg" alt="BHP" /></a>
            </div>
            <p className="enterprise-disclaimer">Organizations listed are associated with projects delivered during professional employment and do not imply endorsement.</p>
          </Reveal>
        </section>

        <section className="section section-grid" id="engineering">
          <div className="container">
            <SectionHeading eyebrow="Engineering" title="How I Think About Systems" copy="Conceptual patterns that show how I reason about boundaries, failure, delivery and scale. They are not representations of confidential employer architecture." />
            <div className="systems-grid">
              {systemPatterns.map((pattern, index) => (
                <article className="system-card" key={pattern.title}>
                  <div className="system-card__number">0{index + 1}</div>
                  <h3>{pattern.title}</h3><p>{pattern.description}</p>
                  <ArchitectureFlow nodes={pattern.flow} compact label={pattern.title} />
                  <div className="principle-tags">{pattern.principles.map((principle) => <span key={principle}>{principle}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-grid skills-section" id="skills">
          <div className="container">
            <SectionHeading eyebrow="Technology" title="Tools organized around capability." copy="The value isn’t in a logo wall. It’s in choosing the right layer, understanding its trade-offs and operating it in production." />
            <div className="skills-grid">
              {skills.map((group) => <article className="skill-card" key={group.category}><h3>{group.category}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}
            </div>
          </div>
        </section>

        <section className="section ai-section">
          <Reveal className="container ai-grid">
            <div className="ai-copy">
              <span className="eyebrow"><Sparkles size={13} />AI engineering</span>
              <h2>Faster delivery.<br />Responsible judgment.</h2>
              <p>AI can accelerate requirements analysis, planning, implementation, testing, review and documentation. It works best inside clear repository conventions, reusable skills and robust validation, not as a replacement for engineering accountability.</p>
              <div className="ai-callout"><BrainCircuit size={20} /><p><strong>AI accelerates implementation.</strong><br />Engineering judgment remains responsible for architecture, security and quality.</p></div>
            </div>
            <div className="ai-workflow">
              {projects[3].architecture.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < projects[3].architecture.length - 1 && <i />}</div>)}
            </div>
          </Reveal>
        </section>

        <section className="education-section section-grid">
          <Reveal className="container education-grid">
            <span className="eyebrow">Education</span>
            <a className="education-logo" href="https://www.ucd.ie/" target="_blank" rel="noreferrer" aria-label="Visit University College Dublin website">
              <img src="/logos/ucd.png" alt="UCD Dublin" width="128" height="128" loading="lazy" />
            </a>
            <div><h2>Bachelor of Science in Computer Science</h2><p><a className="education-link" href="https://www.ucd.ie/" target="_blank" rel="noreferrer">University College Dublin, Ireland <ArrowUpRight size={14} aria-hidden="true" /></a></p></div>
            <span className="education-mark">BSc</span>
          </Reveal>
        </section>

        <section className="contact-section section-grid" id="contact">
          <Reveal className="container contact-card">
            <div><span className="eyebrow">Contact</span><h2>Let’s build something meaningful.</h2><p>I’m based in Toronto and open to Senior Software Engineer, Full-Stack, Backend and cloud-focused engineering opportunities.</p></div>
            <div className="contact-actions">
              <a className="button button--primary" href={`mailto:${contact.email}`}>Email Me <Mail size={17} /></a>
              <a className="button button--secondary" href={contact.resume} download>Download CV <ArrowDownRight size={17} /></a>
              <a className="icon-button" href={contact.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a className="icon-button" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div><strong>Diyath Wickramaratne</strong><span>Senior Software Engineer</span></div>
          <p>React <i /> TypeScript <i /> Node.js <i /> AWS</p>
          <p>© {new Date().getFullYear()} Diyath Wickramaratne</p>
          <a href="#top" aria-label="Back to top">Back to top <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
