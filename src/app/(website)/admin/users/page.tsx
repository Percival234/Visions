import { UsersDataTable } from '@/components/user/user-table';
import { CenteredContainer } from '@/components/ui/centered-container';

import { usersService } from '@/services/user.service';

export const revalidate = 5;

export default async function Page() {
  const users = await usersService.getUsers();
  return (
    <CenteredContainer>
      <UsersDataTable data={users} />
    </CenteredContainer>
  );
}
