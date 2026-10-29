import PrivacyContent from '@/components/privacy/PrivacyContent';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Privacy Policy || Arlo Technologies India',
  description:
    'Comprehensive privacy policy under the Digital Personal Data Protection Act, 2023 (DPDP Act) and DPDP Rules, 2025 for Arlo Technologies India.',
};

const PrivacyPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7 min-h-screen">
      <PrivacyContent />
      <CTA
        className="dark:bg-background-5 bg-white border-t border-stroke-3 dark:border-stroke-7"
        badgeClass="badge-cyan"
        badgeText="Data Privacy"
        ctaHeading="Need to Exercise Your DPDP Statutory Rights?"
        description="Submit data access, correction, or erasure requests directly to our Data Protection Officer for prompt resolution."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Submit Data Request"
      />
    </main>
  );
};

export default PrivacyPage;
