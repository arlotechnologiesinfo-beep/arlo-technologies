import CTA from '@/components/shared/cta/CTA';
import TermsConditionContent from '@/components/terms-conditions/TermsConditionContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Terms of Use || Arlo Technologies India',
  description:
    'Terms of Use governing services, software products, and website use for Arlo Technologies India under the Information Technology Act, 2000.',
};

const TermsPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7 min-h-screen">
      <TermsConditionContent />
      <CTA
        className="dark:bg-background-5 bg-white border-t border-stroke-3 dark:border-stroke-7"
        badgeClass="badge-cyan"
        badgeText="Legal Assistance"
        ctaHeading="Have Questions About Our Terms or Statements of Work?"
        description="Our compliance team in Hyderabad is available to discuss custom project terms, licensing, or commercial arrangements."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Contact Legal Team"
      />
    </main>
  );
};

export default TermsPage;
