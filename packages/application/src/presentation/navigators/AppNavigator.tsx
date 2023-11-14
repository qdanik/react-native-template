import * as React from 'react';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { linking, navigationContainerRef, SCREENS } from '../../constants';
import { logger } from '../../core';
import { useNavigationReady, useScreenTracking } from '../../hooks';
import { SettingsScreen } from '../screens';
import { HomeBottomTabs } from './HomeBottomTabs';

const AppStack = createNativeStackNavigator();

const AppScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
};

export function AppNavigator() {
  const onNavigationReady = useNavigationReady();
  const { onReady, onStateChange } = useScreenTracking(logger.info);

  const handleReady = useCallback(() => {
    onNavigationReady();
    onReady();
  }, [onNavigationReady, onReady]);

  return (
    <NavigationContainer
      ref={navigationContainerRef}
      linking={linking}
      onReady={handleReady}
      onStateChange={onStateChange}
    >
      <AppStack.Navigator initialRouteName={SCREENS.Home} screenOptions={AppScreenOptions}>
        <AppStack.Screen name={SCREENS.Home} component={HomeBottomTabs} />
        <AppStack.Screen name={SCREENS.Settings} component={SettingsScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
