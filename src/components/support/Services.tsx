import gradient16 from '@public/images/ns-img-495.png';
import gradient3 from '@public/images/ns-img-508.png';
import gradient27 from '@public/images/ns-img-515.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  return (
    <section className="py-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Support Channels</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto max-w-[810px]">Support Tailored to Your Questions and Needs.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[620px]">
                Choose the channel that fits your enquiry—from direct conversations and structured technical requests
                to self-serve documentation.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-4 flex">
              <div className="bg-background-2 dark:bg-background-6 relative z-10 flex flex-col justify-between space-y-6 overflow-hidden rounded-[20px] px-6 py-8 w-full">
                {/* bg gradient */}
                <figure className="pointer-events-none absolute -top-[66%] -left-[60%] -z-10 size-[410px] rotate-[304deg] select-none">
                  <Image src={gradient3} className="size-full object-contain" alt="gradient-16" />
                </figure>
                <div>
                  <div className="flex items-center justify-center">
                    <span className="ns-shape-9 text-secondary dark:text-accent text-[52px]"> </span>
                  </div>
                </div>
                <div className="space-y-3 text-center flex-1">
                  <span className="text-tagline-3 uppercase tracking-wider text-secondary/60 dark:text-accent/60 font-semibold">Live Chat</span>
                  <h3 className="text-heading-5">Real Conversations. Clear Answers.</h3>
                  <p className="text-secondary/80 dark:text-accent/80 text-sm leading-relaxed">
                    Have a question about our services or solutions? Connect with our team to discuss your needs, explore possibilities, and find the right direction.
                  </p>
                </div>
                <div className="text-center pt-2">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md w-full">
                    Start a Conversation
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-4 flex">
              <div className="bg-background-2 dark:bg-background-6 relative z-10 flex flex-col justify-between space-y-6 overflow-hidden rounded-[20px] px-6 py-8 w-full">
                <figure className="pointer-events-none absolute -top-[74%] -right-[70%] -z-10 size-[410px] rotate-[175deg] select-none">
                  <Image src={gradient27} className="size-full object-contain" alt="gradient-16" />
                </figure>
                <div>
                  <div className="flex items-center justify-center">
                    <span className="ns-shape-3 text-secondary dark:text-accent text-[52px]"> </span>
                  </div>
                </div>
                <div className="space-y-3 text-center flex-1">
                  <span className="text-tagline-3 uppercase tracking-wider text-secondary/60 dark:text-accent/60 font-semibold">Support Ticket</span>
                  <h3 className="text-heading-5">Every Request Deserves Attention.</h3>
                  <p className="text-secondary/80 dark:text-accent/80 text-sm leading-relaxed">
                    Submit your question, describe the issue you&apos;re facing, and give our team the context needed to understand your request and work toward a resolution.
                  </p>
                </div>
                <div className="text-center pt-2">
                  <LinkButton
                    href="#ticket-form"
                    className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md w-full">
                    Submit a Ticket
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="col-span-12 md:col-span-4 flex">
              <div className="bg-background-2 dark:bg-background-6 relative z-10 flex flex-col justify-between space-y-6 overflow-hidden rounded-[20px] px-6 py-8 w-full">
                <figure className="pointer-events-none absolute -top-[74%] -right-[35%] -z-10 size-[410px] rotate-[175deg] select-none">
                  <Image src={gradient16} className="size-full object-contain" alt="gradient-16" />
                </figure>
                <div>
                  <div className="flex items-center justify-center">
                    <span className="ns-shape-12 text-secondary dark:text-accent text-[52px]"> </span>
                  </div>
                </div>
                <div className="space-y-3 text-center flex-1">
                  <span className="text-tagline-3 uppercase tracking-wider text-secondary/60 dark:text-accent/60 font-semibold">Knowledge Base</span>
                  <h3 className="text-heading-5">Find Answers. Build Confidence.</h3>
                  <p className="text-secondary/80 dark:text-accent/80 text-sm leading-relaxed">
                    Explore tutorials, product guides, frequently asked questions, and practical resources designed to help you understand technology and solve common challenges.
                  </p>
                </div>
                <div className="text-center pt-2">
                  <LinkButton
                    href="/documentation"
                    className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md w-full">
                    Explore Resources
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
