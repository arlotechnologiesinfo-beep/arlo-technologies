export type CaseStudyType = 'client-project' | 'solution-study';

export type CaseStudyCategory =
  | 'client-projects'
  | 'ai-agents'
  | 'ai-products'
  | 'web-dev'
  | 'ui-ux'
  | 'industry-solutions';

export interface IExecutiveSummary {
  challenge: string;
  approach: string;
  potentialValue: string;
}

export interface IArchitectureComponent {
  name: string;
  description: string;
}

export interface IArchitecture {
  overview: string;
  components: IArchitectureComponent[];
  techStack: string[];
}

export interface IRoadmapPhase {
  phase: string;
  title: string;
  activities: string[];
}

export interface ISafeguards {
  security: string;
  privacy: string;
  accessibility: string;
  reliability: string;
}

export interface IMeasurementMetric {
  name: string;
  baselineAndTracking: string;
}

export interface IMeasurementPlan {
  description: string;
  metrics: IMeasurementMetric[];
}

export interface ITradeoff {
  challenge: string;
  mitigationOrTradeoff: string;
}

export interface IFAQ {
  question: string;
  answer: string;
}

export interface IRelatedLink {
  title: string;
  href: string;
}

export interface IRelatedStudyRef {
  title: string;
  slug: string;
  categoryLabel: string;
}

export interface ICaseStudyItem {
  id: number;
  slug: string;
  type: CaseStudyType;
  categoryKey: CaseStudyCategory;
  categoryLabel: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  primarySearchIntent: string;
  seoKeywords: string[];
  thumbnail: string;
  imageAlt: string;
  liveUrl?: string;
  publishedAt: string;
  lastReviewed: string;
  readTime: string;
  statusNotice: string;
  intro: string;
  executiveSummary: IExecutiveSummary;
  businessContext: string;
  problemOrOpportunity: string;
  goalsAndRequirements: string[];
  proposedSolution: string;
  systemArchitecture: IArchitecture;
  implementationRoadmap: IRoadmapPhase[];
  safeguards: ISafeguards;
  measurementPlan: IMeasurementPlan;
  challengesAndTradeoffs: ITradeoff[];
  lessonsAndRecommendations: string[];
  faqs: IFAQ[];
  relatedServices: IRelatedLink[];
  relatedCaseStudies: IRelatedStudyRef[];
}
