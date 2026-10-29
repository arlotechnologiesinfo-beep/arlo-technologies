import RefundPolicyContent from '@/components/refund-policy/RefundPolicyContent';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Refund & Cancellation Policy || Arlo Technologies India',
  description:
    'Consumer Protection Act compliant refund guidelines, milestone cancellation rules, and turnaround timelines for Arlo Technologies India.',
};

const RefundPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7 min-h-screen">
      <RefundPolicyContent />
      <CTA
        className="dark:bg-background-5 bg-white border-t border-stroke-3 dark:border-stroke-7"
        badgeClass="badge-cyan"
        badgeText="Support & Billing"
        ctaHeading="Questions Regarding Billing or Invoices?"
        description="Our accounts and billing support team is here to assist with invoice reconciliations, payment reversals, and queries."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Contact Billing Support"
      />
    </main>
  );
};

export default RefundPage;
