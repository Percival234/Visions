import Link from 'next/link';
import Image from 'next/image';
import { Store } from 'lucide-react';

import { Mark } from '@/components/ui/mark';
import { Title } from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import { CenteredContainer } from '@/components/ui/centered-container';

import { ROUTES } from '@/constants/pages-url.constant';

export const Introduction = () => {
  return (
    <section className="pt-20 h-screen max-h-screen relative">
      <CenteredContainer>
        <div className="flex flex-col items-center text-center">
          <Title size="h1" className="mb-6">
            Immerse Yourself in the World of Art with Visions
          </Title>
          <p className="dark:text-white/80 text-lg mb-10">
            The leading marketplace for art lovers! <br /> <Mark color="lime">Discover</Mark>,{' '}
            <Mark color="yellow">create</Mark> and <Mark color="red">buy</Mark> amazing paintings!
          </p>
          <div className="space-x-2">
            <Button asChild>
              <Link href={ROUTES.AUTH.SIGN_UP}>Sign up</Link>
            </Button>
            <Button className="gap-2 items-center" asChild variant="outline">
              <Link href={ROUTES.MAIN.STORE}>
                Store
                <Store size={18} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="absolute bottom-20 right-28 w-[450px] rounded overflow-hidden z-20">
            <Image
              src="http://localhost:3333/girl_dog_waterfall.jpg"
              alt="Girl with dog"
              width={450}
              height={300}
              quality={100}
            />
          </div>
          <div className="absolute top-0 right-0 w-[450px]">
            <Image
              src="http://localhost:3333/boat_river_art.jpg"
              alt="Girl with dog"
              width={450}
              height={300}
              quality={100}
            />
          </div>
          <div className="absolute top-0 right-0 w-[450px]">
            <Image
              className=""
              src="http://localhost:3333/decorative-arrangement-with-dried-fruits-flowers.jpg"
              alt="Girl with dog"
              width={450}
              height={300}
              quality={100}
            />
          </div>
          <div className="absolute bottom-60 right-40 w-[300px]">
            <Image
              src="http://localhost:3333/farm-lifestyle-digital-art.jpg"
              alt="Girl with dog"
              width={300}
              height={300}
              quality={100}
            />
          </div>
          <div className="absolute top-0 right-0 w-[300px]">
            <Image
              src="http://localhost:3333/watercolor-moon-illustration.jpg"
              alt="Girl with dog"
              width={300}
              height={300}
              quality={100}
            />
          </div>
        </div>
      </CenteredContainer>
    </section>
  );
};
