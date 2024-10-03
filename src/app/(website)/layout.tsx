import { Toaster } from '@/components/ui/sonner';
import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1 mt-16">{children}</main>
      <Footer />
      <Toaster />
    </>
  );
}
