import Link from 'next/link';

import { Mark } from '@/components/ui/mark';
import { Title } from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import { SignInFormFields } from './sign-in-form-fields';

import { ROUTES } from '@/constants/pages-url.constant';

export const SignInForm = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Title size="h1" className="mb-6">
        <Mark color="violet">Вхід</Mark>
      </Title>
      <SignInFormFields />
      <div className="flex justify-center">
        <Button asChild variant="link">
          <Link href={ROUTES.AUTH.SIGN_UP}>Створити акаунт</Link>
        </Button>
      </div>
    </div>
  );
};
