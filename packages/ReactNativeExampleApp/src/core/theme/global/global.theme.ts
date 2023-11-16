import { extractFontSettings } from '../utils';
import { colors } from './global.colors';
import { fontNames, fontSettings } from './global.fonts';
import { spacing } from './global.spacing';
import { icons } from './icons';

export const globalTheme = {
  icons,
  colors,
  spacing,
  fontNames,
  fontPresets: extractFontSettings(fontSettings),
};
