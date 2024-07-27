'use client';

import { type ThemeProviderProps } from 'next-themes/dist/types';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const ThemeProvider = (props: ThemeProviderProps) => {
  return <NextThemesProvider {...props} />;
};
