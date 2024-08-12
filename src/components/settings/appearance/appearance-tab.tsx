import { Title } from '@/components/ui/title';
import { ThemeSettings } from './theme-settings';
import { Paragraph } from '@/components/ui/paragrah';

export const AppearanceTab = () => {
  return (
    <>
      <div>
        <Title size="h3">Зовнішній вигляд</Title>
        <Paragraph>Персоналізуйте свій простір.</Paragraph>
      </div>
      <ThemeSettings />
    </>
  );
};
