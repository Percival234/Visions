import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Панель адміністратора',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
