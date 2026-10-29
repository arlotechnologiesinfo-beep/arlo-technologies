import LegalHubContent from '@/components/legal-notice/LegalHubContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Legal Hub & Regulatory Disclosures || Arlo Technologies India',
  description:
    'Statutory corporate disclosures, Grievance Officer details, AI use policies, and core legal terms for Arlo Technologies India.',
};

const LegalPage = () => {
  return (
    <main className="dark:bg-background-7 bg-background-3 min-h-screen">
      <LegalHubContent />
    </main>
  );
};

export default LegalPage;
