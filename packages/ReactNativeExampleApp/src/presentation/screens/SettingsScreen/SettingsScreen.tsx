import React, { useCallback } from 'react';
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

export function SettingsScreen() {
  const navigation = useNavigation<ScreensNavigationProp>();

  const handleGoHome = useCallback(() => {
    navigation.navigate(SCREENS.DashboardInfo);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title="Go to Home" onPress={handleGoHome} />
    </View>
  );
}
