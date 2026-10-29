import GlossaryCTA from '@/components/glossary/GlossaryCTA';
import Heading from '@/components/glossary/Heading';
import ShowGlossary from '@/components/glossary/ShowGlossary';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Productivity Glossary — The Language of Getting More Done || Arlo Technologies',
  description:
    'Explore the concepts, tools, and technologies powering modern productivity. From artificial intelligence and automation to APIs, cloud computing, and zero-trust security.',
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-7">
      <Heading />
      <ShowGlossary />
      <GlossaryCTA />
    </main>
  );
};

export default page;
