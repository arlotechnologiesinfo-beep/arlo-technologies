import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

interface FAQData {
  id: string;
  question: string;
  answer: string;
}

const referralFaqData: FAQData[] = [
  {
    id: '1',
    question: 'How does the Arlo Technologies Referral Program work?',
    answer:
      'The Referral Program enables existing clients, founders, and partners to introduce Arlo Technologies to colleagues and businesses. When an introduced referral signs up, meets qualifying subscription criteria, and maintains an active paying plan, you unlock reward credits applicable toward your own subscription.',
  },
  {
    id: '2',
    question: 'How do I get my referral link?',
    answer:
      'During our pilot phase, referral introductions and unique tracking links are managed directly by contacting our team. Once our automated self-serve partner portal completes its phased rollout, active subscribers will be able to generate and manage unique referral links directly from their dashboard.',
  },
  {
    id: '3',
    question: 'What kinds of products and solutions can I refer?',
    answer:
      'You can introduce clients to any eligible Arlo Technologies product or engineering vertical, including custom AI agents, automated workflows, web applications, software engineering services, and digital transformation consulting.',
  },
  {
    id: '4',
    question: 'How are referral rewards applied to my account?',
    answer:
      'Qualifying rewards are calculated upon successful subscription activation by your referral and applied as credits against your active subscription billing or service fees. Reward values and qualifying terms remain configurable per product category.',
  },
  {
    id: '5',
    question: 'How can I track the status of my referrals?',
    answer:
      'Referral attribution, eligibility review, and reward records are tracked systematically through our team during this pilot. Transparent attribution status (submitted, qualifying, active subscriber, and credited) ensures every genuine introduction is accurately recognized.',
  },
];

const Faq = () => {
  return (
    <section className="py-14 md:py-20 lg:py-28 bg-white dark:bg-secondary" aria-label="referral faq section">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="text-center space-y-3 mb-10">
            <span className="badge badge-yellow-v2">Questions &amp; Answers</span>
            <h2 className="text-heading-3 md:text-heading-2">Frequently Asked Questions</h2>
            <p className="text-secondary/70 dark:text-accent/70 max-w-[620px] mx-auto text-base md:text-lg">
              Everything you need to know about introducing partners and unlocking subscription rewards.
            </p>
          </div>
        </RevealAnimation>

        {/* faq accordion list */}
        <Accordion
          className="mx-auto mt-6 w-full max-w-[950px] space-y-4"
          defaultValue="1"
          enableScrollAnimation={true}
          animationDelay={0.1}>
          {referralFaqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              className="border-stroke-1 dark:border-stroke-7 rounded-[20px] border"
              value={faq.id}>
              <AccordionTrigger
                iconClassName="size-7 data-[state=open]:bg-secondary dark:data-[state=open]:bg-accent data-[state=open]:text-white dark:data-[state=open]:text-secondary dark:text-secondary data-[state=closed]:bg-ns-green accordion-home-38 rounded-full flex items-center justify-center accordion-arrow transition-colors duration-300 ease-in-out"
                titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                className="flex w-full cursor-pointer items-center justify-between p-4 md:p-6 lg:p-8"
                value={faq.id}
                iconType="arrow">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent value={faq.id} className="px-8 text-secondary/80 dark:text-accent/80 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

Faq.displayName = 'Faq';
export default Faq;
