import AppPricing from '@/components/pricing/AppPricing';
import CarePricing from '@/components/pricing/CarePricing';
import PricingCTA from '@/components/pricing/PricingCTA';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import PricingHero from '@/components/pricing/PricingHero';
import ProductsPricing from '@/components/pricing/ProductsPricing';
import WebsitePricing from '@/components/pricing/WebsitePricing';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Unified Pricing — Websites, Apps, Products & Care || Arlo Technologies',
  description:
    'Transparent, honest pricing for website development, custom apps, SaaS subscriptions, and ongoing technical maintenance. Explore clear starting rates in Indian Rupees from Arlo Technologies.',
};

const PricingPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7 min-h-screen">
      <PricingHero />
      <WebsitePricing />
      <AppPricing />
      <ProductsPricing />
      <CarePricing />
      <PricingFAQ />
      <PricingCTA />
    </main>
  );
};

export default PricingPage;
