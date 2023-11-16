import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { displayInitialNotification, SCREENS, ScreensNavigationProp } from '../../../core';
import { Config } from '../../../core/constants/config';
import { useStyles } from '../../../presentation/contexts';
import { createHomeStyles } from './HomeScreen.styles';

export const HomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const styles = useStyles(createHomeStyles);
  const navigation = useNavigation<ScreensNavigationProp>();

  const handleGoToDetails = useCallback(() => {
    navigation.navigate(SCREENS.Details, {
      id: '1',
    });
  }, [navigation]);

  const handleDisplayNotification = useCallback(() => {
    displayInitialNotification();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>{JSON.stringify(Config)}</Text>
      <Text>{t('hello', { name: 'Username' })}</Text>
      <Button title="Go to Details" onPress={handleGoToDetails} />
      <Button title="Display Notification" onPress={handleDisplayNotification} />
    </View>
  );
};
