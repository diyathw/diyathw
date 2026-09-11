import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, type LucideIcon } from "lucide-react";
import { FaAws } from "react-icons/fa";
import { SiDotnet, SiHere, SiJsonwebtokens, SiMongodb, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";
import type { IconType } from "react-icons";
import { useState } from "react";
import type { Project } from "../types";
import { ArchitectureFlow } from "./ArchitectureFlow";

const technologyIcons: Partial<Record<string, LucideIcon | IconType>> = {
  ".NET Core": SiDotnet,
  "Node.js": SiNodedotjs,
  TypeScript: SiTypescript,
  React: SiReact,
  MongoDB: SiMongodb,
  AWS: FaAws,
  "HERE Maps": SiHere,
  JWT: SiJsonwebtokens,
};

const technologyIconAssets: Partial<Record<string, string>> = {
  S3: "/icons/aws-s3.svg",
  Hikvision: "/icons/hikvision.png",
};

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();
  const detailsId = `project-${project.number}-details`;
  const toggleId = `project-${project.number}-toggle`;

  return (
    <motion.div
      className="min-w-0"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(10px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -56px" }}
      transition={{ duration: reduceMotion ? 0.14 : 0.28, delay: reduceMotion ? 0 : index * 0.05, ease: [0.23, 1, 0.32, 1] }}
    >
    <article className="project-card">
      <div className="project-card__topline">
        <span className="project-card__number">{project.number}</span>
        <span>{project.context}</span>
      </div>
      <div className="project-card__header">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        {project.metric && <div className="project-card__metric"><strong>{project.metric}</strong><span>{project.metricLabel ?? "Production scope"}</span></div>}
      </div>

      <ArchitectureFlow nodes={project.architecture} compact />

      <div className="tag-list" aria-label="Technologies">
        {project.technologies.map((technology) => {
          const TechnologyIcon = technologyIcons[technology];
          const iconAsset = technologyIconAssets[technology];
          return <span key={technology}>
            {TechnologyIcon && <TechnologyIcon size={14} aria-hidden="true" />}
            {iconAsset && <img className="tag-list__brand-icon" src={iconAsset} alt="" aria-hidden="true" />}
            {technology}
          </span>;
        })}
      </div>

      <button
        className="project-card__toggle"
        type="button"
        id={toggleId}
        aria-expanded={expanded}
        aria-controls={detailsId}
        onClick={() => setExpanded((value) => !value)}
      >
        <span>{expanded ? "Close engineering notes" : "Explore engineering notes"}</span>
        <span className="project-card__toggle-icon" aria-hidden="true">
          <ChevronDown size={17} className={expanded ? "is-rotated" : ""} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={detailsId}
            className="overflow-hidden"
            role="region"
            aria-labelledby={toggleId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: reduceMotion ? 0 : 0.28, ease: [0.23, 1, 0.32, 1] },
              opacity: { duration: reduceMotion ? 0 : 0.18, ease: "easeOut" },
            }}
          >
            <div className="project-card__details">
              <div>
                <h4>Contributions</h4>
                <ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h4>Engineering themes</h4>
                <ul>{project.themes.map((theme) => <li key={theme}>{theme}</li>)}</ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
    </motion.div>
  );
}
