import { Title } from '@/components/ui/title';
import { ThemeSettings } from './theme-settings';
import { Paragraph } from '@/components/ui/paragrah';

export const AppearanceTab = () => {
  return (
    <>
      <div>
        <Title size="h3">Appearance</Title>
        <Paragraph>Customize your space.</Paragraph>
      </div>
      <ThemeSettings />
    </>
  );
};
