import { DefaultFontSettings, DefaultFontSettingsValue } from 'core/theme';
import { mapValues } from 'lodash';

const fontSettingsIterator = ([
  fontSize,
  lineHeight,
  letterSpacing,
  textTransform,
]: DefaultFontSettingsValue) => ({
  fontSize,
  lineHeight,
  letterSpacing,
  textTransform,
});

export const extractFontSettings = (fontSettings: DefaultFontSettings) => {
  return mapValues(fontSettings, fontSettingsIterator);
};
