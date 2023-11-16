import { NavigationProp } from '@react-navigation/native';

export enum SCREENS {
  Details = 'Details',
  Home = 'Home',
  Dashboard = 'Dashboard',
  DashboardInfo = 'DashboardInfo',
  Settings = 'Settings',
}

export type ScreenNames = keyof typeof SCREENS;

export interface ScreensParamList {
  [SCREENS.Home]: undefined;
  [SCREENS.Dashboard]: undefined;
  [SCREENS.DashboardInfo]: undefined;
  [SCREENS.Details]: { id: string };
  [SCREENS.Settings]: undefined;
}

export type ScreensNavigationProp = NavigationProp<ScreensParamList>;
