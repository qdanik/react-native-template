import { extractFontSettings } from '../utils';
import { colors } from './colors';
import { fontNames, fontSettings } from './fonts';
import { spacing } from './spacing';

export const globalTheme = {
  colors,
  spacing,
  fontNames,
  fontPresets: extractFontSettings(fontSettings),
};
