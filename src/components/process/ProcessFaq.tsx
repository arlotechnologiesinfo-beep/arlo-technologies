import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const processFaqs = [
  {
    id: '1',
    question: 'How do I get started with Arlo Technologies?',
    answer:
      "Contact us with your idea, business requirements, or challenge. We'll review the information and discuss the appropriate next steps.",
  },
  {
    id: '2',
    question: 'Do I need a complete plan before contacting you?',
    answer:
      'No. You can approach us with an early idea, a specific problem, or a detailed project brief. We can help clarify the requirements and possible direction.',
  },
  {
    id: '3',
    question: 'How do we discuss project requirements?',
    answer:
      'We can use an initial conversation, written requirements, reference links, and project discussions to establish the scope and priorities.',
  },
  {
    id: '4',
    question: 'Will I receive updates during development?',
    answer:
      "Communication and review checkpoints are agreed according to the project's scope and working arrangement. The aim is to keep progress and decisions clear.",
  },
  {
    id: '5',
    question: 'Can I request changes during the project?',
    answer:
      'Yes. Feedback is part of the process. Changes are reviewed against the agreed scope, timeline, and requirements; additional work may require a revised estimate.',
  },
  {
    id: '6',
    question: 'How long does a project take?',
    answer:
      "Timelines depend on the project's complexity, features, integrations, content, and approval process. A realistic timeline is discussed after requirements are understood.",
  },
  {
    id: '7',
    question: 'Can Arlo integrate tools we already use?',
    answer:
      'We can assess the available APIs, permissions, technical compatibility, and project requirements before confirming an integration.',
  },
  {
    id: '8',
    question: 'Do you provide support after launch?',
    answer:
      'Post-launch support, maintenance, and future enhancements can be discussed and included according to the agreed engagement.',
  },
  {
    id: '9',
    question: 'Can you work with an existing website or product?',
    answer:
      'Yes. We can assess an existing project and discuss improvements, redesigns, new features, integrations, or technical changes based on its current architecture.',
  },
  {
    id: '10',
    question: 'What happens if my requirements change?',
    answer:
      'We review the requested changes, explain their impact, and agree on the next steps before proceeding with additional scope.',
  },
];

const ProcessFaq = () => {
  return (
    <section className="pt-[50px] pb-[100px] md:pt-[100px] md:pb-[140px]">
      <div className="main-container">
        <div className="mx-auto mb-[60px] max-w-[700px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Frequently Asked Questions</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-3 sm:text-heading-2 font-normal">
                Everything You Need to Know Before We Begin.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 text-sm sm:text-base leading-relaxed">
                Clear answers to common questions about starting a project, collaborating with our team, managing scopes, and post-launch support.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <Accordion className="max-w-full space-y-4 sm:mx-auto sm:max-w-[850px]" defaultValue="1" animationDelay={0.1}>
            {processFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                className="bg-background-1 dark:bg-background-6 rounded-[20px] px-6 sm:px-8 border border-stroke-3 dark:border-stroke-7 shadow-xs"
                value={faq.id}>
                <AccordionTrigger
                  titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-medium text-secondary dark:text-accent"
                  className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6 sm:pt-7 sm:pb-7"
                  value={faq.id}
                  iconType="arrow">
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-secondary/40 dark:text-accent/40 font-normal">
                      {faq.id.padStart(2, '0')}.
                    </span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent value={faq.id} className="text-secondary/80 dark:text-accent/80 text-sm sm:text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ProcessFaq;
