import type { Metadata } from 'next';

import { Title } from '@/components/ui/title';
import { Separator } from '@/components/ui/separator';
import { MessagesList } from '@/components/message/messages-list';
import { CenteredContainer } from '@/components/ui/centered-container';

import { mailService } from '@/services/mail.service';

export const metadata: Metadata = {
  title: 'Notifications',
};

export default async function Page() {
  const mail = await mailService.getUserMail('111');
  return (
    <CenteredContainer>
      <Title>Manage your mail</Title>
      <Separator />
      <MessagesList messages={mail.messages} />
    </CenteredContainer>
  );
}
