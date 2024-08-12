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
  CircleHelp,
} from 'lucide-react';

import { DropdownMenuLink } from '@/components/ui/dropdown-link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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

import { ROUTES } from '@/constants/pages-url.constant';

export const UserNavMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuLabel>Акаунт</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLink Icon={User} title="Профіль" href={ROUTES.USER.PERSONAL} />
          <DropdownMenuLink Icon={Package} title="Замовлення" href={ROUTES.USER.ORDERS} />
          <DropdownMenuLink Icon={Bell} title="Сповіщення" href={ROUTES.USER.NOTIFICATIONS} />
          <DropdownMenuLink Icon={Settings} title="Налаштування" href={ROUTES.USER.SETTINGS} />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPen className="mr-2 h-4 w-4" />
              <span>Пaнель адміністратора</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuLink
                  Icon={ChartColumn}
                  title="Головна"
                  href={ROUTES.ADMIN.DASHBOARD}
                />
                <DropdownMenuLink Icon={Users} title="Користувачі" href={ROUTES.ADMIN.USERS} />
                <DropdownMenuLink Icon={Images} title="Картини" href={ROUTES.ADMIN.PICTURES} />
                <DropdownMenuLink Icon={Package} title="Замовлення" href={ROUTES.ADMIN.ORDERS} />
                <DropdownMenuLink
                  Icon={MessageSquareWarning}
                  title="Звіти"
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
              <span>Панель продавця</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuLink
                  Icon={ChartColumn}
                  title="Головна"
                  href={ROUTES.CREATOR.DASHBOARD}
                />
                <DropdownMenuLink Icon={Images} title="Вітрина" href={ROUTES.CREATOR.SHOWCASE} />
                <DropdownMenuLink
                  Icon={ImagePlus}
                  title="Майстерня"
                  href={ROUTES.CREATOR.WORKSHOP}
                />
                <DropdownMenuLink Icon={Package} title="Замовлення" href={ROUTES.CREATOR.ORDERS} />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLink Icon={LifeBuoy} title="Підтримка" href={ROUTES.USER.SUPPORT} />
          <DropdownMenuLink Icon={CircleHelp} title="ЧАПИ" href={ROUTES.MAIN.FAQS} />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Вихід</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// TODO MAKE PRIORITY PROPERTY TO REPORT
