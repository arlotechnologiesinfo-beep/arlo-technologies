'use client';

import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const whitepaperFaqs = [
  {
    id: 'faq-1',
    question: '1. What are Arlo Technologies whitepapers?',
    answer:
      'Our whitepapers explore the technologies shaping tomorrow—from artificial intelligence and intelligent automation to software architecture, cybersecurity, and digital product innovation. Each publication is designed to turn complex concepts into clear insights and practical takeaways.',
  },
  {
    id: 'faq-2',
    question: '2. Why should I read your whitepapers?',
    answer:
      'Because better decisions start with better understanding. Our research aims to help you explore new opportunities, compare technical approaches, understand potential risks, and discover practical ways to solve real-world technology challenges.',
  },
  {
    id: 'faq-3',
    question: '3. Who can benefit from these whitepapers?',
    answer:
      'Whether you’re a founder planning your next product, a developer exploring a new architecture, a product manager shaping an experience, or a student curious about emerging technology, our publications are designed to make complex ideas more approachable.',
  },
  {
    id: 'faq-4',
    question: '4. Are your whitepapers free to access?',
    answer:
      'Access depends on the individual publication. Where a whitepaper is marked as free, you can explore it without a purchase. Any registration or access requirements will be clearly stated on the relevant publication page.',
  },
  {
    id: 'faq-5',
    question: '5. What topics does Arlo Technologies cover?',
    answer:
      'Our research spans AI and AI agents, workflow automation, software engineering, backend architecture, privacy and security, UI/UX design, system integrations, and digital transformation. We continually explore topics relevant to evolving technology and business needs.',
  },
  {
    id: 'faq-6',
    question: '6. Are these whitepapers theoretical or practical?',
    answer:
      'We aim to connect both. Depending on the topic, a publication may include technical explanations, architectural approaches, implementation considerations, decision frameworks, limitations, and practical next steps—not just descriptions of technology.',
  },
  {
    id: 'faq-7',
    question: '7. How do you ensure the information is reliable?',
    answer:
      'Our publications should distinguish established practices from emerging ideas, explain important assumptions, and reference relevant sources where appropriate. Technical claims and recommendations should be reviewed before publication, and we aim to make limitations clear rather than overpromise.',
  },
  {
    id: 'faq-8',
    question: '8. Can I use your whitepapers for my project or business?',
    answer:
      'You can use the insights to inform your learning, planning, and technical decisions. However, reproduction, redistribution, commercial reuse, and other uses are subject to the rights and licence stated in each publication. Always review the applicable terms before reusing material.',
  },
  {
    id: 'faq-9',
    question: '9. Do I need technical knowledge to understand your research?',
    answer:
      'Not always. Some publications are written for a broad audience, while others explore deeper technical concepts for developers and engineering teams. Each whitepaper should clearly communicate its intended audience and level of technical detail.',
  },
  {
    id: 'faq-10',
    question: '10. How often do you publish new whitepapers?',
    answer:
      'Our research catalogue will evolve as we explore new challenges, technologies, and implementation approaches. Follow this page for new publications and updates; specific release dates will be shared when confirmed.',
  },
  {
    id: 'faq-11',
    question: '11. Can I suggest a topic for a future whitepaper?',
    answer:
      'Absolutely. We welcome thoughtful questions and ideas from founders, developers, researchers, students, and technology enthusiasts. Contact our team with your topic suggestion and tell us why it matters.',
  },
  {
    id: 'faq-12',
    question: '12. Can Arlo Technologies help implement the ideas discussed in a whitepaper?',
    answer:
      'Yes, where the topic aligns with our services and capabilities. Our team can discuss AI solutions, software development, workflow automation, integrations, and digital product experiences to help you explore a suitable implementation approach.',
  },
  {
    id: 'faq-13',
    question: '13. Can I collaborate with Arlo Technologies on research?',
    answer:
      'We’re open to exploring relevant research collaborations, technical discussions, and knowledge-sharing opportunities. Tell us about your expertise, proposed topic, or project, and our team can assess whether there’s a suitable opportunity.',
  },
  {
    id: 'faq-14',
    question: '14. Are the whitepapers intended as professional advice?',
    answer:
      'No. Whitepapers are educational and informational resources. They do not replace advice tailored to your specific legal, financial, security, compliance, or technical circumstances. Seek qualified professional guidance when needed.',
  },
  {
    id: 'faq-15',
    question: '15. What if I have questions about a particular whitepaper?',
    answer:
      'We’d be happy to hear from you. Contact Arlo Technologies and reference the publication title along with your question. We’ll review your enquiry and respond where appropriate.',
  },
];

const WhitepaperFaq = () => {
  return (
    <section id="whitepaper-faqs" className="scroll-mt-28 py-16 md:py-20 lg:py-24 border-b border-stroke-3 dark:border-stroke-7">
      <div className="main-container">
        <div className="mx-auto max-w-[850px] text-center space-y-4 mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan !normal-case">Frequently Asked Questions</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
              Discover the Ideas Behind Tomorrow&apos;s Technology.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/80 dark:text-accent/80 text-base sm:text-lg leading-relaxed max-w-[760px] mx-auto">
              Curious about our research? Explore how Arlo Technologies&apos; whitepapers can help you understand emerging technologies, make informed decisions, and turn complex ideas into practical possibilities.
            </p>
          </RevealAnimation>
        </div>

        <div className="max-w-[1000px] mx-auto">
          <Accordion defaultValue="faq-1" className="space-y-4">
            {whitepaperFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-2xl bg-white dark:bg-background-6 p-6 border border-stroke-3 dark:border-stroke-7 shadow-xs">
                <AccordionTrigger
                  value={faq.id}
                  className="flex items-center justify-between w-full text-heading-6 font-normal text-left text-secondary dark:text-accent cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  value={faq.id}
                  className="text-secondary/70 dark:text-accent/70 pt-3 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

WhitepaperFaq.displayName = 'WhitepaperFaq';
export default WhitepaperFaq;
