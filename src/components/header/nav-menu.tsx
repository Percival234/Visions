import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import { MenuLink } from './menu-link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { ROUTES } from '@/constants/pages-url.constant';

import { paintStylesService } from '@/services/paint-style.service';

export const revalidate = 0;

export const NavMenu = async () => {
  const paintStyles = await paintStylesService.getPaintStyles();

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-2">
        <NavigationMenuItem>
          <Link href={ROUTES.MAIN.HOME} passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Arts</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-52 sm:w-96 xl:w-[750px] p-3 md:gap-1 grid-cols-2 xl:grid-cols-3">
              {paintStyles.slice(0, 8).map(({ id, name, description }) => (
                <li key={id}>
                  <MenuLink name={name} description={description} href={`?style=${id}`} />
                </li>
              ))}
              <li>
                <MenuLink name="View All..." description="Discover more styles" href="" />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={ROUTES.MAIN.CART} passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Shopping Cart
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
