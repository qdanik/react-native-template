import React, { memo, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, LayoutChangeEvent, StyleSheet, View } from 'react-native';

import { isIOS, KEYBOARD_EVENTS } from '../../constants';
import { composeTestID } from '../../core';
import { useEventListener } from '../../hooks';

type Props = {
  testID?: string;
  children: ReactNode;
};

type KeyboardWrapperStyle = {
  flex?: 1;
  height?: number;
};

const KeyboardWrapperComponent = ({ children, testID }: Props) => {
  const isKeyboardOpened = useRef(false);
  const [style, setStyle] = useState<KeyboardWrapperStyle>({
    flex: 1,
  });
  const onKeyboardShow = () => {
    isKeyboardOpened.current = true;
  };
  const onKeyboardHide = () => {
    isKeyboardOpened.current = false;
  };

  const handleViewLayout = useCallback(({ nativeEvent }: LayoutChangeEvent) => {
    if (!isIOS || isKeyboardOpened.current) {
      return;
    }

    setStyle({
      height: nativeEvent.layout.height,
    });
  }, []);

  const onShow = useEventListener(Keyboard, KEYBOARD_EVENTS.SHOW, onKeyboardShow, !isIOS);
  const onHide = useEventListener(Keyboard, KEYBOARD_EVENTS.HIDE, onKeyboardHide, !isIOS);

  useEffect(onShow, [onShow]);
  useEffect(onHide, [onHide]);

  return (
    <>
      <View testID={testID} style={StyleSheet.absoluteFillObject} onLayout={handleViewLayout} />
      <View testID={composeTestID(testID, 'wrapper')} style={style}>
        {children}
      </View>
    </>
  );
};

export const KeyboardWrapper = memo<Props>(KeyboardWrapperComponent);
