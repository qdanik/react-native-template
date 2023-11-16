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
    <HomeStack.Navigator initialRouteName={SCREENS.DashboardInfo} screenOptions={screenOptions}>
      <HomeStack.Screen name={SCREENS.DashboardInfo} component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
