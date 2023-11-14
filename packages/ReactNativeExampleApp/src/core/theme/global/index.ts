import { extractFontSettings } from '../utils';
import { colors } from './colors';
import { fontNames, fontSettings } from './fonts';
import { icons } from './icons';
import { spacing } from './spacing';

export const globalTheme = {
  icons,
  colors,
  spacing,
  fontNames,
  fontPresets: extractFontSettings(fontSettings),
};
