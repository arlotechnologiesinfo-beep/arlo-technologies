import About from '@/components/portfolio/About';
import Blog from '@/components/portfolio/Blog';
import CTA from '@/components/portfolio/CTA';
import Hero from '@/components/portfolio/Hero';
import Process from '@/components/portfolio/Process';
import Projects from '@/components/portfolio/Projects';
import Services from '@/components/portfolio/Services';
import Testimonial from '@/components/portfolio/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Portfolio - Creative Portfolio || Arlo Technologies',
  description:
    'Explore the creative portfolio and engineering showcase of Arlo Technologies. Delivering intelligent software platforms, modern digital products, and high-impact technology solutions.',
  alternates: {
    canonical: 'https://arlotechnologies.in/portfolio',
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Portfolio - Creative Portfolio || Arlo Technologies',
    description:
      'Explore the creative portfolio and engineering showcase of Arlo Technologies.',
    url: 'https://arlotechnologies.in/portfolio',
  },
};

const PortfolioPage = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Process />
      <Testimonial />
      <Blog />
      <CTA />
    </main>
  );
};

PortfolioPage.displayName = 'PortfolioPage';
export default PortfolioPage;
