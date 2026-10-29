import Content from '@/components/our-manifesto/Content';
import Hero from '@/components/our-manifesto/Hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Manifesto || Arlo Technologies',
  description: 'We believe the future is built, not waited for. Ideas into innovation. Technology into impact.',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-5">
      <Hero />
      <Content />
    </main>
  );
};

export default page;
