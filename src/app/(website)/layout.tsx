import { Toaster } from 'sonner';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Breadcrumbs } from '@/components/breadcrumbs/breadcrumbs';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1 mt-16">
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
