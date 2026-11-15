import SanrakshaLanding from '@/components/sanraksha/SanrakshaLanding';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Sanraksha – Secure Document Vault | Arlo Technologies',
  description:
    'Sanraksha is a private, offline-first Android document vault designed to help individuals and families securely store, organize and manage important documents with hardware-backed encryption.',
  alternates: {
    canonical: 'https://arlotechnologies.in/sanraksha',
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Sanraksha – Your Documents. Your Phone. Nobody Else.',
    description:
      'Private, offline-first document vault by Arlo Technologies. Store identity cards, vehicle papers, insurance policies, and family records locally with AES-256-GCM encryption.',
    url: 'https://arlotechnologies.in/sanraksha',
  },
};

export default function SanrakshaPage() {
  return (
    <main className="min-h-screen">
      <SanrakshaLanding />
    </main>
  );
}
