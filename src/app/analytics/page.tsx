import AnalyticsCTA from '@/components/analytics/AnalyticsCTA';
import AnalyticsDetails from '@/components/analytics/AnalyticsDetails';
import AnalyticsHero from '@/components/analytics/AnalyticsHero';
import AnalyticsTestimonial from '@/components/analytics/AnalyticsTestimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Analytics || Arlo Technologies',
  description:
    'Transform scattered information into meaningful insights with Arlo Technologies. Explore data, understand performance, and make informed decisions through intelligent analytics solutions.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <AnalyticsHero />
      <AnalyticsDetails />
      <AnalyticsTestimonial />
      <AnalyticsCTA />
    </main>
  );
};

export default page;
