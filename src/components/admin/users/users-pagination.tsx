'use client';

import { ChangeEvent, KeyboardEvent, useState } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Input } from '@/components/ui/input';

import { useUsersSearchParams } from '@/hooks/useUsersSearchParams';

interface IUsersPaginations {
  pages: number;
}

export const UsersPagination = ({ pages }: IUsersPaginations) => {
  const { getSearchParam, setSearchParam } = useUsersSearchParams();
  const [pageValue, setPageValue] = useState(getSearchParam('page') || '1');

  const handlePage = (event: ChangeEvent<HTMLInputElement>) => setPageValue(event.target.value);

  const submitPage = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const page = String(Math.max(1, Math.min(+pageValue, pages)));
      setPageValue(page);
      setSearchParam('page', page === '1' ? null : page);
    }
  };

  return (
    <div className="flex justify-between gap-3 py-2">
      <div className="flex gap-1 items-center text-sm">
        Сторінка:{' '}
        <Input
          disabled={pages === 1}
          type="number"
          onChange={handlePage}
          className="h-8 w-12 text-center"
          value={pageValue}
          onKeyDown={submitPage}
        />{' '}
        з <span>{pages}</span>
      </div>
      {/* <Pagination className="justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious isActive={false} href={`/${page && page > 1 ? page - 1 : page}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive={page === 1}>
              {page - 1}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => setSearchParam('page', page)} isActive={page > 1}>
              {page}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{page + 1}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination> */}
    </div>
  );
};
