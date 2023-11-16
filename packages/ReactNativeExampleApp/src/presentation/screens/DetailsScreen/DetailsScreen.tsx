import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { SCREENS, ScreensNavigationProp, ScreensParamList } from '../../../core';
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
  const userPersistedId = useAppSelector(state => state.users.id);
  const user = useAppSelector(state => state.users.data);
  const navigation = useNavigation<ScreensNavigationProp>();
  const {
    params: { id },
  } = useRoute<RouteProp<ScreensParamList, SCREENS.Details>>();

  const handleGetDetails = () => {
    dispatch(getUserAction(id ?? '1'));
  };

  const handleGoToSettings = () => {
    navigation.navigate(SCREENS.Settings);
  };

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>userPersistedId - {JSON.stringify(userPersistedId)}</Text>
      <Text>Data - {JSON.stringify(user)}</Text>
      <Button title="Get Details" onPress={handleGetDetails} />
      <Button title="Go to Settings" onPress={handleGoToSettings} />
    </View>
  );
}
