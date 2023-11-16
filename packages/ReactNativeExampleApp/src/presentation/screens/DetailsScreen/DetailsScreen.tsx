import React, { useCallback } from 'react';
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
  const navigation = useNavigation<ScreensNavigationProp>();
  const user = useAppSelector(state => state.users.data);
  const userPersistedId = useAppSelector(state => state.users.id);
  const { params: { id } = { id: userPersistedId } } =
    useRoute<RouteProp<ScreensParamList, SCREENS.Details>>();

  const handleGetDetails = useCallback(() => {
    dispatch(getUserAction(id));
  }, [dispatch, id]);

  const handleGoToSettings = useCallback(() => {
    navigation.navigate(SCREENS.Settings);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>currentId - {id}</Text>
      <Text>userPersistedId - {userPersistedId}</Text>
      <Text>Data - {JSON.stringify(user)}</Text>
      <Button title="Get Details" onPress={handleGetDetails} />
      <Button title="Go to Settings" onPress={handleGoToSettings} />
    </View>
  );
}
