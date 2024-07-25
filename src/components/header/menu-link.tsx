import Link from 'next/link';

import { IPaintStyle } from '@/types/user.types';

import { NavigationMenuLink } from '@/components/ui/navigation-menu';

import { ROUTES } from '@/constants/pages-url';

type MenuLinkProps = Omit<IPaintStyle, 'id'> & { href: string };

export const MenuLink: React.FC<MenuLinkProps> = ({ name, description, href }) => {
  return (
    <NavigationMenuLink asChild className="h-full">
      <Link
        href={`${ROUTES.MAIN.STORE}${href}`}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
        <div className="text-sm font-medium leading-none">{name}</div>
        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{description}</p>
      </Link>
    </NavigationMenuLink>
  );
};
