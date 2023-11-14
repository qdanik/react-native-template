import { useCallback } from 'react';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export const useBackButton = (callback: () => void) => {
  const handleFocus = useCallback(() => {
    const onBackPress = () => {
      if (callback) {
        callback();

        return true;
      }

      return false;
    };

    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => subscription.remove();
  }, [callback]);

  useFocusEffect(handleFocus);
};
