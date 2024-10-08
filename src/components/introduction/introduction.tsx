import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, Store } from 'lucide-react';

import { Mark } from '@/components/ui/mark';
import { Title } from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import { Paragraph } from '@/components/ui/paragrah';
import { CenteredContainer } from '@/components/ui/centered-container';

import { ROUTES } from '@/constants/pages-url.constant';
import { WEBSITE_NAME } from '@/constants/website-name.constant';

export const Introduction = () => {
  return (
    <section className="h-[93vh] relative">
      <CenteredContainer className="items-center">
        <div className="flex flex-col items-center text-center pt-40">
          <Title size="h1" className="mb-6 fadeInUp uppercase">
            Пориньте у світ мистецтва з {WEBSITE_NAME}!
          </Title>
          <Paragraph className="text-lg mb-16 delay-200 fadeInUp">
            Найкращий ринок для любителів мистецтва! <br /> <Mark color="lime">Знаходьте</Mark>,{' '}
            <Mark color="yellow">купуйте</Mark> або <Mark color="red">створюйте</Mark> чудові
            картини!
          </Paragraph>
          <div className="space-x-2">
            <Button asChild>
              <Link href={ROUTES.AUTH.SIGN_UP}>Реєстрація</Link>
            </Button>
            <Button className="gap-2 items-center" asChild variant="outline">
              <Link href={ROUTES.MAIN.STORE}>
                Магазин
                <Store size={18} />
              </Link>
            </Button>
          </div>
        </div>
        {/* <div className="absolute top-0 left-0 right-0 bottom-0">
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
        </div> */}
        <Button
          variant="ghost"
          size="icon"
          className="border border-solid border-accent rounded-full absolute bottom-5 animate-bounce">
          <ArrowDown />
        </Button>
      </CenteredContainer>
    </section>
  );
};
