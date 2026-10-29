// Affiliate Process section
import RevealAnimation from '../animation/RevealAnimation';
import AffiliatesList from './AffiliatesList';
import AffiliatesStep from './AffiliatesStep';

interface PartnerProfile {
  id: string;
  title: string;
  description: string;
  badge: string;
}

const partnerProfiles: PartnerProfile[] = [
  {
    id: 'creators-educators',
    badge: 'Content & Media',
    title: 'Creators & Educators',
    description:
      'Writers, newsletter authors, course creators, and technical educators who publish in-depth content on artificial intelligence, software engineering, and modern productivity.',
  },
  {
    id: 'developers-consultants',
    badge: 'Advisory & Systems',
    title: 'Developers & Consultants',
    description:
      'Software engineers, solution architects, and technology advisors who recommend dependable digital systems, APIs, and automated workflows to their clients.',
  },
  {
    id: 'agencies-communities',
    badge: 'Studios & Networks',
    title: 'Agencies & Business Communities',
    description:
      'Digital agencies, design studios, and founder mastermind groups seeking authoritative engineering and AI partners for their broader ecosystem.',
  },
  {
    id: 'founders-specialists',
    badge: 'Operators & Experts',
    title: 'Founders & Industry Specialists',
    description:
      'Experienced entrepreneurs and operational leaders who introduce peers and portfolio companies to proven digital capabilities that accelerate execution.',
  },
];

const AffiliateProcess = () => {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]" aria-label="affiliate process section">
      <div className="main-container space-y-16 md:space-y-24">
        {/* Section 1: Who can become an affiliate? */}
        <div className="space-y-10 md:space-y-12">
          <div className="text-center max-w-[720px] space-y-3 mx-auto">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-2">Partner Profiles</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-3 md:text-heading-2 font-normal">
                Who can become an affiliate?
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg leading-relaxed">
                We partner with thoughtful professionals and organizations that value technological depth,
                honest guidance, and long-term relationships over transactional links.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerProfiles.map((profile, index) => (
              <RevealAnimation key={profile.id} delay={0.1 + index * 0.1}>
                <div className="bg-white dark:bg-background-6 rounded-[20px] p-6 space-y-4 border border-stroke-3 dark:border-stroke-7 shadow-sm h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="badge badge-gray text-xs">{profile.badge}</span>
                    <h3 className="text-heading-6 font-semibold text-secondary dark:text-accent">
                      {profile.title}
                    </h3>
                    <p className="text-secondary/70 dark:text-accent/70 text-sm leading-relaxed">
                      {profile.description}
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* Section 2: How the affiliate journey works */}
        <div className="space-y-10 md:space-y-12 pt-6">
          <div className="text-center max-w-[700px] space-y-3 mx-auto">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-2">Journey</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-3 md:text-heading-2 font-normal">
                How the affiliate journey works.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg leading-relaxed">
                A structured process from initial application to transparent commission settlement.
              </p>
            </RevealAnimation>
          </div>
          <AffiliatesStep />
        </div>

        {/* Section 3: A partnership designed to grow */}
        <div className="pt-6">
          <AffiliatesList />
        </div>
      </div>
    </section>
  );
};

AffiliateProcess.displayName = 'AffiliateProcess';
export default AffiliateProcess;
