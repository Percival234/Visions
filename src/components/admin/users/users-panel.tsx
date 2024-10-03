import Link from 'next/link';
import { Pencil } from 'lucide-react';

import { IUser } from '@/types/user.type';
import { IPaginatedResponse } from '@/types/response.type';

import { UsersSort } from './users-sort';
import { UsersTable } from './users-table';
import { UsersSearch } from './users-search';
import { UsersFilters } from './users-filters';
import { Button } from '@/components/ui/button';
import { UsersPagination } from './users-pagination';
import { CenteredContainer } from '@/components/ui/centered-container';

import { ROUTES } from '@/constants/pages-url.constant';

export const UsersPanel = ({ data: { data, pages } }: { data: IPaginatedResponse<IUser[]> }) => {
  return (
    <CenteredContainer className="relative">
      <div className="flex items-center justify-between gap-2 pt-5">
        <UsersSearch />
        <div className="flex items-center gap-3">
          <UsersFilters />
          <UsersSort />
          <Button asChild>
            <Link href={ROUTES.ADMIN.MAIL}>
              <Pencil size={20} />
              Написати
            </Link>
          </Button>
        </div>
      </div>
      <UsersTable users={data} />
      <UsersPagination pages={pages} />
    </CenteredContainer>
  );
};
// TODO ADD FUNCTION FOR ACTIONS
// TODO справити пагінацію коли на 0
