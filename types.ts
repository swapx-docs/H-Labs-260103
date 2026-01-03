export type Language = 'cn' | 'en';

export interface NavLink {
  key: string;
  label: string;
  href: string;
}

export interface Metric {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  description?: string;
}

export interface HeroContent {
  headline: string;
  subHeadline: string;
  slogan: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface BentoItem {
  title: string;
  description: string;
  icon: string;
  details?: string;
}

export interface Step {
  id: string;
  title: string;
  tasks: string[];
  deliverables: string[];
}

export interface TechCategory {
  title: string;
  items: string[];
  icon: string;
}

export interface MembershipTier {
  name: string;
  subName: string;
  color: string;
  audience: string;
  features: string[];
}

export interface FundAllocation {
  name: string;
  value: number;
  color: string;
  desc: string;
}

export interface CompetencyItem {
  title: string;
  desc: string;
}

export interface CaseStudy {
  title: string;
  tag: string;
  stats: string;
  statsLabel: string;
  desc: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface SpecificMetric {
  value: number;
  suffix: string;
  label: string;
}

export interface MediaFeature {
  title: string;
  desc: string;
}

export interface Translations {
  nav: NavLink[];
  hero: HeroContent;
  metrics: Metric[];
  about: {
    title: string;
    description: string;
    history: string;
    items: BentoItem[];
  };
  incubation: {
    title: string;
    subtitle: string;
    steps: Step[];
    techTitle: string;
    techStack: TechCategory[];
  };
  media: {
    title: string;
    subtitle: string;
    factory: {
      title: string;
      desc: string;
      stats: { label: string; value: string }[];
      marketingPoint: string;
    };
    kol: {
      title: string;
      subtitle: string;
      features: MediaFeature[];
      metrics: SpecificMetric[];
      cta: string;
    };
    brand: {
      title: string;
      subtitle: string;
      features: MediaFeature[];
      metrics: SpecificMetric[];
    };
  };
  capital: {
    title: string;
    fund: {
      title: string;
      desc: string;
      modelName: string;
      allocation: FundAllocation[];
    };
    nexus: {
      title: string;
      desc: string;
      tiers: MembershipTier[];
    };
  };
  caseStudies: {
    title: string;
    subtitle: string;
    items: CaseStudy[];
  };
  partners: {
    title: string;
    topTitle: string;
    description: string;
    mediaTitle: string;
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  competencies: {
    title: string;
    items: CompetencyItem[];
  };
  footer: {
    slogan: string;
    cta: string;
    copyright: string;
  };
}