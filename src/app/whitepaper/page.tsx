import Client from '@/components/white-paper/Client';
import FeaturedResearch from '@/components/white-paper/FeaturedResearch';
import Hero from '@/components/white-paper/Hero';
import Research from '@/components/white-paper/Researchs';
import WhitepaperAudienceAndApproach from '@/components/white-paper/WhitepaperAudienceAndApproach';
import WhitepaperCategories from '@/components/white-paper/WhitepaperCategories';
import WhitepaperCTA from '@/components/white-paper/WhitepaperCTA';
import WhitepaperFaq from '@/components/white-paper/WhitepaperFaq';
import WhitepaperKnowledge from '@/components/white-paper/WhitepaperKnowledge';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Whitepapers & Research || Arlo Technologies',
  description:
    'Explore practical research, technical perspectives, and implementation-focused guides from Arlo Technologies. Ideas that inform, research that moves technology forward.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <Hero />
      <WhitepaperKnowledge />
      <WhitepaperCategories />
      <FeaturedResearch />
      <Research />
      <WhitepaperAudienceAndApproach />
      <WhitepaperFaq />
      <WhitepaperCTA />
      <Client />
    </main>
  );
};

export default page;
