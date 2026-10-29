import Contact from '@/components/support/Contact';
import NeedHelp from '@/components/support/NeedHelp';
import Services from '@/components/support/Services';
import SupportCTA from '@/components/support/SupportCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Support & Help Center || Arlo Technologies',
  description:
    'Need help with Arlo Technologies? Connect with our team, submit a support ticket, or explore our knowledge base.',
};

const Support = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <NeedHelp />
      <Services />
      <Contact />
      <SupportCTA />
    </main>
  );
};

export default Support;
