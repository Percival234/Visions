import { Title } from '@/components/ui/title';
import { Paragraph } from '@/components/ui/paragrah';
import { NewPasswordForm } from '@/components/forms/new-password-form';

export const PasswordTab = () => {
  return (
    <>
      <div>
        <Title size="h3">Зміна парою</Title>
        <Paragraph>Змініть свій пароль тут. Після зміни збережіть, ви вийдете з системи.</Paragraph>
      </div>
      <NewPasswordForm />
    </>
  );
};
