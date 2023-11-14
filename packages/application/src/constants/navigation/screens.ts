import { NavigationProp } from '@react-navigation/native';

export enum SCREENS {
  Details = 'Details',
  Home = 'Home',
  Settings = 'Settings',
}

export type ScreenNames = keyof typeof SCREENS;

export type ScreensParamList = {
  [SCREENS.Details]: { id: string };
  [SCREENS.Home]: undefined;
  [SCREENS.Settings]: undefined;
};

export type ScreensNavigationProp = NavigationProp<ScreensParamList>;
