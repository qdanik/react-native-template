import React, { useCallback } from 'react';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { linking, logger, navigationContainerRef, SCREENS } from '../../core';
import { useNavigationReady, useScreenTracking } from '../../hooks';
import { AnimatedBootSplash } from '../components';
import { SettingsScreen } from '../screens';
import { HomeBottomTabs } from './HomeBottomTabs';

const AppStack = createNativeStackNavigator();

const AppScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
};

export function AppNavigator() {
  const onNavigationReady = useNavigationReady();
  const { onReady, onStateChange } = useScreenTracking(screenName => {
    logger.info(`Screen changed to ${screenName}`);
  });

  const handleReady = useCallback(() => {
    onNavigationReady();
    onReady();
    BootSplash.hide({ fade: true }).catch(logger.error);
  }, [onNavigationReady, onReady]);

  return (
    <NavigationContainer
      ref={navigationContainerRef}
      linking={linking}
      onReady={handleReady}
      onStateChange={onStateChange}
    >
      <AppStack.Navigator initialRouteName={SCREENS.BottomTabs} screenOptions={AppScreenOptions}>
        <AppStack.Screen name={SCREENS.BottomTabs} component={HomeBottomTabs} />
        <AppStack.Screen name={SCREENS.Settings} component={SettingsScreen} />
      </AppStack.Navigator>
      <AnimatedBootSplash />
    </NavigationContainer>
  );
}
