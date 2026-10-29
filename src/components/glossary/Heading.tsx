import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';

const Heading = () => {
  return (
    <section className="pt-[170px] pb-14 md:pb-20 xl:pt-[200px]">
      <div className="main-container">
        <div className="mx-auto lg:mx-0 max-w-[840px] space-y-6 text-center lg:text-left">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">THE ARLO KNOWLEDGE HUB</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-2 md:text-heading-1 font-normal text-secondary dark:text-accent">
              The Language of Getting More Done.
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="text-secondary/80 dark:text-accent/80 text-lg leading-relaxed">
              Explore the concepts, tools, and technologies powering modern productivity. From artificial
              intelligence and automation to APIs, cloud computing, and zero-trust security, discover clear
              explanations that turn complex terminology into practical knowledge.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-stroke-1 dark:border-stroke-7 bg-white/70 dark:bg-background-6/70 px-4 py-1.5 text-tagline-3 text-secondary dark:text-accent shadow-2xs">
                <span className="size-1.5 rounded-full bg-secondary dark:bg-accent" />
                26 letters
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-stroke-1 dark:border-stroke-7 bg-white/70 dark:bg-background-6/70 px-4 py-1.5 text-tagline-3 text-secondary dark:text-accent shadow-2xs">
                <span className="size-1.5 rounded-full bg-secondary dark:bg-accent" />
                Technology explained
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-stroke-1 dark:border-stroke-7 bg-white/70 dark:bg-background-6/70 px-4 py-1.5 text-tagline-3 text-secondary dark:text-accent shadow-2xs">
                <span className="size-1.5 rounded-full bg-secondary dark:bg-accent" />
                Practical definitions
              </span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="pt-2">
              <Link
                href="#glossary-content"
                className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent inline-block">
                Explore the Glossary
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Heading.displayName = 'Heading';
export default Heading;
