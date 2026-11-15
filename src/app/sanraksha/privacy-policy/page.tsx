import SanrakshaPrivacyContent from '@/components/sanraksha/SanrakshaPrivacyContent';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Sanraksha Privacy Policy | Arlo Technologies',
  description:
    'Learn how Sanraksha protects your documents through offline storage, encryption, local processing and privacy-focused security.',
  alternates: {
    canonical: 'https://arlotechnologies.in/sanraksha/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Sanraksha – Privacy Policy',
    description:
      'Learn how Sanraksha protects your documents through offline storage, encryption, local processing and privacy-focused security.',
    url: 'https://arlotechnologies.in/sanraksha/privacy-policy',
    type: 'website',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Sanraksha – Privacy Policy | Arlo Technologies',
    description:
      'Learn how Sanraksha protects your documents through offline storage, encryption, local processing and privacy-focused security.',
  },
};

const SanrakshaPrivacyPolicyPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7 min-h-screen">
      <SanrakshaPrivacyContent />
      <CTA
        className="dark:bg-background-5 bg-white border-t border-stroke-3 dark:border-stroke-7"
        badgeClass="badge-cyan"
        badgeText="Sanraksha Support & Trust"
        ctaHeading="Have Questions About Sanraksha Privacy?"
        description="Our team is dedicated to building offline-first, privacy-respecting technology. Reach out directly for privacy inquiries or security feedback."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Contact Privacy Team"
      />
    </main>
  );
};

export default SanrakshaPrivacyPolicyPage;
