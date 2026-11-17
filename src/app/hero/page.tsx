import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import HeroSection from '@/components/hero/HeroSection';
import ProblemSection from '@/components/hero/ProblemSection';
import SpecializationSection from '@/components/hero/SpecializationSection';
import WorkSection from '@/components/hero/WorkSection';
import BannerSection from '@/components/hero/BannerSection';
import ServicesSection from '@/components/hero/ServicesSection';
import EngagementSection from '@/components/hero/EngagementSection';
import ProcessSection from '@/components/hero/ProcessSection';
import FAQSection from '@/components/hero/FAQSection';
import ContactSection from '@/components/hero/ContactSection';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Hero — Arlo Technologies | Engineering Studio',
  description:
    'Arlo Technologies engineers intelligent software platforms, modern digital products, and high-impact technology solutions for forward-thinking businesses.',
  alternates: {
    canonical: 'https://arlotechnologies.in/hero',
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Hero — Arlo Technologies | Engineering Studio',
    description:
      'Intelligent software. Scalable systems. Engineered for impact.',
    url: 'https://arlotechnologies.in/hero',
  },
};

export default function HeroPage() {
  return (
    <main className="hero-page relative mx-2 md:mx-4 lg:mx-auto lg:max-w-[1440px]">
      {/* Decorative side borders */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -inset-x-px z-30 border-x border-border hidden lg:block"
      />
      <HeroSection />
      <ProblemSection />
      <SpecializationSection />
      <WorkSection />
      <BannerSection />
      <ServicesSection />
      <EngagementSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
