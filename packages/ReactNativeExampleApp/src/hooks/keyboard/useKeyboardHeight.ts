import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useKeyboard } from '@react-native-community/hooks';

export const useKeyboardHeight = (bottomOffset = 0) => {
  const keyboard = useKeyboard();
  const { bottom } = useSafeAreaInsets();
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    if (!keyboard.keyboardShown) {
      setKeyboardHeight(0);

      return;
    }

    setKeyboardHeight(keyboard.coordinates.end.height - (bottomOffset || bottom));
  }, [bottom, bottomOffset, keyboard.coordinates.end.height, keyboard.keyboardShown]);

  return keyboardHeight;
};
