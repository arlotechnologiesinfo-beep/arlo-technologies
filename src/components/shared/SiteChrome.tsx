'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

/** Routes that render full-bleed, without the site navbar, demo switcher and footer. */
const BARE_ROUTES = ['/signup', '/login'];

const SiteChrome = ({ top, bottom, children }: { top: ReactNode; bottom: ReactNode; children: ReactNode }) => {
  const pathname = usePathname();
  const bare = BARE_ROUTES.includes(pathname);

  return (
    <>
      {!bare && top}
      {children}
      {!bare && bottom}
    </>
  );
};

export default SiteChrome;
