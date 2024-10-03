import { UsersPanel } from '@/components/admin/users/users-panel';

import { IUsersSearchParams } from '@/hooks/useUsersSearchParams';

import { usersService } from '@/services/user.service';

interface IUsersPage {
  searchParams: IUsersSearchParams;
}

export default async function Page({ searchParams }: IUsersPage) {
  const data = await usersService.getUsers(searchParams);
  return <UsersPanel data={data} />;
}
