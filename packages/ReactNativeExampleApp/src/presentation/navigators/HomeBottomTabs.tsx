import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SCREENS } from '../../core';
import { DetailsScreen } from '../screens';
import { HomeNavigator } from './HomeNavigator';

const Tab = createBottomTabNavigator();

export function HomeBottomTabs() {
  return (
    <Tab.Navigator initialRouteName={SCREENS.Dashboard}>
      <Tab.Screen name={SCREENS.Dashboard} component={HomeNavigator} />
      <Tab.Screen name={SCREENS.Details} component={DetailsScreen} />
    </Tab.Navigator>
  );
}
