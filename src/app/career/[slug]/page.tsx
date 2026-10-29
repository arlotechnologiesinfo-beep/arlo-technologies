import CareerCTA from '@/components/career/CareerCTA';
import CareerDetailsBody from '@/components/career/CareerDetailsBody';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const careers = getMarkDownData('src/data/career');
  return careers.map((career) => ({
    slug: career.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const position = getMarkDownContent('src/data/career/', slug);
  return {
    ...defaultMetadata,
    title: `${position?.data?.title || 'Internship Details'} — Careers || Arlo Technologies`,
    description: position?.data?.shortDescription || defaultMetadata.description,
  };
}

const CareerDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <CareerDetailsBody slug={slug} />
      <CareerCTA />
    </main>
  );
};

export default CareerDetails;
