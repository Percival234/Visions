import {
  Bell,
  User,
  Users,
  LogOut,
  Images,
  Package,
  UserCog,
  UserPen,
  LifeBuoy,
  Settings,
  ImagePlus,
  ChartColumn,
  MessageSquareWarning,
} from 'lucide-react';

import { DropdownMenuLink } from '../ui/dropdown-link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuSub,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu';

import { ROUTES } from '@/constants/pages-url';

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
