export type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visions',
  description: '',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
