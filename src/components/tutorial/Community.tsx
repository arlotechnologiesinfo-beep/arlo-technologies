import RevealAnimation from '../animation/RevealAnimation';

interface CommunityFeature {
  icon: string;
  title: string;
  description: string;
}

const communityFeatures: CommunityFeature[] = [
  {
    icon: 'ns-shape-9',
    title: 'Troubleshooting & Support',
    description: 'Find solutions to common integration challenges, debug API responses, and review community-verified answers.',
  },
  {
    icon: 'ns-shape-3',
    title: 'Practical Project Showcases',
    description: 'Explore real-world architecture examples, workflow automations, and practical implementations from the community.',
  },
  {
    icon: 'ns-shape-12',
    title: "What's New & Updates",
    description: 'Stay informed on the latest features, API releases, tutorial additions, and continuous platform improvements.',
  },
];

const Community = () => {
  return (
    <section className="bg-background-3 dark:bg-background-5 md:py-[100px] py-[50px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>Join the Arlo Technologies Developer Community</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p>Ask questions, exchange practical project patterns, and connect with engineers and creators building on Arlo.</p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-8">
          {communityFeatures.map((feature, index) => (
            <RevealAnimation key={feature.title} delay={0.3 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6 text-center bg-background-1 rounded-[20px] sm:p-11 p-7 dark:bg-background-6">
                  <div className="mx-auto">
                    <span className={`${feature.icon} text-[52px] text-secondary dark:text-accent`}> </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
