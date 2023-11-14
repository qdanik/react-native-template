import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SCREENS, ScreensNavigationProp } from '../../../core';
import { useStyles } from '../../../presentation/contexts';
import { createHomeStyles } from './HomeScreen.styles';

export const HomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const styles = useStyles(createHomeStyles);
  const navigation = useNavigation<ScreensNavigationProp>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>{t('hello', { name: 'Username' })}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate(SCREENS.Details, {
            id: '1',
          });
        }}
      />
    </View>
  );
};
