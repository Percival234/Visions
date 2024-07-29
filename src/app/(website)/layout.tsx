import { Toaster } from 'sonner';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Breadcrumbs } from '@/components/breadcrumbs/breadcrumbs';

// import { ThemeProvider } from '@/providers/theme.provider';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    // <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    <>
      <Header />
      <main className="flex-1 mt-16">
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
      <Toaster />
    </>
    // </ThemeProvider>
  );
}
