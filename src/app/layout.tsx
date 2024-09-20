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
            <div className="min-h-full min-w-80 flex flex-col">
              {children}
              <Toaster />
            </div>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

// TODO коли ти редіректиш сам, воно ше редірекить на сторінці реєстрації
