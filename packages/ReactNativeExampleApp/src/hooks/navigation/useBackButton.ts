import { useBackHandler } from '@react-native-community/hooks';

export const useBackButton = (callback: () => boolean) => {
  useBackHandler(() => {
    if (callback) {
      return callback();
    }

    return false;
  });
};
