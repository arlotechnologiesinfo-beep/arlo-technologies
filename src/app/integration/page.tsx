import Integration from '@/components/integration/Integration';
import CTA from '@/components/features/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Integrations & Technology Stack || Arlo Technologies',
  description:
    'Explore the website builders, CMS platforms, design tools, e-commerce, AI APIs, databases, and infrastructure tools supported by Arlo Technologies.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Integration />
      <CTA />
    </main>
  );
};

export default page;
