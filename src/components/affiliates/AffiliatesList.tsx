import RevealAnimation from '../animation/RevealAnimation';

interface AffiliateSection {
  id: string;
  title: string;
  description: string;
  items: string[];
}

const affiliateSectionsData: AffiliateSection[] = [
  {
    id: 'partnership-pillars',
    title: 'A partnership designed to grow.',
    description:
      'We believe affiliate partnerships thrive when built on mutual trust, clean tracking, and dependable communication. We provide the infrastructure, context, and support you need to recommend Arlo Technologies with confidence.',
    items: [
      'Configurable commission schedules tailored to software and solution tiers',
      'Dedicated partner tracking parameters built for accurate attribution',
      'Transparent commission lifecycle (pending, approved, payable, and completed)',
      'Regular product updates, technical roadmap visibility, and marketing assets',
      'Direct line of communication with our partnerships and technical team',
    ],
  },
  {
    id: 'approved-promotions',
    title: 'Recommended ways to share Arlo Technologies',
    description:
      'The most successful affiliates focus on genuine education, context-rich demonstrations, and authentic workflow problem solving.',
    items: [
      'Publishing in-depth tutorials, technical guides, and architectural breakdowns',
      'Demonstrating AI agents and automated workflows in real-world scenarios',
      'Recommending software solutions during client discovery and advisory engagements',
      'Hosting workshops, webinars, or community sessions on modern digital operations',
    ],
  },
  {
    id: 'prohibited-practices',
    title: 'Promotional standards & prohibited practices',
    description:
      'To protect brand integrity and user trust, all affiliates must adhere to strict ethical and professional promotion standards.',
    items: [
      'No unsolicited bulk outreach, forum spamming, or irrelevant comment insertion',
      'No misleading statements, exaggerated performance claims, or fabricated testimonials',
      'No bidding on Arlo Technologies trademarks or brand keywords in paid search',
      'No posting on coupon, voucher, or discount aggregator directories',
    ],
  },
];

const AffiliatesList = () => {
  return (
    <article className="space-y-12 pt-8 md:space-y-16">
      {affiliateSectionsData.map((section, index) => (
        <RevealAnimation key={section.id} delay={0.1 + index * 0.1}>
          <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 md:p-10 border border-stroke-3 dark:border-stroke-7 shadow-sm">
            <h3 className="text-heading-5 md:text-heading-4 mb-3 font-normal text-secondary dark:text-accent">
              {section.title}
            </h3>
            <p className="text-secondary/70 dark:text-accent/70 mb-8 max-w-[760px] text-base md:text-lg leading-relaxed">
              {section.description}
            </p>
            <ul className="space-y-3.5">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-tagline-1 text-secondary/80 dark:text-accent/80 flex items-start gap-3">
                  <span className="size-2 rounded-full bg-ns-green mt-2.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealAnimation>
      ))}
    </article>
  );
};

AffiliatesList.displayName = 'AffiliatesList';
export default AffiliatesList;
