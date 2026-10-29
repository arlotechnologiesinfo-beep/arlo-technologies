import CTA from '@/components/shared/cta/CTA';
import Banner from '@/components/tutorial/Banner';
import Blog from '@/components/tutorial/Blog';
import Community from '@/components/tutorial/Community';
import Features from '@/components/tutorial/Features';
import Integration from '@/components/tutorial/Integration';
import Services from '@/components/tutorial/Services';
import Tutorials from '@/components/tutorial/Tutorials';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Tutorials & Technical Guides || Arlo Technologies',
};

const Tutorial = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5 overflow-x-hidden">
      <Banner />
      <Blog />
      <Features />
      <Tutorials />
      <Services />
      <Integration />
      <Community />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="badge-green"
        badgeText="Start Building"
        ctaHeading="Ready to build your next digital solution with Arlo?"
        description="Explore our technical documentation, follow step-by-step guides, or connect with our engineering team."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default Tutorial;
