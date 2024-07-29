import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/pages-url.constant';
import { SignInForm } from '@/components/auth/sign-in-form';

export const metadata: Metadata = {
  title: 'Sign in',
};

export default function SignInPage() {
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="relative">
        <Image
          src="http://localhost:3333/farm-lifestyle-digital-art.jpg"
          alt="Flowers farm"
          fill
          className="absolute object-cover object-top"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <SignInForm />
        <Button asChild variant="link">
          <Link href={ROUTES.AUTH.SIGN_UP}>Sign up</Link>
        </Button>
      </div>
    </div>
  );
}

// TODO CHECK ALL PAGES FOR METADATA AND NAME FUNCTION
