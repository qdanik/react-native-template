import { LinkingOptions } from '@react-navigation/native';

import { Config } from '../config';
import { SCREENS, ScreensParamList } from './screens';

export const linking: LinkingOptions<ScreensParamList> = {
  prefixes: [Config.LINKING_APP_SCHEME],
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
