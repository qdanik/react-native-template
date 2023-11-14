import { LinkingOptions } from '@react-navigation/native';

import { SCREENS, ScreensParamList } from './screens';

export const linking: LinkingOptions<ScreensParamList> = {
  prefixes: ['myapp://', 'https://myapp.com', 'https://*.myapp.com'],
  config: {
    initialRouteName: SCREENS.Home as const,
    screens: {
      Home: {
        path: SCREENS.Home,
        screens: {
          Details: `${SCREENS.Details}/:id`,
        },
      },
      Settings: SCREENS.Settings,
    },
  },
};
