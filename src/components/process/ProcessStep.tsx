import RevealAnimation from '../animation/RevealAnimation';

interface ProcessStepItem {
  id: string;
  stepNumber: string;
  title: string;
  subheading: string;
  description: string;
  icon: string;
  whatHappens: string[];
}

const processSteps: ProcessStepItem[] = [
  {
    id: 'discover-connect',
    stepNumber: '01',
    title: 'Discover & Connect',
    subheading: 'Every great solution starts with a conversation.',
    description:
      'Tell us about your business, your goals, your challenges, and the ideas you want to explore. We learn what matters to you before recommending a direction.',
    icon: 'ns-shape-36',
    whatHappens: ['Initial enquiry', 'Discovery conversation', 'Requirements gathering'],
  },
  {
    id: 'define-vision',
    stepNumber: '02',
    title: 'Define Your Vision',
    subheading: 'Turn possibilities into a clear plan.',
    description:
      'We organise your requirements, identify priorities, define the project scope, and establish what success should look like.',
    icon: 'ns-shape-8',
    whatHappens: ['Project objectives', 'Feature priorities & scope', 'Proposed milestones & deliverables'],
  },
  {
    id: 'plan-workspace',
    stepNumber: '03',
    title: 'Plan Your Workspace',
    subheading: 'Create a foundation that works for you.',
    description:
      'Where a project workspace or account is required, we help establish the appropriate access, tools, communication channels, and working structure for the project.',
    icon: 'ns-shape-2',
    whatHappens: ['Workspace setup', 'Access configuration', 'Collaboration tools & organisation'],
  },
  {
    id: 'design-experience',
    stepNumber: '04',
    title: 'Design the Experience',
    subheading: 'Make every interaction feel intentional.',
    description:
      'We shape the user journey, visual direction, interface structure, and experience before moving into implementation.',
    icon: 'ns-shape-10',
    whatHappens: ['Wireframes & interface structure', 'Design concepts & prototypes', 'Client feedback & design approval'],
  },
  {
    id: 'build-integrate',
    stepNumber: '05',
    title: 'Build & Integrate',
    subheading: 'Bring the idea to life.',
    description:
      'Our development process turns approved requirements into working websites, software, applications, AI features, or connected workflows.',
    icon: 'ns-shape-18',
    whatHappens: ['Frontend & backend development', 'Third-party integrations', 'Code reviews & progress updates'],
  },
  {
    id: 'test-refine',
    stepNumber: '06',
    title: 'Test & Refine',
    subheading: 'Better through thoughtful iteration.',
    description:
      'We validate the solution against the agreed requirements, identify issues, improve usability, and refine the experience before delivery.',
    icon: 'ns-shape-36',
    whatHappens: ['Functional & responsive testing', 'Bug fixing & refinement', 'Accessibility & client review'],
  },
  {
    id: 'launch-deliver',
    stepNumber: '07',
    title: 'Launch & Deliver',
    subheading: 'Ready for the real world.',
    description:
      'Once the agreed acceptance criteria are met, we prepare the deliverables, configure the relevant deployment environment, and coordinate launch.',
    icon: 'ns-shape-8',
    whatHappens: ['Final acceptance review', 'Deployment to production', 'Handover docs & access transfer'],
  },
  {
    id: 'improve-evolve',
    stepNumber: '08',
    title: 'Improve & Evolve',
    subheading: 'The next version starts with what we learn.',
    description:
      'After delivery, we can discuss maintenance, enhancements, integrations, and future improvements based on your evolving needs and the agreed scope of support.',
    icon: 'ns-shape-2',
    whatHappens: ['Post-launch feedback', 'Improvement opportunities', 'Maintenance & evolutionary planning'],
  },
];

const workingPrinciples = [
  {
    title: 'Transparent Progress',
    description: 'Understand project milestones, deliverables, and next steps with complete clarity.',
  },
  {
    title: 'Collaborative Decisions',
    description: 'Share feedback and help shape the solution at every critical stage of the lifecycle.',
  },
  {
    title: 'Purposeful Technology',
    description: 'Choose tools and approaches based on your requirements, not unnecessary complexity.',
  },
  {
    title: 'Quality-Focused Delivery',
    description: 'Review the work against agreed requirements and rigorous standards before handover.',
  },
];

