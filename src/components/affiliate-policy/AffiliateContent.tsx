import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface PolicySection {
  id: string;
  sectionNumber: string;
  title: string;
  intro: string;
  points: string[];
}

const policySections: PolicySection[] = [
  {
    id: 'eligibility-approval',
    sectionNumber: '01',
    title: 'Eligibility and Approval',
    intro:
      'Participation in the Arlo Technologies Affiliate Program is subject to an application and review process. We evaluate prospective affiliates based on brand alignment, content quality, audience relevance, and adherence to professional promotional ethics.',
    points: [
      'Applicants must provide accurate contact information, valid business registration (where applicable), and primary digital promotional channels (website, newsletter, social channels, or consultancy).',
      'Arlo Technologies reserves the right to accept, reject, or request further information regarding any affiliate application at its sole discretion.',
      'Affiliates must be of legal age to enter into binding agreements in their respective jurisdictions.',
    ],
  },
  {
    id: 'links-attribution',
    sectionNumber: '02',
    title: 'Affiliate Links and Attribution',
    intro:
      'Upon formal acceptance, affiliates receive designated tracking parameters and custom referral links to direct potential clients to Arlo Technologies websites and product pages.',
    points: [
      'Attribution relies on tracking parameters appended to official Arlo Technologies URLs. The system records referrals when a visitor navigates through an authorized link.',
      'Attribution windows and cookie lifetimes are subject to configurable operational parameters and browser privacy controls. Cookie durations represent operational estimates rather than guaranteed contractual minimums.',
      'Last-touch or multi-touch attribution logic is applied in accordance with current system capability. If a prospective customer clicks multiple affiliate links, attribution follows standard programme sequence.',
    ],
  },
  {
    id: 'commission-eligibility',
    sectionNumber: '03',
    title: 'Commission Eligibility',
    intro:
      'Commissions are earned exclusively on verified, eligible, and completed customer purchases that are directly and successfully attributed to the affiliate.',
    points: [
      'Qualifying transactions require a new customer who creates an account and completes an authorized paid subscription or project agreement.',
      'Self-referrals (signing up via one’s own affiliate link for personal or direct subsidiary use) are strictly prohibited and non-commissionable.',
      'Free trials, abandoned carts, cancelled orders, chargebacks, and test transactions do not qualify for commission payments.',
    ],
  },
  {
    id: 'approval-reversals',
    sectionNumber: '04',
    title: 'Commission Approval and Reversals',
    intro:
      'All generated commissions undergo an administrative review and holding period before moving from pending to payable status.',
    points: [
      'A holding period is observed to account for money-back guarantees, billing cancellations, credit card disputes, or service modifications.',
      'Commissions will be reversed or withheld if a transaction is subsequently refunded, disputed, found to involve fraudulent payment methods, or tied to unauthorized promotional tactics.',
      'In the event of an attribution dispute, Arlo Technologies reviews server logs and tracking records; administrative determinations are final.',
    ],
  },
  {
    id: 'payment-terms',
    sectionNumber: '05',
    title: 'Payment Terms',
    intro:
      'Commissions approved by our finance department are disbursed according to established schedules and agreed partner thresholds.',
    points: [
      'Disbursement methods (e.g. direct electronic transfer or bank wire) depend on regional availability and valid account verification.',
      'Minimum payout thresholds and payment cycles are established in individual partner schedules to prevent administrative inefficiency.',
      'Affiliates are solely responsible for all applicable local, national, and international taxes, levies, or duties arising from affiliate earnings.',
    ],
  },
  {
    id: 'honest-promotion',
    sectionNumber: '06',
    title: 'Honest and Transparent Promotion',
    intro:
      'We require our affiliates to uphold the highest standards of transparency and integrity when presenting Arlo Technologies products and services to their audience.',
    points: [
      'Affiliates must clearly and conspicuously disclose their financial relationship with Arlo Technologies in compliance with FTC guidelines and regional consumer protection statutes.',
      'All product descriptions, capabilities, and technical features must accurately reflect current Arlo Technologies documentation without exaggeration or unsubstantiated claims.',
      'Personal testimonials, case studies, or reviews published by affiliates must reflect authentic opinions, findings, or experiences.',
    ],
  },
  {
    id: 'prohibited-practices',
    sectionNumber: '07',
    title: 'Prohibited Promotional Practices',
    intro:
      'Any activity that harms our brand reputation, deceives consumers, or disrupts fair competition will result in immediate disqualification.',
    points: [
      'Unsolicited commercial communications, including email spam, forum auto-posting, and social media message automation, are strictly prohibited.',
      'Bidding on Arlo Technologies trademarks, brand names, or misspellings in search engine marketing (Google Ads, Bing, etc.) without prior written consent is disallowed.',
      'Listing links or codes on public coupon, rebate, or discount aggregator websites is prohibited.',
      'Cookie-stuffing, hidden iframes, malware, forced redirects, or automated link triggers are grounds for immediate termination.',
    ],
  },
  {
    id: 'brand-ip',
    sectionNumber: '08',
    title: 'Brand Assets and Intellectual Property',
    intro:
      'Affiliates receive a limited, revocable, non-exclusive license to display official marketing collateral solely for promoting Arlo Technologies.',
    points: [
      'Affiliates may not alter, stretch, re-color, or modify official Arlo Technologies logos, graphics, or brand marks.',
      'Affiliates must not register domain names, social media handles, or company entities incorporating "Arlo Technologies" or confusingly similar variations.',
      'Promotion must never imply that the affiliate is an employee, official spokesperson, or legal agent of Arlo Technologies.',
    ],
  },
  {
    id: 'privacy-tracking',
    sectionNumber: '09',
    title: 'Privacy and Tracking Compliance',
    intro:
      'Affiliates must comply with all applicable privacy regulations and data protection legislation governing digital tracking and customer data.',
    points: [
      'Affiliates must maintain a clear, publicly accessible privacy policy informing visitors about cookie usage and referral tracking mechanisms.',
      'Affiliates must respect consumer consent preferences, cookie banners, and statutory opt-out rights under GDPR, CCPA, and related privacy laws.',
      'Affiliates must never collect, store, or transmit sensitive personal information of referred customers to third parties without lawful basis.',
    ],
  },
  {
    id: 'suspension-termination',
    sectionNumber: '10',
    title: 'Suspension and Termination',
    intro:
      'Either party may terminate affiliate participation at any time with or without cause by providing written notification.',
    points: [
      'Immediate termination and forfeiture of pending commissions occur in the event of fraudulent activity, breach of promotional guidelines, or brand disparagement.',
      'Upon termination, the affiliate must immediately cease using all Arlo Technologies links, logos, and promotional assets across all channels.',
      'Legitimately earned, verified commissions accrued prior to termination for non-cause will be processed in the standard payment cycle.',
    ],
  },
  {
    id: 'programme-changes',
    sectionNumber: '11',
    title: 'Programme Changes',
    intro:
      'Arlo Technologies reserves the right to modify, pause, or update these operational terms, commission schedules, or product eligibility tiers.',
    points: [
      'Material changes will be communicated via the affiliate portal, website updates, or email notification.',
      'Continued participation in the programme following published updates constitutes acceptance of the amended terms.',
      'Rate adjustments apply to prospective conversions and do not retroactively alter previously approved, payable commissions.',
    ],
  },
  {
    id: 'questions-support',
    sectionNumber: '12',
    title: 'Questions and Support',
    intro:
      'Our partnerships team is dedicated to supporting affiliates and resolving attribution, policy, or operational queries promptly.',
    points: [
      'For partnership questions or clarification on approved promotional channels, please contact our team via the Contact Us page.',
      'For inquiries regarding ongoing business discussions, refer to your designated partnerships manager.',
    ],
  },
];

