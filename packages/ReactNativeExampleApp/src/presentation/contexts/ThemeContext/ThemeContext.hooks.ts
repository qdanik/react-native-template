import { useCallback, useContext, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { merge } from 'lodash';

import { DefaultTheme, Themes, ThemeVariant } from '../../../core';
import { ThemeContext, ThemeContextType, ThemeStyles } from './ThemeContext.types';

export const useTheme = (): ThemeContextType => {
  const theme = useContext(ThemeContext);

  return theme;
};

const globalTheme = Themes[ThemeVariant.Global];

export const useThemeVariant = (): ThemeStyles => {
  const [theme] = useTheme();
  const currentTheme = useMemo<DefaultTheme>(() => Themes[theme], [theme]);

  const getColors = useCallback(
    () => merge(globalTheme?.colors, currentTheme?.colors),
    [currentTheme.colors],
  );

  const getSpacing = useCallback(
    () => merge(globalTheme?.spacing, currentTheme?.spacing),
    [currentTheme?.spacing],
  );

  const getFontNames = useCallback(
    () => merge(globalTheme?.fontNames, currentTheme?.fontNames),
    [currentTheme?.fontNames],
  );

  const getFontPresets = useCallback(
    () => merge(globalTheme?.fontPresets, currentTheme?.fontPresets),
    [currentTheme?.fontPresets],
  );

  const getIcons = useCallback(
    () => merge(globalTheme?.icons, currentTheme?.icons),
    [currentTheme?.icons],
  );

  return useMemo(
    () => ({
      getIcons,
      getColors,
      getSpacing,
      getFontNames,
      getFontPresets,
    }),
    [getIcons, getColors, getSpacing, getFontNames, getFontPresets],
  );
};

export const useStyles = <Args extends unknown[]>(
  callback: (theme: ThemeStyles, ...args: Args[]) => ReturnType<typeof StyleSheet.create>,
  ...args: Args[]
) => {
  const theme = useThemeVariant();

  return useMemo(() => callback(theme, ...args), [theme, callback, args]);
};
