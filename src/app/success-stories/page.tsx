import Clients from '@/components/success-stories/clients';
import GlobalStoriesPerformance from '@/components/success-stories/global-stories-performance';
import Hero from '@/components/success-stories/hero';
import SpotlightStories from '@/components/success-stories/spotlight-stories';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Success Stories | Arlo Technologies',
  description:
    "Real Businesses. Bold Ideas. Meaningful Progress. Discover the businesses we've worked with, the people driving their vision, and the digital experiences created through collaboration with Arlo Technologies.",
  alternates: {
    canonical: 'https://arlotechnologies.com/success-stories',
  },
};

const page = () => {
  return (
    <main className="dark:bg-secondary bg-white">
      <Hero />
      <Clients />
      <SpotlightStories />
      <GlobalStoriesPerformance />
    </main>
  );
};

export default page;
