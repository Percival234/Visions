import Image from 'next/image';

import { Button } from '@/components/ui/button';

export const SignInFormAlternative = () => {
  return (
    <>
      <div className="py-4 relative flex items-center justify-center">
        <div className="absolute bg-background px-2 leading-none text-sm text-muted-foreground">
          або
        </div>
        <hr className="h-[2px] bg-muted w-full" />
      </div>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <Button variant="outline">
          <Image
            src="http://localhost:3333/google-logo.svg"
            alt="Google logo"
            width={20}
            height={20}
          />
        </Button>
        <Button variant="outline">
          <Image
            src="http://localhost:3333/facebook-logo.svg"
            alt="Google logo"
            width={20}
            height={20}
          />
        </Button>
      </div>
    </>
  );
};
