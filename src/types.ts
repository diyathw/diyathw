export interface Project {
  number: string;
  title: string;
  context: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  technologies: string[];
  contributions: string[];
  themes: string[];
  architecture: string[];
}

export interface Experience {
  company: string;
  website?: string;
  logo?: string;
  logoAlt?: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  focus: string[];
  productLinks?: Array<{ label: string; href: string }>;
}

export interface SystemPattern {
  title: string;
  description: string;
  flow: string[];
  principles: string[];
}
