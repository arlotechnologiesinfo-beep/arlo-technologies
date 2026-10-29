import FAQ from '@/components/referral-program/FAQ';
import Hero from '@/components/referral-program/Hero';
import ReferralBenefits from '@/components/referral-program/ReferralBenefits';
import ReferralCTA from '@/components/referral-program/ReferralCTA';
import Steps from '@/components/referral-program/Steps';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Referral Program | Arlo Technologies',
  description:
    'Good Connections Deserve Great Rewards. Introduce businesses and founders to Arlo Technologies and unlock rewards toward your subscription.',
  alternates: {
    canonical: 'https://arlotechnologies.com/referral-program',
  },
};

const page = () => {
  return (
    <main className="dark:bg-secondary bg-white">
      <Hero />
      <Steps />
      <ReferralBenefits />
      <FAQ />
      <ReferralCTA />
    </main>
  );
};

export default page;
