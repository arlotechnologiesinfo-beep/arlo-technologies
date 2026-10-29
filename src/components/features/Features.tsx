import featureAsset1 from '@public/images/ns-img-67.png';
import featureAsset2 from '@public/images/ns-img-68.png';
import featureAsset3 from '@public/images/ns-img-69.png';
import featureAsset4 from '@public/images/ns-img-70.png';
import featureAsset5 from '@public/images/ns-img-71.png';
import featureAsset6 from '@public/images/ns-img-72.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    title: 'AI-Powered Innovation',
    subheading: 'Intelligence With Purpose.',
    description:
      'Explore practical AI solutions that help simplify workflows, support better decisions, and unlock new possibilities.',
    img: featureAsset1,
  },
  {
    id: 2,
    title: 'Intelligent Automation',
    subheading: 'Less Repetition. More Progress.',
    description:
      'Connect processes and streamline recurring tasks to help teams work more efficiently.',
    img: featureAsset2,
  },
  {
    id: 3,
    title: 'Web Development',
    subheading: 'Digital Experiences That Deliver.',
    description:
      'Build responsive, engaging websites designed around users, business objectives, and long-term growth.',
    img: featureAsset3,
  },
  {
    id: 4,
    title: 'Software & App Development',
    subheading: 'Ideas Into Functional Products.',
    description:
      'Transform concepts into useful digital products through thoughtful engineering and scalable architecture.',
    img: featureAsset4,
  },
  {
    id: 5,
    title: 'UI/UX & Product Design',
    subheading: 'Simplicity in Every Interaction.',
    description:
      'Create intuitive interfaces and cohesive user experiences that make technology easier to understand and use.',
    img: featureAsset5,
  },
  {
    id: 6,
    title: 'Integrations & Digital Solutions',
    subheading: 'Everything Working Together.',
    description:
      'Connect platforms, tools, and workflows to create more seamless digital experiences.',
    img: featureAsset6,
  },
];

const FeatureCard = () => {
  return (
    <section className="overflow-hidden pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="mb-14 space-y-4 text-center">
          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 mx-auto max-w-[850px] font-normal">
              Technology That Moves Ideas Forward.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary dark:text-accent mx-auto max-w-[700px] text-lg sm:text-xl font-medium">
              Powerful Digital Solutions. Built Around Your Ambition.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="text-secondary/70 dark:text-accent/70 mx-auto max-w-[680px] leading-relaxed">
              Discover how Arlo Technologies combines intelligent technology, thoughtful design, and practical engineering to turn complex challenges into meaningful digital experiences.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
          {data.map((feature, index) => (
            <RevealAnimation delay={0.5 + index * 0.1} key={feature.id}>
              <div className="bg-background-2 dark:bg-background-5 col-span-12 space-y-6 rounded-[20px] p-6 md:col-span-6 lg:col-span-4 flex flex-col justify-between h-full">
                <figure className="w-full max-w-[360px]">
                  <Image src={feature.img} alt={feature.title} className="h-full w-full rounded-2xl object-cover" />
                </figure>
                <div className="space-y-2">
                  <h3 className="text-heading-5">{feature.title}</h3>
                  <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 font-medium">
                    {feature.subheading}
                  </p>
                  <p className="text-secondary/70 dark:text-accent/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
FeatureCard.displayName = 'FeatureCard';
export default FeatureCard;
