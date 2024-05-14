import notifee, { AuthorizationStatus, Event, EventType } from '@notifee/react-native';
import { isEqual } from 'lodash';

import { logger } from '../logger';

export const requestPermission = async (): Promise<{
  isEnable: boolean;
  isProvisional: boolean;
  isDenied: boolean;
}> => {
  const settings = await notifee.requestPermission();
  const isEnable = isEqual(settings.authorizationStatus, AuthorizationStatus.AUTHORIZED);
  const isProvisional = isEqual(settings.authorizationStatus, AuthorizationStatus.PROVISIONAL);
  const isDenied = isEqual(settings.authorizationStatus, AuthorizationStatus.DENIED);

  logger.info(`Notification status: ${settings.authorizationStatus}`);

  return {
    isEnable,
    isProvisional,
    isDenied,
  };
};

export const handleForegroundEvent = ({ type, detail }: Event) => {
  switch (type) {
    case EventType.DISMISSED:
      logger.info(`[Fore] User dismissed notification: ${JSON.stringify(detail.notification)}`);
      break;
    case EventType.PRESS:
    case EventType.ACTION_PRESS:
      logger.info(
        `[Fore] User pressed notification(${detail.pressAction?.id}): ${JSON.stringify(
          detail.notification,
        )} | ${JSON.stringify(detail.input)}`,
      );
      break;
    default:
      logger.info(`[Fore] Unknown event type: ${type}`);
      break;
  }
  notifee.decrementBadgeCount(1);
};

export const handleBackgroundEvent = async ({ type, detail }: Event): Promise<void> => {
  handleForegroundEvent({ type, detail });

  return Promise.resolve();
};

export const initializeNotifications = async () => {
  const { isEnable } = await requestPermission();

  if (!isEnable) {
    logger.info('Notifications disabled');

    return;
  }

  const unsubscribeForeground = notifee.onForegroundEvent(handleForegroundEvent);
  notifee.onBackgroundEvent(handleBackgroundEvent);
  logger.info('Notifications initialized');

  return () => {
    logger.info('Notifications destroyed');
    unsubscribeForeground();
  };
};
