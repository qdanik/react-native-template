import { useCallback } from 'react';

import { navigationContainerQueue } from '../../constants';

export const useNavigationReady = () => {
  const handleReady = useCallback(() => {
    navigationContainerQueue.forEach(callback => {
      callback();
    });
    navigationContainerQueue.clear();
  }, []);

  return handleReady;
};
