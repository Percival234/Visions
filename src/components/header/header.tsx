import Link from 'next/link';

import { NavMenu } from './nav-menu';
import { Button } from '../ui/button';
import { UserNavMenu } from './user-nav-menu';
import { ThemeMenu } from '../theme-menu/theme-menu';
import { CenteredContainer } from '../ui/centered-container';

import { ROUTES } from '@/constants/pages-url.constant';

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-16 flex justify-center bg-background">
      <CenteredContainer className="flex-row items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="font-bold text-2xl uppercase">Visions</div>
          <NavMenu />
        </div>
        <div className="flex gap-2">
          <ThemeMenu />
          <UserNavMenu />
          <Button asChild>
            <Link href={ROUTES.AUTH.SIGN_IN}>Sign in</Link>
          </Button>
        </div>
      </CenteredContainer>
    </header>
  );
};
