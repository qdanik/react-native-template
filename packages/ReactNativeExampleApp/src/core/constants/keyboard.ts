import { KeyboardEventName } from 'react-native';

import { isIOS } from './device';

export const KEYBOARD_EVENTS: Record<'SHOW' | 'HIDE' | 'FRAME_CHANGE', KeyboardEventName> = {
  SHOW: isIOS ? 'keyboardWillShow' : 'keyboardDidShow',
  HIDE: isIOS ? 'keyboardWillHide' : 'keyboardDidHide',
  FRAME_CHANGE: isIOS ? 'keyboardWillChangeFrame' : 'keyboardDidChangeFrame',
};
