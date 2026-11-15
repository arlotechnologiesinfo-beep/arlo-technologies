import RevealAnimation from '@/components/animation/RevealAnimation';
import { FooterOneData } from '@/interface';
import darkLogo from '@public/images/shared/dark-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { MotionItem, MotionLink, MotionPanel, MotionStagger } from '@/components/shared/motion/MotionPrimitives';
import LinkButton from '@/components/ui/button/LinkButton';
import { footerData } from '../navbar/data';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';
import FooterLeftGradient from './FooterLeftGradient';
import FooterRightGradient from './FooterRightGradient';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary dark:bg-background-8 relative overflow-hidden">
      {/* <!-- right gradient --> */}
      <FooterRightGradient />

      {/* <!-- left gradient --> */}
      <FooterLeftGradient />
      <div className="main-container px-5">
        <div className="pt-16 xl:pt-[90px]">
          {/* Final CTA Block */}
          <RevealAnimation delay={0.2}>
            <MotionPanel className="rounded-3xl bg-secondary-50 dark:bg-background-7 border border-stroke-1/10 p-8 sm:p-10 lg:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-[700px] text-center md:text-left">
                <h3 className="text-heading-5 sm:text-heading-4 text-white font-normal">
                  Have an Idea Worth Building?
                </h3>
                <p className="text-accent/70 text-tagline-1">
                  Whether you&apos;re starting from a rough concept or looking to modernise an existing platform, Arlo Technologies can help you design, build, and launch what&apos;s next.
                </p>
              </div>
              <LinkButton href="/contact-us" className="btn-md btn-primary hover:btn-accent whitespace-nowrap shadow-sm">
                Let&apos;s Build Together
              </LinkButton>
            </MotionPanel>
          </RevealAnimation>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-12 justify-between gap-x-6 gap-y-14 pb-12">
            {/* Left Brand Column */}
            <div className="col-span-12 lg:col-span-4 xl:col-span-3">
              <RevealAnimation delay={0.3}>
                <div className="max-w-[340px] space-y-4">
                  {/* Brand Logo */}
                  <Link href="/" className="group/footer-logo inline-flex items-center">
                    <span className="sr-only">Arlo Technologies Home</span>
                    <figure className="flex items-center h-11 w-auto">
                      <Image
                        src={darkLogo}
                        alt="Arlo Technologies"
                        className="h-10 sm:h-11 w-auto object-contain transition-opacity duration-300 group-hover/footer-logo:opacity-90"
                        priority
                      />
                    </figure>
                  </Link>

                  {/* Brand Tagline & Statement */}
                  <div className="space-y-2">
                    <p className="text-white text-base sm:text-lg font-medium tracking-tight">
                      Ideas Into Innovation. Technology Into Impact.
                    </p>
                    <p className="text-accent/70 text-sm leading-relaxed">
                      Engineering intelligent software platforms, modern digital products, and high-impact technology solutions for forward-thinking businesses and startups.
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    {/* LinkedIn */}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/company/arlo-technologies"
                      aria-label="Follow Arlo Technologies on LinkedIn"
                      className="group/social flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-md">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="size-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.3a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                      </svg>
                    </a>

                    {/* X (formerly Twitter) */}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://x.com/arlotechnologies"
                      aria-label="Follow Arlo Technologies on X"
                      className="group/social flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-md">
                      <span className="sr-only">X (formerly Twitter)</span>
                      <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    {/* GitHub */}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/arlotechnologiesinfo-beep"
                      aria-label="View Arlo Technologies on GitHub"
                      className="group/social flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-md">
                      <span className="sr-only">GitHub</span>
                      <svg className="size-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/arlotechnologies"
                      aria-label="Follow Arlo Technologies on Instagram"
                      className="group/social flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-md">
                      <span className="sr-only">Instagram</span>
                      <svg className="size-4.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.youtube.com/@arlotechnologies"
                      aria-label="Subscribe to Arlo Technologies on YouTube"
                      className="group/social flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-md">
                      <span className="sr-only">YouTube</span>
                      <svg className="size-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* 5 Navigation Columns */}
            <MotionStagger className="col-span-12 lg:col-span-8 xl:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10">
              {footerData?.map((item: FooterOneData) => (
                <MotionItem key={item.title} className="space-y-5">
                  <div>
                    <div>
                      <p className="text-tagline-1 text-primary-50 font-medium mb-4">{item.title}</p>
                      <ul className="space-y-3">
                        {item.links.map((link) => (
                          <li key={link.label}>
                            <MotionLink href={link.href} className="footer-link text-tagline-2 text-accent/70 hover:text-white">
                              {link.label}
                            </MotionLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </MotionItem>
              ))}
            </MotionStagger>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="relative pt-[26px] pb-[100px]">
          <FooterDivider />
          <RevealAnimation delay={0.6} offset={10} start="top 105%">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 text-center md:text-left">
              <div className="space-y-1">
                <p className="text-tagline-2 text-primary-50 font-normal">
                  &copy; {currentYear} Arlo Technologies. All rights reserved.
                </p>
                <p className="text-tagline-3 text-accent/60">
                  Built with purpose. Designed for what&apos;s next.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-tagline-2 text-primary-50">
                <MotionLink href="/terms-conditions" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </MotionLink>
                <span className="text-accent/30 hidden sm:inline">&bull;</span>
                <MotionLink href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </MotionLink>
                <span className="text-accent/30 hidden sm:inline">&bull;</span>
                <MotionLink href="/refund-policy" className="hover:text-white transition-colors">
                  Refund Policy
                </MotionLink>
                <span className="text-accent/30 hidden sm:inline">&bull;</span>
                <MotionLink href="/legal" className="hover:text-white transition-colors">
                  Legal Hub
                </MotionLink>
                <span className="text-accent/30 hidden sm:inline">&bull;</span>
                <MotionLink
                  href="/sitemap"
                  className="hover:text-white transition-colors text-primary-50 font-medium underline underline-offset-4 decoration-primary-50/40 hover:decoration-white">
                  Sitemap
                </MotionLink>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
      <ThemeToggle />
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
