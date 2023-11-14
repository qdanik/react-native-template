import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SCREENS, ScreensNavigationProp } from '../../../core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function HomeScreen() {
  const { t } = useTranslation();
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
}
