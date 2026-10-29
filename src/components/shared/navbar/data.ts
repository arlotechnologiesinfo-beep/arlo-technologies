import { FooterOneData } from '@/interface';
import { MobileMenuItem } from '../mobile-menu/MobileMenu';

export interface MobileMenuGroup {
  id: string;
  title: string;
  submenu: MobileMenuItem[];
}

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: '/about' },
      { id: 'services', label: 'Services', href: '/services' },
      { id: 'team', label: 'Our Team', href: '/team' },
      { id: 'career', label: 'Career', href: '/career' },
      { id: 'our-manifesto', label: 'Our Manifesto', href: '/our-manifesto' },
      { id: 'why-choose-us', label: 'Why Choose Us', href: '/why-choose-us' },
      { id: 'customers', label: 'Customers', href: '/customer' },
      { id: 'use-cases', label: 'Use Cases', href: '/use-case' },
      { id: 'all-projects', label: 'All Projects', href: '/projects' },
      { id: 'case-studies', label: 'Case Studies', href: '/case-study' },
      { id: 'testimonials', label: 'Testimonials', href: '/testimonial' },
    ],
  },

  {
    id: 'platform',
    title: 'Platform',
    submenu: [
      { id: 'features', label: 'Features', href: '/features' },
      { id: 'integrations', label: 'Integrations', href: '/integration' },
      { id: 'process', label: 'Process', href: '/process' },
      { id: 'analytics', label: 'Analytics', href: '/analytics' },
      { id: 'security', label: 'Security', href: '/security' },
      { id: 'whitepaper', label: 'Whitepaper', href: '/whitepaper' },
      { id: 'build-overview', label: 'Build overview', href: '/signup' },
      { id: 'brandkit', label: 'Brandkit', href: '/brandkit' },
      { id: 'download', label: 'Download', href: '/download' },
    ],
  },

  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'blog', label: 'Blog', href: '/blog' },
      { id: 'tutorial', label: 'Tutorial', href: '/tutorial' },
      { id: 'faq', label: 'FAQ', href: '/faq' },
      { id: 'glossary', label: 'Glossary', href: '/glossary' },
    ],
  },

  {
    id: 'plans-support',
    title: 'Plans & Support',
    submenu: [
      { id: 'pricing', label: 'Pricing', href: '/pricing' },
      { id: 'login', label: 'Login', href: '/login' },
      { id: 'create-account', label: 'Create Account', href: '/signup' },
      { id: 'referral-program', label: 'Referral Program', href: '/referral-program' },
      { id: 'affiliate', label: 'Affiliate', href: '/affiliates' },
      { id: 'affiliate-policy', label: 'Affiliate Policy', href: '/affiliate-policy' },
      { id: 'terms-conditions', label: 'Terms & Conditions', href: '/terms-conditions' },
      { id: 'privacy-policy', label: 'Privacy Policy', href: '/privacy-policy' },
      { id: 'refund-policy', label: 'Refund Policy', href: '/refund-policy' },
      { id: 'gdpr', label: 'GDPR', href: '/gdpr' },
      { id: 'legal', label: 'Legal', href: '/legal' },
    ],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Process', href: '/process' },
      { label: 'Careers', href: '/career' },
      { label: 'Selected Work', href: '/case-study' },
      { label: 'Success Stories', href: '/success-stories' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Products & Solutions',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Our Services', href: '/services' },
      { label: 'Integrations', href: '/integration' },
      { label: 'Use Cases', href: '/use-case' },
      { label: 'Analytics', href: '/analytics' },
    ],
  },
  {
    title: 'Explore & Learn',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Tutorials', href: '/tutorial' },
      { label: 'Productivity Glossary', href: '/glossary' },
      { label: 'Whitepapers', href: '/whitepaper' },
      { label: 'Case Studies', href: '/case-study' },
    ],
  },
  {
    title: 'Support & Partners',
    links: [
      { label: 'Support Center', href: '/support' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Referral Program', href: '/referral-program' },
      { label: 'Affiliate Program', href: '/affiliates' },
      { label: 'Affiliate Policy', href: '/affiliate-policy' },
    ],
  },
  {
    title: 'Legal & Trust',
    links: [
      { label: 'Security', href: '/security' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'Legal Hub', href: '/legal' },
    ],
  },
];
