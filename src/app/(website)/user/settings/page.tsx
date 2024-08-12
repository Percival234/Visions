import type { Metadata } from 'next';
import { KeyRound, Paintbrush, UserCog } from 'lucide-react';

import { Title } from '@/components/ui/title';
import { Paragraph } from '@/components/ui/paragrah';
import { Separator } from '@/components/ui/separator';
import { CenteredContainer } from '@/components/ui/centered-container';
import { PasswordTab } from '@/components/settings/password/password-tab';
import { PersonalTab } from '@/components/settings/personal/personal-tab';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AppearanceTab } from '@/components/settings/appearance/appearance-tab';

export const metadata: Metadata = {
  title: 'Налаштування',
};

export default function Page() {
  return (
    <CenteredContainer>
      <div className="space-y-1">
        <Title size="h2">Налаштування</Title>
        <Paragraph>Керуйте своїми налаштуваннями</Paragraph>
      </div>
      <Separator />
      <Tabs defaultValue="personal" className="flex gap-10">
        <TabsList
          aria-orientation="vertical"
          className="flex h-[initial] p-0 flex-col gap-0.5 min-w-52 justify-start items-start bg-transparent">
          <TabsTrigger
            className="flex justify-start gap-2 w-full hover:bg-accent data-[state=active]:bg-accent cursor-pointer focus:bg-accent focus:text-accent-foreground"
            value="personal">
            <UserCog size={18} />
            <span>Особисті дані</span>
          </TabsTrigger>
          <TabsTrigger
            className="flex justify-start gap-2 w-full hover:bg-accent data-[state=active]:bg-accent cursor-pointer focus:bg-accent focus:text-accent-foreground"
            value="appearance">
            <Paintbrush size={18} />
            <span>Зовнішній вигляд</span>
          </TabsTrigger>
          <TabsTrigger
            className="flex justify-start gap-2 w-full hover:bg-accent data-[state=active]:bg-muted/60 cursor-pointer focus:bg-accent focus:text-accent-foreground"
            value="password">
            <KeyRound size={18} />
            <span>Пароль</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="personal" className="mt-0 space-y-5">
          <PersonalTab />
        </TabsContent>
        <TabsContent value="appearance" className="mt-0 space-y-5">
          <AppearanceTab />
        </TabsContent>
        <TabsContent value="password" className="mt-0 space-y-5">
          <PasswordTab />
        </TabsContent>
      </Tabs>
    </CenteredContainer>
  );
}

// TODO MUTED to ACCENT
