import LinkButton from '@/components/ui/button/LinkButton';
import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';

const standForPillars = [
  {
    number: '01',
    title: "Think Beyond What's Possible",
    description:
      'The best ideas begin where conventional thinking ends. We challenge assumptions, explore new possibilities, and approach every problem with curiosity.',
  },
  {
    number: '02',
    title: 'Build With Purpose',
    description:
      'Technology has value when it creates real impact. Every product, platform, and digital experience should have a reason to exist and a problem worth solving.',
  },
  {
    number: '03',
    title: 'Make Complexity Feel Simple',
    description:
      'Powerful technology doesn’t have to feel complicated. We believe in creating intuitive products, thoughtful interfaces, and seamless digital experiences that put people first.',
  },
  {
    number: '04',
    title: 'Experiment Without Fear',
    description:
      'Progress doesn’t come from having every answer. It comes from asking better questions, testing ideas, learning from failure, and improving with every iteration.',
  },
  {
    number: '05',
    title: 'Stay Curious. Keep Evolving.',
    description:
      'The world changes. Technology advances. Possibilities expand. We remain learners at heart, continuously exploring new tools, ideas, and ways of thinking.',
  },
  {
    number: '06',
    title: 'Create What Comes Next',
    description:
      'We don’t believe in building just to follow trends. We believe in developing products and solutions that anticipate needs, challenge limitations, and open new possibilities.',
  },
];

const uncompromisingValues = [
  {
    lead: 'Purpose over Hype.',
    detail: 'We value meaningful progress over empty promises.',
  },
  {
    lead: 'Curiosity over Convention.',
    detail: 'We question assumptions and explore better approaches.',
  },
  {
    lead: 'People over Complexity.',
    detail: 'We design technology around the people who use it.',
  },
  {
    lead: 'Progress over Perfection.',
    detail: 'We learn, iterate, and move forward.',
  },
  {
    lead: 'Long-Term Thinking over Quick Wins.',
    detail: 'We build with the future in mind.',
  },
];

const Content = () => {
  return (
    <div className="pb-28 lg:pb-36">
      <div className="main-container">
        <div className="mx-auto max-w-[1100px] space-y-20 md:space-y-28">
          {/* Section: What We Stand For */}
          <section className="space-y-10">
            <div className="text-center md:text-left space-y-3">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green !normal-case mb-2">Our Pillars</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
                  What We Stand For
                </h2>
              </RevealAnimation>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standForPillars.map((pillar, index) => (
                <RevealAnimation key={pillar.number} delay={0.2 + (index % 3) * 0.1}>
                  <div className="bg-background-2 dark:bg-background-6 flex h-full flex-col justify-between space-y-6 rounded-[20px] p-8 border border-stroke-3 dark:border-stroke-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="space-y-4">
                      <span className="text-tagline-2 font-mono font-medium text-secondary/60 dark:text-accent/60">
                        {pillar.number}
                      </span>
                      <h3 className="text-heading-6 font-normal leading-snug">{pillar.title}</h3>
                      <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </section>

          {/* Section: Our Philosophy */}
          <section>
            <RevealAnimation delay={0.2}>
              <div className="bg-secondary dark:bg-background-6 text-white rounded-[24px] p-8 sm:p-12 md:p-16 space-y-6 shadow-xl relative overflow-hidden">
                <span className="badge badge-cyan !normal-case">Our Philosophy</span>
                <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal text-white">
                  Innovation Is Not a Feature. It&apos;s a Mindset.
                </h2>
                <div className="space-y-4 text-accent/80 text-lg leading-relaxed max-w-[850px]">
                  <p>
                    We see artificial intelligence as an opportunity to extend human capability. We see software as a
                    way to transform ideas into reality. We see design as the bridge between technology and people.
                  </p>
                  <p className="font-medium text-white">
                    Our work lives at the intersection of these possibilities.
                  </p>
                  <p>
                    From intelligent products to digital platforms, we approach every challenge with the same
                    intention: make technology more useful, more accessible, and more meaningful.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </section>

          {/* Section: What We Refuse to Compromise */}
          <section className="space-y-8">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-yellow !normal-case mb-2">Our Standards</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
                  What We Refuse to Compromise
                </h2>
              </RevealAnimation>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {uncompromisingValues.map((val, index) => (
                <RevealAnimation key={index} delay={0.2 + (index % 3) * 0.1}>
                  <div className="bg-background-2 dark:bg-background-6 flex items-start gap-4 rounded-[20px] p-6 border border-stroke-3 dark:border-stroke-7 h-full">
                    <span className="bg-secondary dark:bg-accent flex size-6 shrink-0 items-center justify-center rounded-full mt-0.5">
                      <CheckIcon className="dark:fill-secondary h-2.5 w-3 fill-white" />
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-tagline-1 font-semibold text-secondary dark:text-accent">{val.lead}</h4>
                      <p className="text-tagline-2 text-secondary/80 dark:text-accent/80">{val.detail}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </section>

          {/* Section: The Future Is an Opportunity */}
          <section className="space-y-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green-v2 !normal-case mb-2">The Opportunity</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
                The Future Is an Opportunity
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="space-y-4 text-lg text-secondary/80 dark:text-accent/80 leading-relaxed max-w-[850px]">
                <p>
                  We are building in a time when a small idea can become a powerful product, a difficult problem can
                  inspire a new solution, and technology can reshape what people believe is possible.
                </p>
                <p className="font-medium text-secondary dark:text-accent">
                  We want to be part of that change.
                </p>
                <p>
                  Not by predicting every breakthrough, but by staying curious enough to discover one, courageous enough
                  to pursue it, and committed enough to bring it to life.
                </p>
              </div>
            </RevealAnimation>
          </section>

          {/* Section: This Is Arlo Technologies. (Final CTA) */}
          <section className="border-t border-stroke-3 dark:border-stroke-7 pt-16">
            <RevealAnimation delay={0.1}>
              <div className="bg-background-2 dark:bg-background-6 rounded-[24px] p-8 sm:p-12 md:p-16 border border-stroke-3 dark:border-stroke-7 text-center space-y-6">
                <span className="badge badge-green !normal-case">Arlo Technologies</span>
                <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
                  This Is Arlo Technologies.
                </h2>
                <p className="text-secondary dark:text-accent text-xl font-medium">
                  Ideas Into Innovation. Technology Into Impact.
                </p>
                <p className="mx-auto max-w-[680px] text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
                  We are here to explore the unknown, build with intention, and create digital solutions that move
                  possibilities forward.
                </p>
                <p className="text-xl font-semibold text-secondary dark:text-accent pt-2">
                  The future isn&apos;t something we wait for. It&apos;s something we build together.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <LinkButton
                    href="/#projects"
                    className="btn btn-pair-left btn-md w-full sm:w-auto">
                    Explore Our Work
                  </LinkButton>
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-pair-right btn-md w-full sm:w-auto">
                    Build With Us
                  </LinkButton>
                </div>
              </div>
            </RevealAnimation>
          </section>
        </div>
      </div>
    </div>
  );
};

Content.displayName = 'Content';
export default Content;
