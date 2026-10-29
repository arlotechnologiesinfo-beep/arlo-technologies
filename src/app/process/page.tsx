import ProcessFaq from '@/components/process/ProcessFaq';
import ProcessStep from '@/components/process/ProcessStep';
import ProcessCTA from '@/components/process/ProcessCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Process || Arlo Technologies',
  description:
    'From first conversation to what’s next. Explore our clear, collaborative 8-step process for turning ideas into functional digital solutions.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ProcessStep />
      <ProcessFaq />
      <ProcessCTA />
    </main>
  );
};

export default page;
