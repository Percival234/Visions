'use client';

import { Filter } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

import { useUsersSearchParams } from '@/hooks/useUsersSearchParams';

export const UsersFilters = () => {
  const {} = useUsersSearchParams();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Filter size={20} />
          <span>Фільтри</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => {}}></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
