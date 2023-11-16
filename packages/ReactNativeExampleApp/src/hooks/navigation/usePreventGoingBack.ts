import { useCallback, useEffect } from 'react';
import {
  EventListenerCallback,
  EventMapCore,
  NavigationState,
  useNavigation,
} from '@react-navigation/native';

type BeforeRemoveEventListener = EventListenerCallback<
  EventMapCore<NavigationState>,
  'beforeRemove'
>;

export const usePreventingGoingBack = (
  callback: (onProceed: () => void) => void,
  hasUnsavedChanges: boolean,
) => {
  const navigation = useNavigation();

  const handleBeforeRemove = useCallback<BeforeRemoveEventListener>(
    event => {
      if (!hasUnsavedChanges) {
        return;
      }
      event.preventDefault();

      const onProceed = () => {
        navigation.dispatch(event.data.action);
      };

      callback(onProceed);
    },
    [navigation, hasUnsavedChanges, callback],
  );

  const onBeforeRemove = useCallback(() => {
    const unsubscribe = navigation.addListener('beforeRemove', handleBeforeRemove);

    return () => {
      unsubscribe();
    };
  }, [navigation, handleBeforeRemove]);

  useEffect(onBeforeRemove, [onBeforeRemove]);
};
