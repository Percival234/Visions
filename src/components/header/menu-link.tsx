import Link from 'next/link';

import { IPaintStyle } from '@/types/paint-style.type';

import { ROUTES } from '@/constants/pages-url.constant';

interface MenuLinkProps extends Omit<IPaintStyle, 'id'>, React.ComponentProps<typeof Link> {}

export const MenuLink = ({ name, description, href, ...props }: MenuLinkProps) => {
  return (
    <Link href={`${ROUTES.MAIN.STORE}${href}`} {...props}>
      <div className="h-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
        <div className="text-sm font-medium leading-none">{name}</div>
        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};
