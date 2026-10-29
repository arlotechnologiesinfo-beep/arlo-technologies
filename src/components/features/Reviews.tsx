import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import avatar4 from '@public/images/ns-avatar-4.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const verifiedReviews = [
  {
    id: 'sanjeev-durgam',
    name: 'Sanjeev Durgam',
    position: 'Founder & Managing Director',
    company: 'Career Corner India',
    websiteUrl: 'https://careercornerindia.com/',
    quote:
      'The platform built by Arlo has made connecting mentors, students, and professionals straightforward and reliable. Outstanding engineering, speed, and design execution.',
    avatar: avatar4,
  },
  {
    id: 'raveena',
    name: 'Raveena',
    position: 'Co-Founder',
    company: 'Raveena Sarees',
    websiteUrl: 'https://www.raveenasarees.com/',
    quote:
      'Arlo Technologies delivered an elegant, high-performing digital storefront for our collections. The online shopping experience is fast, beautifully designed, and loved by our customers.',
    avatar: avatar2,
  },
  {
    id: 'rajnikant-kummari',
    name: 'Rajnikant Kummari',
    position: 'CEO',
    company: 'Revengo Enterprises',
    websiteUrl: 'https://revengo.com/',
    quote:
      'Working with Arlo was a seamless experience. They understood our brand vision from day one, delivering a modern, responsive website with exceptional attention to detail.',
    avatar: avatar3,
  },
  {
    id: 'vijay-durgam',
    name: 'Vijay Durgam',
    position: 'CEO',
    company: 'Aeli Adops',
    websiteUrl: 'https://aeliadops.com/',
    quote:
      'Arlo Technologies brought technical excellence and modern aesthetics together to create a dedicated digital presence that clearly communicates our service capabilities.',
    avatar: avatar1,
  },
];

const Reviews = () => {
  return (
    <section className="bg-background-3 dark:bg-background-8 space-y-[70px] py-14 md:py-20 xl:py-[100px]" aria-label="Client reviews">
      <div className="main-container">
        <div className="mx-auto max-w-[804px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Reviews</span>
          </RevealAnimation>

          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-3 sm:text-heading-2 font-normal">Words From Our Partners.</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.25}>
              <p className="text-secondary dark:text-accent text-lg sm:text-xl font-medium">
                Real Experiences. Meaningful Collaboration.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 max-w-[680px] mx-auto leading-relaxed">
                Every project is an opportunity to learn, create, and build something valuable together. Discover feedback from the people and teams we&apos;ve worked with.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>

      <RevealAnimation delay={0.4}>
        <div className="relative" role="region" aria-label="Partner testimonials carousel">
          <div className="from-background-3 dark:from-background-8 absolute top-0 left-0 z-40 h-full w-[10%] bg-gradient-to-r to-transparent pointer-events-none" />
          <div className="from-background-3 dark:from-background-8 absolute top-0 right-0 z-40 h-full w-[10%] bg-gradient-to-l to-transparent pointer-events-none" />

          <Marquee autoFill pauseOnHover speed={30}>
            <div className="flex items-center gap-8">
              {verifiedReviews.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-background-1/90 dark:bg-background-5 dark:hover:bg-background-8 hover:shadow-1 w-full max-w-[370px] min-w-[370px] shrink-0 rounded-[20px] p-8 transition-colors duration-300 ease-linear first:ml-8 hover:bg-white flex flex-col justify-between min-h-[260px]">
                  <p className="line-clamp-4 text-wrap text-secondary/80 dark:text-accent/80 text-sm leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="bg-stroke-4 dark:bg-stroke-8 my-6 h-px w-full" />
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <figure className="size-12 overflow-hidden rounded-full shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={`${testimonial.name} profile picture`}
                            className="h-full w-full object-cover"
                            width={48}
                            height={48}
                          />
                        </figure>
                        <div className="space-y-0.5">
                          <h3 className="text-tagline-1 text-secondary dark:text-accent font-medium leading-snug">
                            {testimonial.name}
                          </h3>
                          <p className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                      <a
                        href={testimonial.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${testimonial.company} website`}
                        title={`Visit ${testimonial.company} website`}
                        className="bg-background-2 dark:bg-background-7 hover:bg-background-3 dark:hover:bg-background-6 flex size-9 shrink-0 items-center justify-center rounded-full transition-colors border border-stroke-3 dark:border-stroke-7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="size-4 text-secondary dark:text-accent">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Reviews;
