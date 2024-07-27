import { NavMenu } from './nav-menu';
import { Button } from '../ui/button';
import { ThemeMenu } from '../theme-menu/theme-menu';
import { UserDropdownMenu } from './user-dropdown-menu';
import { CenteredContainer } from '../ui/centered-container';

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-16 flex justify-center bg-background">
      <CenteredContainer className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="font-bold text-2xl uppercase">Visions</div>
          <NavMenu />
        </div>
        <div className="flex gap-2">
          <ThemeMenu />
          <UserDropdownMenu />
          <Button>Sign in</Button>
        </div>
      </CenteredContainer>
    </header>
  );
};
