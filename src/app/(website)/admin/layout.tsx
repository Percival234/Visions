import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
