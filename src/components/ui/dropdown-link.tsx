import { LucideIcon } from 'lucide-react';
import Link, { LinkProps } from 'next/link';

import { DropdownMenuItem } from './dropdown-menu';

import { cn } from '@/lib/utils';

type DropdownMenuLinkProps = LinkProps & {
  title: string;
  Icon: LucideIcon;
  className?: string;
};

export const DropdownMenuLink: React.FC<DropdownMenuLinkProps> = ({
  title,
  Icon,
  className,
  ...props
}) => {
  return (
    <DropdownMenuItem>
      <Link {...props} className={cn('inline-flex items-center', className)}>
        <Icon className="mr-2 h-4 w-4" />
        <span>{title}</span>
      </Link>
    </DropdownMenuItem>
  );
};
