'use client';

import { useTheme } from 'next-themes';

import { Label } from '@/components/ui/label';
import { Title } from '@/components/ui/title';
import { Paragraph } from '@/components/ui/paragrah';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { WEBSITE_NAME } from '@/constants/website-name.constant';

export const ThemeSettings = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <Title size="h4">Theme preferences</Title>
        <Separator />
        <Paragraph>
          Choose how {WEBSITE_NAME} looks to you. Select a single theme, or sync with your system.
        </Paragraph>
      </div>
      <Title size="h5">Theme mode:</Title>
      <RadioGroup defaultValue={theme} onValueChange={(value) => setTheme(value)}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="light" id="light-theme" />
          <Label htmlFor="light-theme">Light</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dark" id="dark-theme" />
          <Label htmlFor="dark-theme">Dark</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="system" id="system-theme" />
          <Label htmlFor="system-theme">System</Label>
        </div>
      </RadioGroup>
    </div>
  );
};
