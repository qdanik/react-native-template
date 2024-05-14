import { useEffect } from 'react';

import { initializeNotifications, logger } from '../../core';

export const useNotificationsService = () => {
  useEffect(() => {
    let unsubscribe: (() => void) | undefined;
    initializeNotifications()
      .then(value => {
        unsubscribe = value;
      })
      .catch(error => {
        logger.error(error);
      });

    return () => {
      unsubscribe?.();
    };
  }, []);
};
