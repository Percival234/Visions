'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';

import { useDebounce } from '@/hooks/useDebounce';
import { useUsersSearchParams } from '@/hooks/useUsersSearchParams';

export const UsersSearch = () => {
  const { setSearchParam, getSearchParam } = useUsersSearchParams();
  const [searchValue, setSearchValue] = useState(getSearchParam('search') || '');
  const debouncedSearchValue = useDebounce(searchValue);

  const handleSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  useEffect(() => {
    setSearchParam('search', debouncedSearchValue);
  }, [debouncedSearchValue, setSearchParam]);

  return (
    <Input
      placeholder="Шукати за ID, ім'ям або електронною поштою"
      className="max-w-sm"
      value={searchValue}
      onChange={handleSearchValue}
    />
  );
};
