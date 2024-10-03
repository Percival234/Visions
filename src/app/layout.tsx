import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';

import { QueryProvider } from '@/providers/query.provider';
import { ThemeProvider } from '@/providers/theme.provider';

import './globals.scss';

const mulish = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'Visions',
    template: '%s',
  },
  robots: {
    follow: false,
    index: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mulish.className}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <div className="min-h-full min-w-80 flex flex-col bg-background/70 backdrop-blur-3xl">
              {children}
              <Toaster />
            </div>
            {/* <div className="absolute overflow-hidden max-w-full top-0 left-0 right-0 h-screen -z-10">
              <div className="absolute -top-60 -left-60 w-3/4 rotate-45 h-3/4 rounded-full bg-sky-500 blur-3xl"></div>
              <div className="absolute top-0 right-0 w-1/4 h-1/2 rotate-45 rounded-full bg-red-500 blur-3xl"></div>
            </div> */}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

// TODO коли ти редіректиш сам, воно ше редірекить на сторінці реєстрації
