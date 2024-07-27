import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}

// TODO AUTH AND WORKSHOP LAYOUT
