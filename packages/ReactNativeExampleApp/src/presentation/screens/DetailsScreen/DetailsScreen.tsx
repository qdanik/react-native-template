import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SCREENS, ScreensNavigationProp } from '../../../core';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getUserAction } from '../../../store/users';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function DetailsScreen() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.users.user);
  const navigation = useNavigation<ScreensNavigationProp>();

  const handleGetDetails = () => {
    dispatch(getUserAction('123'));
  };

  const handleGoToSettings = () => {
    navigation.navigate(SCREENS.Settings);
  };

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>Data - {JSON.stringify(user)}</Text>
      <Button title="Get Details" onPress={handleGetDetails} />
      <Button title="Go to Settings" onPress={handleGoToSettings} />
    </View>
  );
}
