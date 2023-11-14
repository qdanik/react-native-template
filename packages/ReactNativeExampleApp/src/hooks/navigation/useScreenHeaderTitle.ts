import { useCallback } from 'react';
import { getHeaderTitle } from '@react-navigation/elements';
import {
  getFocusedRouteNameFromRoute,
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type ScreenOptions = {
  route: RouteProp<ParamListBase, string>;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
};

export const useScreenHeaderTitle = (
  screenOptions: NativeStackNavigationOptions,
  fallbackName: string,
) => {
  return useCallback(
    ({ route }: ScreenOptions): NativeStackNavigationOptions => {
      const routeName: string = getFocusedRouteNameFromRoute(route) ?? fallbackName;

      return {
        headerTitle: getHeaderTitle(screenOptions, routeName),
      };
    },
    [screenOptions, fallbackName],
  );
};
