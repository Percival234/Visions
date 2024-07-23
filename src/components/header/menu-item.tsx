import Link from 'next/link';

import { IPaintStyle } from '@/types/paint-style.types';

import { NavigationMenuLink } from '@/components/ui/navigation-menu';

import { ROUTES } from '@/constants/pages-url';

type MenuItemProps = Omit<IPaintStyle, 'id'> & { href: string };

export const MenuItem: React.FC<MenuItemProps> = ({ name, description, href }) => {
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
