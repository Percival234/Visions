import Image from 'next/image';
import type { Metadata } from 'next';

import { SignInForm } from '@/components/forms/sign-in-form';

export const metadata: Metadata = {
  title: 'Sign in',
};

export default function Page() {
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="relative flex flex-col items-center text-white font-bold text-5xl px-4 pt-24 [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)] text-center">
        <div className="fadeInUp">
          <q>
            Painting is a thing of the mind, because it creates similarity by art, not by the hand.
          </q>
          <div className="text-2xl mt-5">- Leonardo da Vinci</div>
        </div>
        <Image
          src="http://localhost:3333/farm-lifestyle-digital-art.jpg"
          alt="Flowers farm"
          fill
          className="absolute object-cover object-top -z-10"
        />
      </div>
      <SignInForm />
    </div>
  );
}

// TODO CHECK ALL PAGES METADATA
