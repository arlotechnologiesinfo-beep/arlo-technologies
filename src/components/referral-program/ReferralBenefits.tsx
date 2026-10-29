import RevealAnimation from '../animation/RevealAnimation';

interface BenefitCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  points: string[];
}

const benefitCards: BenefitCard[] = [
  {
    id: 'save-subscription',
    badge: 'Rewards',
    title: 'Save on Your Subscription.',
    description:
      'Unlock subscription credits that reduce the ongoing cost of your Arlo Technologies products and services. When your referral activates an eligible plan, the value flows directly back to you.',
    points: [
      'Credits applied toward eligible recurring subscription plans',
      'Configurable reward tiers per product category',
      'Mutual value created for both referrer and referee',
    ],
  },
  {
    id: 'what-to-refer',
    badge: 'Offerings',
    title: 'What can you refer?',
    description:
      'Introduce colleagues and businesses to our complete spectrum of digital capabilities—from standalone AI agents and productivity tools to custom web platforms and complex workflow automations.',
    points: [
      'Intelligent AI agents and conversational copilots',
      'High-performance web and software engineering',
      'Operational workflow automation and cloud integrations',
    ],
  },
  {
    id: 'referrals-visible',
    badge: 'Attribution',
    title: 'Your referrals, made visible.',
    description:
      'Our programme architecture is built for complete transparency. Referral tracking, attribution status, and earned credits are clearly structured so you always know where your introductions stand.',
    points: [
      'Unique referral identifiers for accurate multi-touch tracking',
      'Status indicators: introduction, qualifying, active subscriber',
      'Pilot programme managed directly with our team prior to automated dashboard release',
    ],
  },
];

const ReferralBenefits = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-background-2 dark:bg-background-7" aria-label="referral benefits section">
      <div className="main-container space-y-12 md:space-y-16">
        <div className="mx-auto max-w-[760px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-2">Referral Value</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 md:text-heading-2">
              One introduction. More value for both sides.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg leading-relaxed">
              When you recommend solutions you trust, everyone benefits. Explore how the Arlo Technologies
              Referral Program connects your professional network with modern digital capabilities.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefitCards.map((card, index) => (
            <RevealAnimation key={card.id} delay={0.1 + index * 0.15}>
              <div className="bg-white dark:bg-background-6 rounded-[20px] p-7 md:p-8 space-y-6 flex flex-col justify-between h-full border border-stroke-3 dark:border-stroke-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <span className="badge badge-gray text-xs">{card.badge}</span>
                  <h3 className="text-heading-5 font-semibold text-secondary dark:text-accent">
                    {card.title}
                  </h3>
                  <p className="text-secondary/70 dark:text-accent/70 text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-stroke-3 dark:border-stroke-7">
                  <ul className="space-y-2.5">
                    {card.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary/80 dark:text-accent/80">
                        <span className="bg-ns-green size-1.5 rounded-full mt-2 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

ReferralBenefits.displayName = 'ReferralBenefits';
export default ReferralBenefits;
