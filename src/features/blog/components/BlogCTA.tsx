import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import React from 'react';

const BlogCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-background-6 border-t border-stroke-3 dark:border-stroke-7">
      <div className="main-container">
        <div className="max-w-[850px] mx-auto text-center space-y-5">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green !normal-case">Next Steps</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal text-secondary dark:text-accent">
              Have an Idea Worth Exploring?
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="text-secondary/80 dark:text-accent/80 text-base sm:text-lg max-w-[650px] mx-auto leading-relaxed">
              Let&apos;s turn thoughtful questions into practical digital solutions.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <LinkButton
                href="/services"
                className="btn btn-pair-left btn-md w-full sm:w-auto">
                Explore Our Solutions
              </LinkButton>
              <LinkButton
                href="/contact-us"
                className="btn btn-pair-right btn-md w-full sm:w-auto">
                Talk to Our Team
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;
