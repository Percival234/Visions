import { Title } from '@/components/ui/title';
import { Paragraph } from '@/components/ui/paragrah';
import { NewPasswordForm } from '@/components/forms/new-password-form';

export const PasswordTab = () => {
  return (
    <>
      <div>
        <Title size="h3">Password</Title>
        <Paragraph>Change your password here. After saving, you&rsquo;ll be logged out.</Paragraph>
      </div>
      <NewPasswordForm />
    </>
  );
};
