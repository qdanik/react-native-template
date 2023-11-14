import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from '../../core';
import { HomeScreen } from '../screens';

const HomeStack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName={SCREENS.Home}>
      <HomeStack.Screen name={SCREENS.Home} component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
