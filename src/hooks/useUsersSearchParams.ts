import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SortKeys } from '@/types/sort.type';

export interface IUsersSearchParams {
  sort?: SortKeys;
  search?: string;
  page?: string;
  isBlocked?: string;
  isDeleted?: string;
  isAdmin?: string;
  isCreator?: string;
  limit?: string;
}

export const useUsersSearchParams = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const getSearchParam = (name: keyof IUsersSearchParams) => {
    const param = searchParams.get(name);
    return param;
  };

  const setSearchParam = (
    name: keyof IUsersSearchParams,
    value: string | boolean | number | null = null
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    if (name !== 'page' && name !== 'search') {
      params.delete('page');
    }

    if (value) {
      params.set(name, value.toString());
    } else {
      params.delete(name);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return { getSearchParam, setSearchParam };
};

// export const useUsersSearchParams = () => {
//   const data = useCustomSearchParams<IUsersSearchParams>();
//   return
// }

// TODO ADD GENERIC TO THIS HOOK
