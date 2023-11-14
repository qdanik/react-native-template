import { defaultTheme } from './default';
import { globalTheme } from './global';
import { ThemeVariant } from './types';
import { vipTheme } from './vip';

export type DefaultTheme = Partial<typeof globalTheme>;

export const Themes: Record<ThemeVariant, DefaultTheme> = {
  [ThemeVariant.Global]: globalTheme,
  [ThemeVariant.Default]: defaultTheme,
  [ThemeVariant.VIP]: vipTheme,
};

export * from './types';
export * from './global/types';
