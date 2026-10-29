import CareerCTA from '@/components/career/CareerCTA';
import CareerContent from '@/components/career/CareerContent';
import Features from '@/components/career/Features';
import Positions from '@/components/career/Positions';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Careers & Internships || Arlo Technologies',
};

const Career = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <CareerContent />
      <Features />
      <Positions />
      <CareerCTA />
    </main>
  );
};

export default Career;
