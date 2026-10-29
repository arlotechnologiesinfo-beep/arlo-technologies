//Referral Program Hero
import { StarIconV2 } from '@/icons';
import logo from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-36 pb-10 md:pt-42 md:pb-24 xl:pt-[180px] xl:pb-28" aria-label="referral program hero section">
      <div className="main-container space-y-10 lg:space-y-16">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <h1 className="lg:text-heading-2">
              Good Connections Deserve Great Rewards.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[760px] pt-4 text-base sm:text-lg md:text-xl text-secondary/80 dark:text-accent/80 leading-relaxed font-normal">
              Know a friend, colleague, founder, or business that could benefit from Arlo Technologies? Introduce them to our products and solutions. When an eligible referral becomes a paying customer, you can unlock rewards toward your own subscription.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="group mx-auto w-[90%] list-none pt-7 pb-4 md:inline-block md:w-auto lg:pt-10">
              <Link
                href="/contact-us"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg md:btn-xl mx-auto w-full md:mx-0 md:w-auto">
                <span>Get My Referral Link</span>
              </Link>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.35}>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 font-medium">
              Share what works. Get rewarded for the connection.
            </p>
          </RevealAnimation>
        </div>
        <div className="space-y-[14px] text-center">
          <RevealAnimation delay={0.4}>
            <p className="text-secondary dark:text-accent mb-3 text-lg md:text-xl font-medium">
              One introduction. More value for both sides.
            </p>
          </RevealAnimation>
          <div className="flex items-start justify-center gap-4">
            <RevealAnimation delay={0.5}>
              <figure className="size-14">
                <Image src={logo} alt="Arlo Technologies" className="size-full object-cover dark:invert" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6} direction="left">
              <div>
                <div className="flex items-center gap-x-1">
                  <StarIconV2 className="size-[12px] fill-[#FA9017]" />
                  <StarIconV2 className="size-[12px] fill-[#FA9017]" />
                  <StarIconV2 className="size-[12px] fill-[#FA9017]" />
                  <StarIconV2 className="size-[12px] fill-[#FA9017]" />
                  <StarIconV2 className="size-[12px] fill-[#FA9017]" />
                </div>
                <p className="text-tagline-2 text-secondary dark:text-accent pt-1 font-medium">
                  Trusted by businesses &amp; founders
                </p>
                <p className="text-tagline-3 text-secondary/60 dark:text-accent/60">
                  AI products, web engineering &amp; intelligent automation
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
