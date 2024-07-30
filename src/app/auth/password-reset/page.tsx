import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/pages-url.constant';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Form } from 'react-hook-form';

export const metadata: Metadata = {
  title: 'Password reset',
};

export default function Page() {
  return <div className="h-screen grid grid-cols-2"></div>;
}
