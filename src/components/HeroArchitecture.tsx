import { Braces, Cloud, Database, Layers3, Monitor } from "lucide-react";

const layers = [
  { label: "React UI", detail: "Interfaces", Icon: Monitor },
  { label: "API Layer", detail: "Contracts", Icon: Braces },
  { label: "Services", detail: "Node · .NET", Icon: Layers3 },
  { label: "AWS", detail: "Cloud delivery", Icon: Cloud },
  { label: "Data", detail: "Persistence", Icon: Database },
];

export function HeroArchitecture() {
  return (
    <div className="hero-system" role="img" aria-label="Conceptual system from React interface through APIs and services to AWS and data">
      <div className="hero-system__status">
        <span className="status-dot" />
        Production systems
      </div>
      <div className="hero-system__layers">
        {layers.map(({ label, detail, Icon }, index) => (
          <div className="hero-system__row" key={label} style={{ "--row-index": index } as React.CSSProperties}>
            <div className="hero-system__icon"><Icon size={17} strokeWidth={1.6} /></div>
            <div>
              <strong>{label}</strong>
              <span>{detail}</span>
            </div>
            <span className="hero-system__signal" aria-hidden="true" />
          </div>
        ))}
      </div>
      <div className="hero-system__footer">
        <span>Reliable</span><span>Observable</span><span>Scalable</span>
      </div>
    </div>
  );
}
