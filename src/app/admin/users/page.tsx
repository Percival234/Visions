import { UsersDataTable } from '@/components/user/user-table';

import { usersService } from '@/services/user.service';

export default async function Page() {
  const users = await usersService.getUsers();
  return <UsersDataTable data={users} />;
}
