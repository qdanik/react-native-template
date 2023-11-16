import { SCREENS } from '../constants';
import { Config } from '../constants/config';
import { LinkingConfig } from './linking.types';

export const prefixes = [Config.LINKING_URL_SCHEME];

export const config: LinkingConfig = [
  {
    route: 'details/:id',
    routeName: SCREENS.Details,
    handler: ({ params, navigate }) => {
      navigate(SCREENS.Details, params);
    },
  },
  {
    route: 'home',
    routeName: SCREENS.Home,
  },
];
