import CustomCursor from '@/components/shared/CustomCursor';
import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Preloader, { preloaderSkipScript } from '@/components/shared/Preloader';
import Footer from '@/components/shared/footer/Footer';
import { ScrollProgress } from '@/components/shared/motion/MotionPrimitives';
import SiteChrome from '@/components/shared/SiteChrome';
import Navbar from '@/components/shared/navbar/Navbar';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloaderSkipScript }} />
        <style dangerouslySetInnerHTML={{ __html: '.preloaded #preloader{display:none}' }} />
      </head>
      <body className={`${interTight.variable} antialiased`}>
        <Preloader />
        <CustomCursor />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense>
            <SmoothScrollProvider>
              <ScrollProgress />
              <SiteChrome
                top={<Navbar />}
                bottom={<Footer />}>
                {children}
              </SiteChrome>
            </SmoothScrollProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
