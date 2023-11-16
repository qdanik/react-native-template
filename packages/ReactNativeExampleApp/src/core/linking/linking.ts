import { EmitterSubscription, Linking } from 'react-native';

import { navigationContainerRef } from '../constants';
import { logger } from '../logger';
import { config, prefixes } from './linking.constants';
import { LinkingConfigParams } from './linking.types';

export class LinkingService {
  private listener?: EmitterSubscription;

  private getRegexRoute = (route: string) => {
    return new RegExp(`^${route.replace(/:[^\s/]+/g, '([\\w-]+)')}$`);
  };

  private isDeepLink = (url: string) => {
    return prefixes.some((prefix: string) => url.startsWith(prefix));
  };

  private isRouteMatch = (url: string, route: string) => {
    return this.getRegexRoute(route).test(url);
  };

  private getRouteParams = (url: string, route: string): LinkingConfigParams => {
    const regexRoute = this.getRegexRoute(route);
    const params = url.match(regexRoute);

    console.log({
      url,
      route,
      params,
      regexRoute,
    });

    if (!params) {
      return undefined;
    }

    const paramNames = route.match(/:[^\s/]+/g);

    console.log({
      paramNames,
    });

    if (!paramNames) {
      return undefined;
    }

    return paramNames.reduce((acc, paramName, index) => {
      const name = paramName.replace(':', '');

      return {
        ...acc,
        [name]: params[index + 1],
      };
    }, {}) as LinkingConfigParams;
  };

  private navigate = (routeName: string, params?: LinkingConfigParams) => {
    if (navigationContainerRef.isReady()) {
      logger.info(`[LinkingService] Navigate to routeName using ref: ${routeName}`);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      navigationContainerRef.current?.navigate(routeName, params);

      return;
    }

    logger.warn(`[LinkingService] Unknown settings for routeName: ${routeName}`);
  };

  handleUrl = (url: string) => {
    if (!this.isDeepLink(url)) {
      return;
    }

    const deepLink: string = prefixes.reduce(
      (link: string, prefix: string) => link.replace(prefix, ''),
      url,
    );
    const configItem = config.find(item => this.isRouteMatch(deepLink, item.route));

    if (!configItem) {
      logger.warn(`[LinkingService] Unknown settings for url: ${url}`);

      return;
    }

    const params = this.getRouteParams(deepLink, configItem.route);

    if (configItem.handler) {
      logger.info(`[LinkingService] Navigate to url using handler: ${url}`);
      const options = {
        params,
        navigate: this.navigate,
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      configItem.handler(options);

      return;
    }

    this.navigate(configItem.routeName, params);
  };

  subscribe = () => {
    this.listener = Linking.addEventListener('url', ({ url }) => {
      this.handleUrl(url);
    });

    return this.listener;
  };

  unsubscribe = () => {
    this.listener?.remove();
  };
}
