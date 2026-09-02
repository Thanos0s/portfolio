import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { SoundProvider } from '@/context/SoundContext';
import { NavbarWrapper } from '@/components/NavbarWrapper';
import { Footer } from '@/components/Footer';
import { portfolioData } from '@/data/portfolio';

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.jobTitle}`,
  description: `${portfolioData.personal.name} is a ${portfolioData.personal.jobTitle}, known for pixel-perfect execution and an obsessive attention to detail.`,
  openGraph: {
    title: `${portfolioData.personal.name} | ${portfolioData.personal.jobTitle}`,
    description: portfolioData.personal.about.intro,
    url: 'https://krishsrivastava.dev',
    siteName: `${portfolioData.personal.name} Portfolio`,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioData.personal.name} | ${portfolioData.personal.jobTitle}`,
    description: portfolioData.personal.about.intro,
    creator: `@${portfolioData.personal.handle}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0a0a0a" />
      </head>
      <body className="min-h-screen font-sans antialiased bg-background text-foreground">
        <ThemeProvider>
          <SoundProvider>
            {/* Skip to content accessibility link */}
            <a
              href="#main"
              className="focus:bg-background focus:ring-ring/50 sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:border focus:px-3 focus:py-2 focus:text-sm focus:ring-[3px]"
            >
              Skip to content
            </a>

            {/* Navbar & CommandMenu wrapper */}
            <NavbarWrapper />

            {/* Central Column Container with technical borders */}
            <div className="mx-auto w-full px-4 md:max-w-[715px] md:px-0">
              <div className="relative">
                {/* Left Lateral Border Guide */}
                <div
                  aria-hidden="true"
                  className="border-border pointer-events-none absolute top-0 bottom-0 z-0 hidden border-r md:-left-6 md:block md:w-6 dark:opacity-60"
                />

                {/* Right Lateral Border Guide */}
                <div
                  aria-hidden="true"
                  className="border-border pointer-events-none absolute top-0 bottom-0 z-0 hidden border-l md:-right-6 md:block md:w-6 dark:opacity-60"
                />

                {/* Main Content Area */}
                <div id="main" className="relative z-10">
                  <main>{children}</main>
                  <Footer />
                </div>
              </div>
            </div>

            {/* Bottom Screen Gradient Fade */}
            <div
              aria-hidden="true"
              className="from-background pointer-events-none fixed inset-x-0 bottom-0 z-40 h-10 bg-gradient-to-t to-transparent backdrop-blur-[5px] select-none"
            />
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
