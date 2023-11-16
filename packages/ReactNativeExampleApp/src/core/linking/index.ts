import { LinkingService } from './linking';
import { prefixes } from './linking.constants';

export const linkingService = new LinkingService();

export const linking = {
  prefixes,
  subscribe: () => {
    linkingService.subscribe();

    return () => {
      linkingService.unsubscribe();
    };
  },
};
