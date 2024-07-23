'use client';

import Link from 'next/link';

import { IPaintStyle } from '@/types/paint-style.types';

import { MenuItem } from './menu-item';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { ROUTES } from '@/constants/pages-url';
import { SERVER_URL } from '@/constants/server-url';

import { useCallback, useEffect, useState } from 'react';

export const NavMenu = () => {
  const [paintStyles, setPaintStyles] = useState<IPaintStyle[]>([]);

  const getPaintStyles = useCallback(async () => {
    const response = await fetch(`${SERVER_URL}/categories`);
    const data: IPaintStyle[] = await response.json();
    setPaintStyles(data);
  }, []);

  useEffect(() => {
    getPaintStyles();
    console.log('first'); // ! DELETE
  }, [getPaintStyles]);

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <Link href={ROUTES.MAIN.HOME} passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Arts</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-52 sm:w-96 xl:w-[750px] p-3 md:gap-1 grid-cols-2 xl:grid-cols-3">
              {paintStyles.slice(0, 8).map(({ id, name, description }) => (
                <li key={id}>
                  <MenuItem name={name} description={description} href={`?style=${id}`} />
                </li>
              ))}
              <li>
                <MenuItem name="View All..." description="Discover more styles" href="" />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={ROUTES.MAIN.CART} passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Shopping Cart
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
