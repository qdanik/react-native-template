import { colors } from './global.colors';
import { spacing } from './global.spacing';
import { icons } from './icons';

export type DefaultIcons = typeof icons;

export type DefaultColors = typeof colors;

export type DefaultSpacing = typeof spacing;

export type DefaultFontNames = Record<
  'PRIMARY_REGULAR' | 'PRIMARY_ITALIC' | 'PRIMARY_SEMIBOLD' | 'PRIMARY_BOLD' | 'PRIMARY_EXTRABOLD',
  string
>;

export type DefaultFontSettings = Record<
  'h1' | 'h2' | 'h3' | 'h4' | 'h5',
  DefaultFontSettingsValue
>;

export type DefaultFontSettingsValue = [number, number, number?, string?];
