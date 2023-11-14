import React, { createContext, Dispatch, SetStateAction } from 'react';
import { DefaultTheme, ThemeVariant } from 'core';
import { noop } from 'lodash';

export type ThemeProps = {
  children: React.ReactNode;
};

export type ThemeContextType = [ThemeVariant, Dispatch<SetStateAction<ThemeVariant>>];

export const ThemeContext = createContext<ThemeContextType>([ThemeVariant.Default, noop]);

export type ThemeStyles = {
  getColors: () => DefaultTheme['colors'];
  getSpacing: () => DefaultTheme['spacing'];
  getFontNames: () => DefaultTheme['fontNames'];
  getFontPresets: () => DefaultTheme['fontPresets'];
};
