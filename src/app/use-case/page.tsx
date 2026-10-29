import FeatureIntro from '@/components/use-case/FeatureIntro';
import FinanceAndOperation from '@/components/use-case/FinanceAndOperation';
import UseCaseCTA from '@/components/use-case/UseCaseCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Use Cases || Arlo Technologies',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <FeatureIntro />
      <FinanceAndOperation />
      <UseCaseCTA />
    </main>
  );
};

export default page;
