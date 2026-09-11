import type { Experience, Project, SystemPattern } from "../types";

export const contact = {
  email: "diyathw@gmail.com",
  linkedIn: "https://linkedin.com/in/diyathw/",
  github: "https://github.com/diyathw",
  resume: "/Diyath_Wickramaratne_Software_Engineer_CV.pdf",
};

export const metrics = [
  { value: "10+", label: "Years in Software Engineering" },
  { value: "162K+", label: "Users on a Platform Helped Scale" },
  { value: "AWS", label: "Cloud & Serverless Experience" },
  { value: "Full Stack", label: "Frontend → Backend → Cloud" },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "ASGARD Truck Management Platform",
    context: "Step Global / ASGARD",
    metric: "300+ connected trucks",
    metricLabel: "Real-time fleet workflows",
    description: "Contributed to Step Global’s ASGARD truck-management platform for municipal waste fleets, combining telemetry, vehicle events, geospatial tracking, NVR video, proof of service and driver workflows.",
    technologies: [".NET Core", "Node.js", "TypeScript", "React", "MongoDB", "AWS", "S3", "HERE Maps", "Hikvision", "JWT"],
    contributions: [
      "Developed backend services in .NET Core and Node.js while moving legacy JavaScript toward TypeScript.",
      "Designed event-driven services processing GPS, telematics, vehicle, speed and video events across 300+ connected trucks.",
      "Integrated Hikvision Gateway and NVR systems for event-linked playback, live streaming and centralized S3 video workflows.",
      "Delivered configurable Wi-Fi and cellular uploads and built the Smart eDriver regulatory-compliance frontend with React, Formik and Redux.",
      "Implemented AWS Secrets Manager, JWT authentication, CodePipeline and S3 + CloudFront frontend delivery.",
    ],
    themes: ["Telemetry ingestion", "Video handling", "Geospatial data", "Event-driven processing", "Unreliable connectivity", "Secure cloud services"],
    architecture: ["Vehicle / NVR", "Gateway", "Event services", "MongoDB + S3", "Web app"],
  },
  {
    number: "02",
    title: "Scaling an Animal DNA-Testing Platform",
    context: "Orivet Pet Solutions",
    metric: "~1,000 → 162,000+ users",
    metricLabel: "Helped scale the platform",
    description: "Helped scale Orivet's core genetic pet-care platform from approximately 1,000 users to more than 162,000, supporting DNA-test ordering, animal records, sample workflows and genetic results for breeders, pet owners and veterinary professionals.",
    technologies: ["AWS Lambda", "AWS SAM", "AWS CDK", "Node.js", ".NET Core", "Microservices", "Docker", "MongoDB", "MariaDB", "Amazon Aurora", "Highcharts", "D3", "CI/CD"],
    contributions: [
      "Contributed to backend architecture improvements and the platform’s migration toward AWS.",
      "Implemented Lambda-based serverless microservices across Node.js and .NET Core services.",
      "Used AWS SAM and AWS CDK to define repeatable serverless infrastructure and related cloud resources.",
      "Built analytics dashboards with Highcharts and D3 and a Dockerized .NET Core PDF-generation service.",
      "Implemented CI/CD workflows and integrations with Google APIs and Shopify webhooks.",
    ],
    themes: ["Scalability", "Serverless architecture", "Service separation", "Cloud migration", "Reporting", "Third-party integrations"],
    architecture: ["Client apps", "API services", "Lambda / microservices", "Data + integrations", "Reports / analytics"],
  },
  {
    number: "03",
    title: "Cloud Building Management Platform",
    context: "Optergy / LEA",
    description: "Worked on LEA within the Optergy environment, delivering multi-tenant SaaS software for building optimisation, automation and energy management across operational interfaces, backend APIs and AWS delivery workflows.",
    technologies: ["React", "Material UI", "TypeScript", "Node.js", "MongoDB", "Mongoose", "AWS", "Lambda", "Bitbucket Pipelines", "Jest", "Playwright", "Sentry"],
    contributions: [
      "Developed React and Material UI interfaces alongside scalable Node.js APIs.",
      "Modernized JavaScript services toward TypeScript and refined MongoDB schemas, indexes and queries.",
      "Built controlled LLM tool integrations with predefined permissions, validation rules and reviewable execution paths.",
      "Managed EC2, S3, CloudFront and Lambda delivery workflows with Bitbucket Pipelines.",
      "Used Jest, Playwright and Sentry to strengthen automated testing, observability and incident investigation.",
    ],
    themes: ["Frontend architecture", "API scalability", "Database performance", "Production reliability", "Automated releases", "Observability"],
    architecture: ["React app", "Node.js APIs", "MongoDB", "AWS infrastructure", "Monitoring + CI/CD"],
  },
  {
    number: "04",
    title: "AI-Assisted Engineering Workflow",
    context: "Modern professional software delivery",
    description: "Implemented an AI-first engineering workflow across requirements analysis, planning, implementation, testing, review and documentation, with human judgment retained at every critical decision.",
    technologies: ["Claude Code", "Agent Skills", "MCP", "Jira", "TypeScript", "Jest", "Playwright", "Codacy", "ESLint", "Bitbucket"],
    contributions: [
      "Established project-specific CLAUDE.md context, repository conventions and reusable Agent Skills.",
      "Connected Jira through MCP and coordinated focused agents and subagents across delivery stages.",
      "Integrated frontend and backend implementation workflows with Jest and Playwright validation.",
      "Kept security, architecture and quality decisions under human-in-the-loop engineering review.",
    ],
    themes: ["Context engineering", "Agent orchestration", "Automated validation", "Human review", "Security checks", "Technical documentation"],
    architecture: ["Requirements", "Planning", "Implementation", "Testing", "Review", "Documentation"],
  },
];

