import BlogIndexView from '@/features/blog/components/BlogIndexView';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'The Arlo Journal — Ideas That Move Technology Forward || Arlo Technologies',
  description:
    'Explore practical insights, emerging technologies, and the ideas shaping better digital experiences: practical AI, software engineering, automation, product design, cybersecurity, and the digital future.',
  openGraph: {
    title: 'The Arlo Journal — Ideas That Move Technology Forward',
    description:
      'Explore practical insights, emerging technologies, and the ideas shaping better digital experiences from Arlo Technologies.',
    type: 'website',
  },
};

const page = () => {
  return <BlogIndexView />;
};

export default page;
