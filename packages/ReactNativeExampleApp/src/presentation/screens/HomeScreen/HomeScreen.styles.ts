import { StyleSheet } from 'react-native';

import { ThemeStyles } from '../../../presentation/contexts';

export const createHomeStyles = (theme: ThemeStyles) => {
  const colors = theme.getColors();
  const spacing = theme.getSpacing();
  const fontPresets = theme.getFontPresets();

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: colors?.text.black,
      marginVertical: spacing?.x4,
      fontSize: fontPresets?.h1.fontSize,
      lineHeight: fontPresets?.h1.lineHeight,
    },
    hello: {
      color: colors?.text.black,
      fontSize: fontPresets?.h2.fontSize,
      lineHeight: fontPresets?.h2.lineHeight,
    },
  });
};
