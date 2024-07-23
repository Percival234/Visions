import { NavMenu } from './nav-menu';
import { CenteredContainer } from '../ui/centered-container';
import { Button } from '../ui/button';
import { ThemeMenu } from '../theme-menu/theme-menu';
import { UserDropdownMenu } from './user-dropdown-menu';

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 h-16 flex justify-center bg-background shadow-md">
      <CenteredContainer className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="font-bold text-2xl uppercase">LOGO</div>
          <NavMenu />
        </div>
        <div className="flex gap-2">
          <ThemeMenu />
          <UserDropdownMenu />
          <Button>Login</Button>
        </div>
      </CenteredContainer>
    </header>
  );
};
