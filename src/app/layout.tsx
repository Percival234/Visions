import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { CenteredContainer } from '@/components/ui/centered-container';

import { ThemeProvider } from '@/providers/theme-provider';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="min-h-screen min-w-80 flex flex-col">
            <Header />
            <main className="flex-1 mt-16">
              <CenteredContainer>{children}</CenteredContainer>
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