const AffiliateContent = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 py-20 md:py-28 lg:py-36" aria-label="affiliate policy content">
      <div className="main-container">
        <div className="mx-auto max-w-[880px] space-y-12 md:space-y-16">
          <div className="space-y-4">
            <span className="badge badge-yellow-v2">Policy Articles</span>
            <h2 className="text-heading-3 md:text-heading-2 font-normal">
              Operational Standards &amp; Terms
            </h2>
            <p className="text-secondary/70 dark:text-accent/70 text-base md:text-lg leading-relaxed">
              Please review each section below to understand our operational expectations, tracking mechanisms,
              and ethical guidelines.
            </p>
          </div>

          <div className="space-y-10 md:space-y-14">
            {policySections.map((section, index) => (
              <RevealAnimation key={section.id} delay={0.05 + index * 0.05}>
                <div
                  id={section.id}
                  className="rounded-[20px] bg-white dark:bg-background-5 p-7 md:p-9 border border-stroke-3 dark:border-stroke-7 shadow-sm space-y-5">
                  <div className="flex items-center gap-4">
                    <span className="flex size-9 items-center justify-center rounded-full bg-ns-green/20 text-xs font-semibold text-secondary dark:text-accent shrink-0">
                      {section.sectionNumber}
                    </span>
                    <h3 className="text-heading-5 md:text-heading-4 font-normal text-secondary dark:text-accent">
                      {section.title}
                    </h3>
                  </div>

                  <p className="text-secondary/80 dark:text-accent/80 text-sm md:text-base leading-relaxed">
                    {section.intro}
                  </p>

                  <ul className="space-y-2.5 pt-2 border-t border-stroke-3 dark:border-stroke-7">
                    {section.points.map((pt, ptIdx) => (
                      <li key={ptIdx} className="flex items-start gap-3 text-xs sm:text-sm text-secondary/70 dark:text-accent/70 leading-relaxed">
                        <span className="size-1.5 rounded-full bg-secondary/40 dark:bg-accent/40 mt-2 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {section.id === 'questions-support' && (
                    <div className="pt-2">
                      <Link
                        href="/contact-us"
                        className="btn btn-secondary hover:btn-primary dark:btn-white dark:hover:btn-primary btn-sm inline-block">
                        Contact Partnerships Team
                      </Link>
                    </div>
                  )}
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateContent;
