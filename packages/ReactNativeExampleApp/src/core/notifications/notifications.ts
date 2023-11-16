import notifee, { AuthorizationStatus, EventType } from '@notifee/react-native';

import { logger } from '../logger';

export const requestPermission = async (): Promise<{
  isEnable: boolean;
  isProvisional: boolean;
  isDenied: boolean;
}> => {
  const settings = await notifee.requestPermission();
  const isEnable = settings.authorizationStatus === AuthorizationStatus.AUTHORIZED;
  const isProvisional = settings.authorizationStatus === AuthorizationStatus.PROVISIONAL;
  const isDenied = settings.authorizationStatus === AuthorizationStatus.DENIED;

  logger.info(`Notification status: ${settings.authorizationStatus}`);

  return {
    isEnable,
    isProvisional,
    isDenied,
  };
};

export const displayInitialNotification = async () => {
  try {
    await notifee.setNotificationCategories([
      {
        id: 'test-ios-actions',
        actions: [
          {
            id: 'action-1',
            title: 'Action 1',
          },
          {
            id: 'action-2',
            title: 'Action 2',
          },
          {
            id: 'foreground-action',
            title: 'Foreground action',
            foreground: true,
          },
          {
            id: 'negative-action',
            title: 'Negative action',
            destructive: true,
          },
          {
            id: 'input-action',
            title: 'Input action',
            input: {
              placeholderText: 'Send a message...',
              buttonText: 'Send Now',
            },
          },
        ],
      },
    ]);
    const badgeCount = await notifee.getBadgeCount();

    return await notifee.displayNotification({
      title: 'Initial notification',
      body: 'Initial notification body',
      android: {
        channelId: 'default',
        actions: [
          {
            title: 'Action 1',
            pressAction: { id: 'action-1' },
          },
          {
            title: 'Action 2',
            pressAction: { id: 'action-2' },
          },
          {
            title: 'Input action',
            icon: 'https://my-cdn.com/icons/reply.png',
            pressAction: {
              id: 'input-action',
            },
            input: {
              allowFreeFormInput: true,
              choices: ['Yes', 'No', 'Maybe'],
              placeholder: 'Send a message...',
            },
          },
        ],
      },
      ios: {
        categoryId: 'test-ios-actions',
        badgeCount: badgeCount + 1,
      },
    });
  } catch (error) {
    logger.error(error);
  }
};

export const initializeNotifications = async () => {
  const { isEnable } = await requestPermission();

  if (!isEnable) {
    return;
  }

  notifee.onForegroundEvent(({ type, detail }) => {
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
  });

  notifee.onBackgroundEvent(async ({ type, detail }) => {
    switch (type) {
      case EventType.DISMISSED:
        logger.info(`[Back] User dismissed notification: ${JSON.stringify(detail.notification)}`);
        break;
      case EventType.PRESS:
      case EventType.ACTION_PRESS:
        logger.info(
          `[Back] User pressed notification(${detail.pressAction?.id}): ${JSON.stringify(
            detail.notification,
          )} | ${JSON.stringify(detail.input)}`,
        );
        break;
      default:
        logger.info(`[Back] Unknown event type: ${type}`);
        break;
    }

    return Promise.resolve();
  });
};
