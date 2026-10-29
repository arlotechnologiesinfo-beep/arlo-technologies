import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import avatar4 from '@public/images/ns-avatar-4.png';
import Image from 'next/image';
import Link from 'next/link';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const SpotlightStories = () => {
  return (
    <section className="py-12 md:py-18 lg:pb-24 xl:py-28" aria-label="spotlight stories section">
      <div className="main-container space-y-17.5">
        <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:justify-between md:space-y-0">
          <div>
            <RevealAnimation delay={0.1}>
              <h2>Spotlight Stories</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>Real results from real teams</p>
            </RevealAnimation>
          </div>
          {/* btns */}
          <ul className="flex flex-col items-center justify-start gap-x-4 gap-y-3 max-md:w-full md:flex-row md:gap-y-0">
            <li className="w-[90%] md:w-auto">
              <RevealAnimation delay={0.3} direction="left" offset={70}>
                <Link
                  href="/case-study"
                  className="btn btn-secondary hover:btn-primary dark:btn-white dark:hover:btn-primary btn-lg md:btn-xl mx-auto w-full md:mx-0 md:w-auto">
                  <span>Read Customer Story</span>
                </Link>
              </RevealAnimation>
            </li>
            <li className="w-[90%] list-none md:w-auto">
              <RevealAnimation delay={0.4} direction="left" offset={70}>
                <Link
                  href="/contact-us"
                  className="btn btn-ash hover:btn-secondary dark:btn-primary dark:hover:btn-accent btn-lg md:btn-xl mx-auto w-full border-0 md:mx-0 md:w-auto">
                  <span>Share Your Story</span>
                </Link>
              </RevealAnimation>
            </li>
          </ul>
        </div>
        {/* stories */}
        <article className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-2">
          {/* CLIENT 1: Career Corner India */}
          <RevealAnimation delay={0.1}>
            <div className="bg-background-3 dark:bg-background-5 max-w-full rounded-xl p-6 xl:max-w-[316px] flex flex-col justify-between min-h-[360px]">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-stroke-3 dark:border-stroke-7">
                  <h3 className="text-tagline-1 font-semibold tracking-tight text-secondary dark:text-accent">
                    Career Corner India
                  </h3>
                  <a
                    href="https://careercornerindia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Career Corner India website"
                    className="text-tagline-3 text-primary-500 hover:underline">
                    Website ↗
                  </a>
                </div>
                <p className="text-secondary dark:text-accent pt-6 pb-8 leading-relaxed">
                  Explore our collaboration with Career Corner India and the digital experience supporting its vision.
                </p>
              </div>
              <figure className="flex items-center gap-3">
                <Image
                  src={avatar4}
                  className="size-11 rounded-full object-cover object-center"
                  alt="Sanjeev Durgam's avatar"
                  width={44}
                  height={44}
                  loading="lazy"
                />
                <figure>
                  <h4 className="text-tagline-1 leading-[1.5] font-semibold sm:text-lg">Sanjeev Durgam</h4>
                  <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
                    Founder &amp; Managing Director
                  </p>
                </figure>
              </figure>
            </div>
          </RevealAnimation>

          {/* Column 2: Case study + Stat card */}
          <div className="max-w-full space-y-5 max-lg:w-full lg:space-y-2">
            <RevealAnimation delay={0.2}>
              <div className="bg-background-3 dark:bg-background-5 rounded-xl p-6 xl:max-w-[316px]">
                <RevealAnimation delay={0.1}>
                  <span
                    className="bg-background-12 text-secondary text-tagline-3 rounded-full px-5 py-1.5 font-medium text-nowrap"
                    role="text"
                    aria-label="Section category">
                    Case study
                  </span>
                </RevealAnimation>
                <p className="text-secondary dark:text-accent pt-10 pb-8 leading-relaxed">
                  Career Corner India: Educational guidance and mentorship platform connecting students with career pathways.
                </p>
                <div className="w-[90%] md:w-auto">
                  <Link
                    href="/case-study/career-corner-india"
                    className="btn btn-secondary hover:btn-primary dark:btn-accent dark:hover:btn-primary btn-lg mx-auto w-full md:mx-0 md:w-auto">
                    <span>Read Customer Story</span>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="bg-ns-green space-y-3 rounded-xl p-6 xl:max-w-[316px]">
                <h2 className="text-secondary pt-6 text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:leading-[110%]">
                  <NumberAnimation number={50} speed={1000} interval={180} rooms={2} heightSpaceRatio={2}>
                    50%
                  </NumberAnimation>
                </h2>
                <p className="text-secondary/60">faster turnaround through collaborative digital design and modern engineering workflows.</p>
              </div>
            </RevealAnimation>
          </div>

          {/* Column 3: CLIENT 2 (Raveena Sarees) + CLIENT 3 (Revengo Enterprises) */}
          <div className="max-w-full space-y-5 max-lg:w-full lg:space-y-2">
            {/* CLIENT 2: Raveena Sarees */}
            <RevealAnimation delay={0.4}>
              <div className="bg-background-3 dark:bg-background-5 rounded-xl p-6 xl:max-w-[316px] flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-stroke-3 dark:border-stroke-7">
                    <h3 className="text-tagline-1 font-semibold tracking-tight text-secondary dark:text-accent">
                      Raveena Sarees
                    </h3>
                    <a
                      href="https://www.raveenasarees.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Raveena Sarees website"
                      className="text-tagline-3 text-primary-500 hover:underline">
                      Website ↗
                    </a>
                  </div>
                  <p className="text-secondary dark:text-accent pt-6 pb-8 leading-relaxed">
                    Discover our collaboration with Raveena Sarees and its online brand experience.
                  </p>
                </div>
                <figure className="flex items-center gap-3">
                  <Image
                    src={avatar2}
                    className="size-11 rounded-full object-cover object-center"
                    alt="Raveena's avatar"
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                  <figure>
                    <h4 className="text-tagline-1 leading-[1.5] font-semibold sm:text-lg">Raveena</h4>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">Co-founder</p>
                  </figure>
                </figure>
              </div>
            </RevealAnimation>

            {/* CLIENT 3: Revengo Enterprises */}
            <RevealAnimation delay={0.2}>
              <div className="bg-background-3 dark:bg-background-5 rounded-xl p-6 xl:max-w-[316px] flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-stroke-3 dark:border-stroke-7">
                    <h3 className="text-tagline-1 font-semibold tracking-tight text-secondary dark:text-accent">
                      Revengo Enterprises
                    </h3>
                    <a
                      href="https://revengo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Revengo Enterprises website"
                      className="text-tagline-3 text-primary-500 hover:underline">
                      Website ↗
                    </a>
                  </div>
                  <p className="text-secondary dark:text-accent pt-6 pb-8 leading-relaxed">
                    Discover our work with Revengo Enterprises and the digital presence developed around its business vision.
                  </p>
                </div>
                <figure className="flex items-center gap-3">
                  <Image
                    src={avatar3}
                    className="size-11 rounded-full object-cover object-center"
                    alt="Rajnikant Kummari's avatar"
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                  <figure>
                    <h4 className="text-tagline-1 leading-[1.5] font-semibold sm:text-lg">Rajnikant Kummari</h4>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
                      CEO
                    </p>
                  </figure>
                </figure>
              </div>
            </RevealAnimation>
          </div>

          {/* Column 4: Case study + CLIENT 4 (Aeli Adops) */}
          <div className="max-w-full space-y-5 lg:space-y-2">
            <RevealAnimation delay={0.4}>
              <div className="bg-secondary dark:bg-background-5 rounded-xl p-6 xl:max-w-[316px]">
                <RevealAnimation delay={0.1}>
                  <span
                    className="bg-accent/10 text-tagline-3 rounded-full px-5 py-1.5 font-medium text-nowrap text-white"
                    role="text"
                    aria-label="Section category">
                    Case study
                  </span>
                </RevealAnimation>
                <p className="pt-8 pb-8 text-white leading-relaxed">
                  Raveena Sarees: High-performance digital storefront showcasing traditional textile craftsmanship and online collections.
                </p>
                <div className="w-[90%] md:w-auto">
                  <Link
                    href="/case-study/raveena-sarees"
                    className="btn btn-white-v2 hover:btn-primary dark:btn-accent dark:hover:btn-primary btn-lg mx-auto w-full md:mx-0 md:w-auto">
                    <span>Read Customer Story</span>
                  </Link>
                </div>
              </div>
            </RevealAnimation>

            {/* CLIENT 4: Aeli Adops */}
            <RevealAnimation delay={0.3}>
              <div className="bg-background-3 dark:bg-background-5 rounded-xl p-6 xl:max-w-[316px] flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-stroke-3 dark:border-stroke-7">
                    <h3 className="text-tagline-1 font-semibold tracking-tight text-secondary dark:text-accent">
                      Aeli Adops
                    </h3>
                    <a
                      href="https://aeliadops.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Aeli Adops website"
                      className="text-tagline-3 text-primary-500 hover:underline">
                      Website ↗
                    </a>
                  </div>
                  <p className="text-secondary dark:text-accent pt-6 pb-8 leading-relaxed">
                    Explore our collaboration with Aeli Adops and the digital experience created for its brand.
                  </p>
                </div>
                <figure className="flex items-center gap-3">
                  <Image
                    src={avatar1}
                    className="size-11 rounded-full object-cover object-center"
                    alt="Vijay Durgam's avatar"
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                  <figure>
                    <h4 className="text-tagline-1 leading-[1.5] font-semibold sm:text-lg">Vijay Durgam</h4>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
                      CEO
                    </p>
                  </figure>
                </figure>
              </div>
            </RevealAnimation>
          </div>
        </article>
      </div>
    </section>
  );
};

SpotlightStories.displayName = 'SpotlightStories';
export default SpotlightStories;