export const experience: Experience[] = [
  {
    company: "Optergy",
    website: "https://optergy.com/",
    logo: "/logos/optergy.png",
    logoAlt: "Optergy",
    role: "Senior Full Stack Software Engineer",
    period: "Oct 2024 to Jul 2026",
    location: "Australia",
    summary: "Developed LEA building-optimisation software within a multi-tenant SaaS environment across frontend systems, backend APIs, cloud delivery, testing, observability and controlled agentic engineering workflows.",
    focus: ["LEA", "React", "Node.js", "TypeScript", "MongoDB", "AWS", "Multi-tenant SaaS", "Agentic Engineering", "CI/CD", "Testing", "Observability"],
    productLinks: [
      { label: "LEA website", href: "https://lea.global/" },
      { label: "LEA platform", href: "https://lea.novaq.cloud/login/" },
    ],
  },
  {
    company: "Step Global",
    website: "https://stepglobal.com/asgard-waste/",
    logo: "/logos/asgard.png",
    logoAlt: "ASGARD",
    role: "Senior Full Stack Developer",
    period: "Oct 2022 to Sep 2024",
    location: "Australia",
    summary: "Developed ASGARD truck-management and video-telematics capabilities across 300+ connected trucks, connecting GPS, telemetry, live and historic video, driver workflows and secure AWS infrastructure.",
    focus: ["ASGARD", ".NET Core", "Next.js", "React", "Node.js", "MongoDB", "AWS", "GPS", "Telemetry", "Video", "Fleet systems"],
  },
  {
    company: "Orivet Pet Solutions",
    website: "https://www.orivet.com/",
    logo: "/logos/orivet-purple.png",
    logoAlt: "Orivet",
    role: "Senior Software Engineer",
    period: "Jan 2017 to Sep 2022",
    location: "Australia",
    summary: "Helped scale Orivet's principal animal DNA-testing and genetic pet-care platform from approximately 1,000 to more than 162,000 users while evolving its serverless services, analytics and integrations.",
    focus: ["AWS", "Serverless", "Node.js", ".NET Core", "Microservices", "Analytics", "Integrations"],
  },
  {
    company: "iviva (Eutech Cybernetics Lanka)",
    website: "https://www.iviva.com/",
    logo: "/logos/iviva.svg",
    logoAlt: "iviva",
    role: "Software Engineer",
    period: "Jun 2015 to Dec 2016",
    location: "Sri Lanka",
    summary: "Contributed to the iviva smart workplace and facility-management platform, including access-card, electronic-display and Philips Hue integrations, Permit-to-Work applications and corrective work-order workflows.",
    focus: ["C#", "Python", "JavaScript", "Highcharts", "Smart workplaces", "Hardware / software integrations"],
  },
  {
    company: "Victory Information",
    website: "https://victoryinformation.lk/",
    logo: "/logos/victory-information.png",
    logoAlt: "Victory Information",
    role: "Associate Software Engineer",
    period: "Feb 2014 to Jun 2015",
    location: "Sri Lanka",
    summary: "Built customer-specific ERP and POS implementations across desktop applications, services, databases and reporting.",
    focus: ["ERP", "POS", "C#", "WPF", "WCF", "SQL Server", "Crystal Reports"],
  },
];

