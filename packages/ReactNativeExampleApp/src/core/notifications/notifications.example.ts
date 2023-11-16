import notifee from '@notifee/react-native';

import { logger } from '../logger';

export const displayExampleNotification = async () => {
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
    notifee.createChannels([
      {
        id: 'default',
        name: 'Default Channel',
      },
    ]);
    const badgeCount = await notifee.getBadgeCount();

    await notifee.displayNotification({
      title: 'Initial notification',
      body: 'Initial notification body',
      android: {
        channelId: 'default',
        actions: [
          {
            title: 'Action 1',
            pressAction: {
              id: 'action-1',
              launchActivity: 'default',
            },
          },
          {
            title: 'Action 2',
            pressAction: { id: 'action-2', launchActivity: 'default' },
          },
          {
            title: 'Input action',
            pressAction: {
              id: 'input-action',
              launchActivity: 'default',
            },
            input: {
              allowFreeFormInput: false,
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
    await notifee.incrementBadgeCount(1);
  } catch (error) {
    logger.error(error);
  }
};
