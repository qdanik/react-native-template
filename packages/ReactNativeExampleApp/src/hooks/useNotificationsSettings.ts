import { useCallback, useEffect, useState } from 'react';
import NotificationSetting from 'react-native-open-notification';
import { checkNotifications, NotificationsResponse, RESULTS } from 'react-native-permissions';
import { useAppState } from '@react-native-community/hooks';

export const useNotificationSettings = () => {
  const appState = useAppState();
  const [isGranted, setIsGranted] = useState(false);

  const checkNotificationStatus = useCallback(async () => {
    if (appState === 'active') {
      checkNotificationStatus();
    }

    const result: NotificationsResponse = await checkNotifications();
    setIsGranted(result.status === RESULTS.GRANTED);
  }, [appState]);

  useEffect(() => {
    checkNotificationStatus();
  }, [checkNotificationStatus]);

  return [isGranted, { onOpenSettings: NotificationSetting.open }];
};
