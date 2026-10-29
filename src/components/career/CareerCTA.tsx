import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const CareerCTA = () => {
  return (
    <section className="bg-white dark:bg-background-6 py-16 md:py-20 lg:py-28" aria-label="career cta section">
      <div className="main-container">
        <div className="mx-auto max-w-[800px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-2 !normal-case">Start Your Journey</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2">
              Ready to Start Your Journey With Arlo Technologies?
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary dark:text-accent text-xl font-medium">
              Your potential is your starting point.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="text-secondary/80 dark:text-accent/80 text-lg max-w-[680px] mx-auto">
              Take your first step toward learning, building practical skills, and discovering what you can achieve.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="pt-4">
              <Link
                href="/career#open-positions"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md inline-flex items-center">
                Explore Open Positions
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CareerCTA;
