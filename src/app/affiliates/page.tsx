import AffiliateCTA from '@/components/affiliates/AffiliateCTA';
import AffiliateProcess from '@/components/affiliates/AffiliateProcess';
import AffiliateProgram from '@/components/affiliates/AffiliateProgram';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Affiliate Program | Arlo Technologies',
  description:
    'Turn Your Influence Into Opportunity. Partner with Arlo Technologies to introduce relevant digital products and earn commissions on eligible attributed sales.',
  alternates: {
    canonical: 'https://arlotechnologies.com/affiliates',
  },
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <AffiliateProgram />
      <AffiliateProcess />
      <AffiliateCTA />
    </main>
  );
};

export default page;
