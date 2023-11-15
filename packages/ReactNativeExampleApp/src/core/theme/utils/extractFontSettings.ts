import { mapValues } from 'lodash';

import { DefaultFontSettings, DefaultFontSettingsValue } from '../global/global.types';

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

export const extractFontSettings = (fontSettings: DefaultFontSettings) =>
  mapValues(fontSettings, fontSettingsIterator);
