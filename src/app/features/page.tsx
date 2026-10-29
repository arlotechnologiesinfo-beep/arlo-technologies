import FeatureList from '@/components/features/FeatureList';
import FeatureCard from '@/components/features/Features';
import FeaturesV2 from '@/components/features/FeaturesV2';
import Reviews from '@/components/features/Reviews';
import Team from '@/components/features/Team';
import CTA from '@/components/features/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Features || Arlo Technologies',
  description:
    'Discover how Arlo Technologies combines intelligent technology, thoughtful design, and practical engineering to turn complex challenges into meaningful digital experiences.',
};

const Features = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <FeatureCard />
      <Team />
      <FeatureList />
      <FeaturesV2 />
      <Reviews />
      <CTA />
    </main>
  );
};

export default Features;
