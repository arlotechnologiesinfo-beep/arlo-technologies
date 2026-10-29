import Counter from '@/components/why-choose-us/Counter';
import CTA from '@/components/why-choose-us/CTA';
import Feature from '@/components/why-choose-us/Feature';
import Hero from '@/components/why-choose-us/Hero';
import WhyArlo from '@/components/why-choose-us/WhyArlo';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Why Choose Us || Arlo Technologies',
  description:
    'Built on Ideas. Driven by Innovation. Focused on Impact. Discover why companies choose Arlo Technologies.',
};

const page = () => {
  return (
    <main className="dark:bg-background-5 bg-white">
      <Hero />
      <Counter />
      <Feature />
      <WhyArlo />
      <CTA />
    </main>
  );
};

export default page;
