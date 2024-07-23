'use client';

import { type ThemeProviderProps } from 'next-themes/dist/types';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  return <NextThemesProvider {...props} />;
};
