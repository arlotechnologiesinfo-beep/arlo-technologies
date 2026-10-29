import { Article } from '../types/blog';
import { aiArticles } from './articles/ai';
import { automationArticles } from './articles/automation';
import { engineeringArticles } from './articles/engineering';
import { productStrategyArticles } from './articles/product_strategy';

// All 24 initial articles aggregated
export const allArticles: Article[] = [
  ...aiArticles,
  ...engineeringArticles,
  ...automationArticles,
  ...productStrategyArticles,
];

// Helper mapping for categories
export const allCategories: string[] = [
  'All Articles',
  'Artificial Intelligence',
  'AI Engineering',
  'Automation',
  'Software Development',
  'Software Architecture',
  'Web Development',
  'Product Development',
  'UI/UX Design',
  'Security & Privacy',
  'Integrations',
  'Backend & Infrastructure',
  'Product Design',
  'Analytics',
  'Engineering',
  'AI & Marketing',
  'E-commerce',
  'Business Automation',
  'Communication',
  'Digital Growth',
  'Digital Operations',
  'Responsible AI',
  'Startups & Strategy',
  'Digital Strategy',
];
