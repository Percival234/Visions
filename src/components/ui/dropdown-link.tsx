import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

import { DropdownMenuItem } from './dropdown-menu';

import { cn } from '@/helpers/cn/cn';

interface DropdownMenuLinkProps extends React.ComponentProps<typeof Link> {
  title: string;
  Icon: LucideIcon;
}

export const DropdownMenuLink = ({ title, Icon, className, ...props }: DropdownMenuLinkProps) => {
  return (
    <DropdownMenuItem>
      <Link {...props} className={cn('inline-flex items-center', className)}>
        <Icon className="mr-2 h-4 w-4" />
        <span>{title}</span>
      </Link>
    </DropdownMenuItem>
  );
};
