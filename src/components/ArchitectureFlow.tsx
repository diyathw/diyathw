import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface ArchitectureFlowProps {
  nodes: string[];
  compact?: boolean;
  label?: string;
}

export function ArchitectureFlow({ nodes, compact = false, label = "Conceptual architecture" }: ArchitectureFlowProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={compact ? "flow flow--compact" : "flow"} role="img" aria-label={`${label}: ${nodes.join(" to ")}`}>
      {nodes.map((node, index) => (
        <div className="flow__step" key={node}>
          <motion.span
            className="flow__node"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(6px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: reduceMotion ? 0.12 : 0.24, delay: reduceMotion ? 0 : index * 0.045, ease: [0.23, 1, 0.32, 1] }}
          >{node}</motion.span>
          {index < nodes.length - 1 && (
            <motion.span
              className="flow__connector"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.2, delay: reduceMotion ? 0 : index * 0.045 + 0.04, ease: [0.23, 1, 0.32, 1] }}
            >
              <ArrowRight className="flow__arrow--wide" size={14} />
              <ArrowDown className="flow__arrow--narrow" size={14} />
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}
