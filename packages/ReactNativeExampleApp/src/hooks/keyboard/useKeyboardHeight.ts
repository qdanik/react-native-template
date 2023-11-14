import { useCallback, useLayoutEffect, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { isIOS, KEYBOARD_EVENTS } from '../../core';
import { useEventListener } from '../useEventListener';

export const useKeyboardHeight = (bottomOffset = 0) => {
  const { bottom } = useSafeAreaInsets();
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const onKeyboardShow = useCallback(
    (event: KeyboardEvent) => {
      if (!event) {
        return;
      }
      const value = event.endCoordinates.height - (bottomOffset || bottom);
      setKeyboardHeight(value);
    },
    [bottom, bottomOffset],
  );

  const onKeyboardHide = useCallback(() => {
    setKeyboardHeight(0);
  }, []);

  const handleShow = useEventListener(Keyboard, KEYBOARD_EVENTS.SHOW, onKeyboardShow, !isIOS);
  const handleHide = useEventListener(Keyboard, KEYBOARD_EVENTS.HIDE, onKeyboardHide);
  const handleFrameChange = useEventListener(
    Keyboard,
    KEYBOARD_EVENTS.FRAME_CHANGE,
    onKeyboardShow,
  );

  useLayoutEffect(handleShow, [handleShow]);
  useLayoutEffect(handleHide, [handleHide]);
  useLayoutEffect(handleFrameChange, [handleFrameChange]);

  return keyboardHeight;
};
