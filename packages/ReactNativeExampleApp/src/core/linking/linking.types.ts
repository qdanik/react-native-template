import { ScreensParamList } from '../constants';

export type LinkingConfigParams = ScreensParamList[keyof ScreensParamList];

export type LinkingConfigHandlerOptions<Params = undefined> = Params extends undefined
  ? {
      navigate: (routeName: string, params?: Params) => void;
    }
  : {
      params: Params;
      navigate: (routeName: string, params: Params) => void;
    };

export type LinkingConfig = Array<LinkingConfigItem>;

export type LinkingConfigItem<RouteName extends keyof ScreensParamList = keyof ScreensParamList> =
  RouteName extends unknown
    ? ScreensParamList[RouteName] extends undefined
      ? {
          route: string;
          routeName: RouteName;
          handler?: (options: LinkingConfigHandlerOptions) => void;
        }
      : {
          route: string;
          routeName: RouteName;
          handler?: (options: LinkingConfigHandlerOptions<ScreensParamList[RouteName]>) => void;
        }
    : never;
