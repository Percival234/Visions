import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Panel',
  robots: {
    index: false,
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
