import AffiliateContent from '@/components/affiliate-policy/AffiliateContent';
import Guideline from '@/components/affiliate-policy/Guideline';
import PolicyCTA from '@/components/affiliate-policy/PolicyCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Affiliate Policy | Arlo Technologies',
  description:
    'Clear Rules. Fair Partnerships. Shared Growth. Operational guidelines and standards for participating in the Arlo Technologies Affiliate Program.',
  alternates: {
    canonical: 'https://arlotechnologies.com/affiliate-policy',
  },
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Guideline />
      <AffiliateContent />
      <PolicyCTA />
    </main>
  );
};

export default page;
