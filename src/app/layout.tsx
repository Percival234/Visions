import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { CenteredContainer } from '@/components/ui/centered-container';

import { ThemeProvider } from '@/providers/theme.provider';
import { QueryProvider } from '@/providers/query.provider';

import './globals.scss';

const mulish = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Visions',
  description: 'Immerse yourself in the world of art with Visions',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mulish.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <QueryProvider>
            <div className="min-h-screen min-w-80 flex flex-col">
              <Header />
              <main className="flex-1 mt-16 pt-8 min-h-full">
                <CenteredContainer className="">{children}</CenteredContainer>
              </main>
              <Footer />
              <Toaster />
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
