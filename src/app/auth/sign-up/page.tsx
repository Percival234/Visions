import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/pages-url.constant';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Form } from 'react-hook-form';

export const metadata: Metadata = {
  title: 'Sign up',
};

export default function SignUpPage() {
  return (
    <div className="h-screen grid grid-cols-2">
      <div>
        <Form></Form>
        <Button asChild variant="link">
          <Link href={ROUTES.AUTH.SIGN_IN}>Sign in</Link>
        </Button>
      </div>
      <div className="relative">
        <Image
          src="http://localhost:3333/watercolor-moon-illustration.jpg"
          alt="Flowers farm"
          fill
          className="absolute object-cover"
        />
      </div>
    </div>
  );
}