export const systemPatterns: SystemPattern[] = [
  {
    title: "Scalable API Architecture",
    description: "Interfaces stay independent from services and persistence, so each layer can evolve at the pace its responsibilities demand.",
    flow: ["React / Client", "API layer", "Node.js / .NET services", "MongoDB / MariaDB / Aurora"],
    principles: ["Clear service boundaries", "Validation", "Observability", "Scalable persistence", "Secure APIs"],
  },
  {
    title: "Event-Driven Processing",
    description: "Asynchronous work is designed for failure, replay and safe recovery rather than assuming a perfect network or a perfect first attempt.",
    flow: ["Producer", "Event / queue", "Worker", "Processing", "Storage"],
    principles: ["Decoupling", "Retries", "Failure handling", "Async workloads", "Idempotency"],
  },
  {
    title: "Static Frontend Delivery",
    description: "Prebuilt assets and edge delivery keep the operational surface small while giving users fast, cacheable experiences.",
    flow: ["React", "Vite build", "Amazon S3", "CloudFront", "Users"],
    principles: ["Static deployment", "CDN distribution", "HTTPS", "Caching", "Low overhead"],
  },
  {
    title: "Delivery Pipeline",
    description: "Automation shortens feedback loops and makes production changes repeatable, observable and easier to trust.",
    flow: ["Git", "CI", "Automated tests", "Build", "Deploy", "Monitoring"],
    principles: ["Repeatability", "Quality checks", "Fast feedback", "Deployment confidence", "Observability"],
  },
];

export const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "JavaScript", "Next.js", "Angular", "Vue.js", "Redux", "Tailwind", "Material UI"] },
  { category: "Backend", items: ["Node.js", ".NET Core", "C#", "REST APIs", "Microservices", "Multi-tenant SaaS", "Event-driven systems", "Python", "Laravel"] },
  { category: "Cloud & Delivery", items: ["AWS Lambda", "AWS SAM", "AWS CDK", "EC2", "S3", "CloudFront", "CloudWatch", "CodePipeline", "Bitbucket Pipelines", "Docker", "CI/CD"] },
  { category: "Data", items: ["MongoDB", "Mongoose", "MariaDB", "Amazon Aurora", "MySQL", "SQL Server"] },
  { category: "Testing & Observability", items: ["Jest", "Playwright", "Sentry", "Codacy", "ESLint", "Code Review"] },
  { category: "AI Engineering", items: ["Claude Code", "CLAUDE.md", "Agent Skills", "MCP", "Jira", "Agents", "Subagents", "Controlled tool integrations", "Context Engineering", "Human-in-the-loop Review"] },
];
