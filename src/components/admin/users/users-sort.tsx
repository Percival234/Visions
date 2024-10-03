'use client';

import { ArrowUpDown } from 'lucide-react';

import { SortKeys } from '@/types/sort.type';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

import { useUsersSearchParams } from '@/hooks/useUsersSearchParams';

import { cn } from '@/helpers/cn/cn';

import { SORT_METHODS } from '@/constants/sort-methods.constant';

export const UsersSort = () => {
  const { setSearchParam, getSearchParam } = useUsersSearchParams();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ArrowUpDown size={20} />
          <span>Сортувати</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {SORT_METHODS.map((method, index) => (
          <DropdownMenuItem
            className={cn({
              'bg-accent': getSearchParam('sort') === method.key,
            })}
            key={index}
            onClick={() => setSearchParam('sort', method.key)}>
            {method.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
