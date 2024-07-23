import {
  Bell,
  ChartColumn,
  ImagePlus,
  Images,
  LifeBuoy,
  LogOut,
  Package,
  Settings,
  User,
  UserCog,
  UserPen,
  Users,
  MessageSquareWarning,
  LucideIcon,
} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link, { LinkProps } from 'next/link';
import { ROUTES } from '@/constants/pages-url';
import { cn } from '@/lib/utils';

export const UserDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLink Icon={User} title="Personal" href={ROUTES.USER.PERSONAL} />
          <DropdownMenuLink Icon={Package} title="Orders" href={ROUTES.USER.ORDERS} />
          <DropdownMenuLink Icon={Bell} title="Notifications" href={ROUTES.USER.NOTIFICATIONS} />
          <DropdownMenuLink Icon={Settings} title="Settings" href={ROUTES.USER.SETTINGS} />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPen className="mr-2 h-4 w-4" />
              <span>Admin Panel</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuLink
                  Icon={ChartColumn}
                  title="Dashboard"
                  href={ROUTES.ADMIN.DASHBOARD}
                />
                <DropdownMenuLink Icon={Users} title="Users" href={ROUTES.ADMIN.USERS} />
                <DropdownMenuLink Icon={Images} title="Pictures" href={ROUTES.ADMIN.PICTURES} />
                <DropdownMenuLink Icon={Package} title="Orders" href={ROUTES.ADMIN.ORDERS} />
                <DropdownMenuLink
                  Icon={MessageSquareWarning}
                  title="Reports"
                  href={ROUTES.ADMIN.REPORTS}
                />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserCog className="mr-2 h-4 w-4" />
              <span>Creator Panel</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuLink
                  Icon={ChartColumn}
                  title="Dashboard"
                  href={ROUTES.CREATOR.DASHBOARD}
                />
                <DropdownMenuLink Icon={Images} title="Showcase" href={ROUTES.CREATOR.SHOWCASE} />
                <DropdownMenuLink
                  Icon={ImagePlus}
                  title="Workshop"
                  href={ROUTES.CREATOR.WORKSHOP}
                />
                <DropdownMenuLink Icon={Package} title="Orders" href={ROUTES.CREATOR.ORDERS} />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLink Icon={LifeBuoy} title="Support" href={ROUTES.USER.SUPPORT} />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

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