const ProcessStep = () => {
  return (
    <section className="pt-32 pb-[80px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        {/* Hero Header */}
        <div className="mb-14 space-y-4 text-center md:mb-[72px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Our Process</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 mx-auto max-w-[850px] font-normal">
              From First Conversation to What&apos;s Next.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 mx-auto max-w-[720px] text-base sm:text-lg leading-relaxed">
              Every successful digital solution starts with understanding the right problem. At Arlo Technologies, we turn ideas into action through a clear, collaborative process that brings strategy, design, engineering, and innovation together.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.35}>
            <p className="text-secondary dark:text-accent mx-auto max-w-[680px] text-sm sm:text-base font-medium">
              Whether you&apos;re building an AI-powered product, launching a website, or improving an existing workflow, we help you move forward one meaningful step at a time.
            </p>
          </RevealAnimation>
        </div>

        {/* Section Title */}
        <div className="mb-10 text-center space-y-2">
          <RevealAnimation delay={0.2}>
            <span className="text-xs uppercase tracking-widest text-secondary/60 dark:text-accent/60 font-semibold font-mono">
              The Arlo Way
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.25}>
            <h2 className="text-heading-4 sm:text-heading-3 font-normal">
              A Clear Path From Idea to Impact.
            </h2>
          </RevealAnimation>
        </div>

        {/* 8 Process Steps Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 mb-20">
          {processSteps.map((step, index) => (
            <div key={step.id} className="col-span-12 sm:col-span-6 lg:col-span-3 flex">
              <RevealAnimation delay={0.15 + (index % 4) * 0.1}>
                <div className="bg-background-1 dark:bg-background-6 flex h-full flex-col justify-between space-y-6 rounded-[20px] p-6 sm:p-7 border border-stroke-3 dark:border-stroke-7 hover:border-secondary/20 dark:hover:border-accent/20 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-tagline-2 font-mono font-bold text-secondary dark:text-accent bg-secondary/5 dark:bg-accent/10 px-3 py-1 rounded-full">
                        Step {step.stepNumber}
                      </span>
                      <span className={`${step.icon} text-secondary/40 dark:text-accent/40 text-[40px]`} />
                    </div>
                    <div>
                      <h3 className="text-heading-6 sm:text-heading-5 font-normal mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-secondary/80 dark:text-accent/80 font-medium leading-snug">
                        {step.subheading}
                      </p>
                    </div>
                    <p className="text-secondary/70 dark:text-accent/70 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stroke-3 dark:border-stroke-7 mt-auto">
                    <p className="text-[11px] font-semibold text-secondary/90 dark:text-accent/90 mb-2 uppercase tracking-wider">
                      What happens:
                    </p>
                    <ul className="text-tagline-3 text-secondary/70 dark:text-accent/70 space-y-1.5 list-disc list-inside">
                      {step.whatHappens.map((item, idx) => (
                        <li key={idx} className="leading-snug">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>

        {/* Built Around Your Way of Working */}
        <div className="rounded-3xl bg-secondary dark:bg-background-8 text-white p-8 sm:p-12 md:p-16 border border-white/10">
          <div className="max-w-[700px] mx-auto text-center space-y-3 mb-12">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-cyan mb-2">Our Principles</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal text-white">
                Built Around Your Way of Working
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.25}>
              <p className="text-ns-cyan text-base sm:text-lg font-medium">
                Clear Communication. Thoughtful Execution.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                We believe good work comes from shared understanding, realistic expectations, and continuous collaboration.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingPrinciples.map((item, i) => (
              <RevealAnimation key={item.title} delay={0.2 + i * 0.1}>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10 h-full backdrop-blur-sm space-y-2">
                  <div className="size-2 rounded-full bg-ns-green mb-3" />
                  <h3 className="text-white font-semibold text-base sm:text-lg">{item.title}</h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ProcessStep.displayName = 'ProcessStep';
export default ProcessStep;
