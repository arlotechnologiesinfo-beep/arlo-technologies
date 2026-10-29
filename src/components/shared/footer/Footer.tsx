import RevealAnimation from '@/components/animation/RevealAnimation';
import { FooterOneData } from '@/interface';
import { XIcon } from '@/icons';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import darkLogo from '@public/images/shared/dark-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { MotionIconLink, MotionItem, MotionLink, MotionPanel, MotionStagger } from '@/components/shared/motion/MotionPrimitives';
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
                <div className="max-w-[320px] space-y-4">
                  <Link href="/" className="group/footer-logo inline-flex items-center">
                    <span className="sr-only">Arlo Technologies Home</span>
                    <figure className="flex items-center h-10 w-auto">
                      <Image
                        src={darkLogo}
                        alt="Arlo Technologies"
                        className="h-9 w-auto object-contain"
                      />
                    </figure>
                  </Link>
                  <p className="text-accent/90 text-tagline-2 italic font-medium">
                    &ldquo;Ideas Into Innovation. Technology Into Impact.&rdquo;
                  </p>
                  <p className="text-accent/60 text-tagline-2 font-normal leading-relaxed">
                    We build intelligent products, modern software, and digital experiences that help businesses turn ambitious ideas into meaningful solutions.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <MotionIconLink
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com"
                      className="footer-social-link text-white hover:text-primary-500">
                      <span className="sr-only">LinkedIn</span>
                      <Image className="size-5" src={linkedin} alt="LinkedIn" />
                    </MotionIconLink>
                    <div className="bg-stroke-1/20 h-5 w-px"></div>
                    <MotionIconLink
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com"
                      className="footer-social-link text-white hover:text-primary-500">
                      <span className="sr-only">Instagram</span>
                      <Image className="size-5" src={instagram} alt="Instagram" />
                    </MotionIconLink>
                    <div className="bg-stroke-1/20 h-5 w-px"></div>
                    <MotionIconLink
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.youtube.com"
                      className="footer-social-link text-white hover:text-primary-500">
                      <span className="sr-only">YouTube</span>
                      <Image className="size-5" src={youtube} alt="YouTube" />
                    </MotionIconLink>
                    <div className="bg-stroke-1/20 h-5 w-px"></div>
                    <MotionIconLink
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://x.com"
                      className="footer-social-link text-white hover:text-primary-500 flex items-center justify-center size-5">
                      <span className="sr-only">X (formerly Twitter)</span>
                      <XIcon className="size-4 fill-white" />
                    </MotionIconLink>
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
