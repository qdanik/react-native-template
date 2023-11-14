import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { SCREENS } from '../../core';
import { HomeScreen } from '../screens';

const HomeStack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName={SCREENS.Home} screenOptions={screenOptions}>
      <HomeStack.Screen name={SCREENS.Home} component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
