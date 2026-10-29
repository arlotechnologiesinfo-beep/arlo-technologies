'use client';

import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import logoDark from '@public/images/shared/logo-dark.svg';
import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '@/components/ui/button/LinkButton';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';
import CompanyMenu from './CompanyMenu';
import PlanAndSupportMenu from './PlanAndSupportMenu';
import PlatformMenu from './PlatformMenu';
import ResourcesMenu from './ResourcesMenu';
import { mobileMenuData } from './data';

const dropdownNavItems = [
  { label: 'Company', dataMenu: 'company-mega-menu', MenuComponent: CompanyMenu },
  { label: 'Platform', dataMenu: 'platform-mega-menu', MenuComponent: PlatformMenu },
  { label: 'Resources', dataMenu: 'resources-dropdown-menu', MenuComponent: ResourcesMenu },
  { label: 'Plans & Support', dataMenu: 'plan-and-support-mega-menu', MenuComponent: PlanAndSupportMenu },
];

const Navbar = () => {
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const { isScrolled } = useNavbarScroll(100);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'fixed left-1/2 z-50 mx-auto w-[calc(100%-1.5rem)] -translate-x-1/2 transition-all duration-300 ease-out sm:w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] lp:max-w-[1290px]',
          isScrolled ? 'top-2 sm:top-3' : 'top-4 sm:top-5',
        )}>
        <div
          className={cn(
            'glass-header header-reveal mx-auto flex items-center justify-between rounded-full px-3 py-2 xl:py-1.5 shadow-md',
            isScrolled && 'is-scrolled shadow-lg',
          )}>
          <div className="flex items-center justify-center">
            <Link href="/" className="group/logo inline-flex items-center py-1 pl-1 pr-2 transition-all duration-300">
              <span className="sr-only">Arlo Technologies Home</span>
              {/* Original Brand Logo Lockup with Authentic Wordmark */}
              <figure className="flex items-center h-8 sm:h-9 w-auto">
                <Image
                  src={mainLogo}
                  alt="Arlo Technologies"
                  className="block h-7 sm:h-8 w-auto object-contain dark:hidden"
                  priority
                />
                <Image
                  src={logoDark}
                  alt="Arlo Technologies"
                  className="hidden h-7 sm:h-8 w-auto object-contain dark:block"
                  priority
                />
              </figure>
            </Link>
          </div>
          <nav className="hidden items-center xl:flex">
            <ul className="flex items-center">
              {dropdownNavItems.map(({ label, dataMenu, MenuComponent }) => (
                <li
                  key={label}
                  className="group relative cursor-pointer py-2.5"
                  data-menu={dataMenu}
                  onMouseEnter={() => handleMenuHover(dataMenu)}>
                  <button
                    type="button"
                    className="hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-xs text-tagline-1 text-secondary/75 hover:text-secondary dark:text-accent/75 dark:hover:text-white flex cursor-pointer items-center gap-1 rounded-full border border-transparent px-3.5 py-1.5 font-normal transition-all duration-300">
                    <span>{label}</span>
                    <span className="block origin-center translate-y-px transition-all duration-300 group-hover:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                  <MenuComponent menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                </li>
              ))}
              <li className="relative cursor-pointer py-2.5">
                <Link
                  href="/pricing"
                  className="hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-xs text-tagline-1 text-secondary/75 hover:text-secondary dark:text-accent/75 dark:hover:text-white flex items-center gap-1 rounded-full border border-transparent px-3.5 py-1.5 font-normal transition-all duration-300">
                  <span>Pricing</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="hidden items-center justify-center xl:flex">
            <LinkButton
              href="/signup"
              className="btn btn-md btn-primary shadow-sm hover:shadow-md transition-all">
              Get started
            </LinkButton>
          </div>

          {/* mobile menu ham burger icon  */}
          <MobileMenuButton />
        </div>
        {/* mobile menu component */}
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
