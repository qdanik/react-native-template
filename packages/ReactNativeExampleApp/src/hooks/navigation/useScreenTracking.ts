import { useCallback, useRef } from 'react';

import { navigationContainerRef } from '../../core';

type TrackScreenView = (screenName: string) => void;

export const useScreenTracking = (callback: TrackScreenView) => {
  const routeNameRef = useRef<string | null>(null);

  const getCurrentRouteName = useCallback((): string | null => {
    if (!navigationContainerRef?.isReady?.()) {
      return null;
    }

    const currentRouteName: string | null = navigationContainerRef.getCurrentRoute()?.name ?? null;

    return currentRouteName;
  }, []);

  const onReady = useCallback(() => {
    routeNameRef.current = getCurrentRouteName();
  }, [getCurrentRouteName]);

  const onStateChange = useCallback(() => {
    const previousRouteName = routeNameRef.current ?? null;
    const currentRouteName = getCurrentRouteName();

    const isReady = navigationContainerRef?.isReady?.();
    const isScreenNotChanged = previousRouteName === currentRouteName;
    const isScreenNotReady = !currentRouteName;

    if (!isReady || isScreenNotChanged || isScreenNotReady) {
      return;
    }

    routeNameRef.current = currentRouteName;

    return callback(currentRouteName);
  }, [getCurrentRouteName, callback]);

  return {
    onReady,
    onStateChange,
  };
};
