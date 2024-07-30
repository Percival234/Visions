import Image from 'next/image';
import { Metadata } from 'next';

import { SignUpForm } from '@/components/forms/sign-up-user-form';

export const metadata: Metadata = {
  title: 'Sign up',
};

export default function Page() {
  return (
    <div className="h-screen grid grid-cols-2">
      <SignUpForm />
      <div className="relative flex flex-col items-center text-white font-bold text-5xl px-4 pt-24 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-center">
        <div className="fadeInUp">
          <q>If I could say it in words, there would be no need to paint.</q>
          <div className="text-2xl mt-5">- Edward Hopper</div>
        </div>
        <Image
          src="http://localhost:3333/farm-lifestyle-digital-art-green.jpg"
          alt="Flowers farm"
          fill
          className="absolute object-cover -z-10"
        />
      </div>
    </div>
  );
}
