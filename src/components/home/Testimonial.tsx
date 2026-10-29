import { testimonialsData } from '@/data/testimonialsData';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const Testimonial = () => {
  return (
    <section id="testimonials" className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="mb-14 text-center">
        <div className="space-y-4">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Client Experiences</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="mx-auto max-w-[850px]">Built through collaboration. Improved through feedback.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[700px] text-secondary/70 dark:text-accent/70">
              We value the relationships behind every project. Our approach emphasizes clear communication, practical
              problem-solving, and a shared understanding of the intended outcome.
            </p>
          </RevealAnimation>
        </div>
      </div>
      <div>
        <RevealAnimation delay={0.4}>
          <Marquee autoFill pauseOnHover direction="left" gradient={false} className="w-full overflow-hidden">
            <div className="scroll-bar flex items-center justify-center gap-6">
              {testimonialsData.map((item) => (
                <div
                  key={item.id}
                  className="bg-background-2 dark:bg-background-5 dark:hover:bg-background-8 ml-6 min-w-xs space-y-6 rounded-[20px] p-8 backdrop-blur-[22px] transition-colors duration-300 ease-linear hover:bg-white sm:min-w-md sm:space-y-8 md:min-w-[722px] md:space-y-10 md:p-14">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <figure className="size-12 overflow-hidden rounded-full bg-(image:--color-gradient-1) md:size-[84px]">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          width={100}
                          height={100}
                          quality={100}
                          unoptimized={typeof item.avatar === 'string'}
                          className="h-full w-full object-cover"
                        />
                      </figure>
                      <div className="space-y-1">
                        <h3 className="text-tagline-2 lg:text-tagline-1 font-medium">{item.name}</h3>
                        <p className="text-tagline-3 text-secondary/60 dark:text-accent/60">{item.role}</p>
                      </div>
                    </div>
                    <div>
                      <a
                        href={item.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${item.name} website`}
                        title={`Visit ${item.name} website`}
                        className="bg-background-3 dark:bg-background-7 group/link flex h-8 w-14 items-center justify-center rounded-full px-2.5 py-1 md:h-11 md:w-[74px] transition-all duration-300 hover:scale-105 border border-transparent hover:border-secondary/20 dark:hover:border-accent/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="size-4 md:size-5 text-secondary dark:text-white transition-transform duration-300 group-hover/link:scale-110">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                          <path d="M2 12h20" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="md:text-heading-6 sm:text-tagline-1 text-tagline-2 max-w-[610px] text-wrap">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Testimonial;
