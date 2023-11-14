import { useCallback } from 'react';
import { StackActions } from '@react-navigation/native';

import {
  navigationContainerQueue,
  navigationContainerRef,
  ScreensParamList,
} from '../../constants';

type Navigate = <RouteName extends keyof ScreensParamList>(
  ...args: RouteName extends unknown
    ? undefined extends ScreensParamList[RouteName]
      ? [screen: RouteName] | [screen: RouteName, params: ScreensParamList[RouteName]]
      : [screen: RouteName, params: ScreensParamList[RouteName]]
    : never
) => void;

type Push = <RouteName extends keyof ScreensParamList>(
  name: RouteName,
  params?: ScreensParamList[RouteName],
) => void;

export const useNavigate = () => {
  const navigate = useCallback<Navigate>((...args) => {
    if (!navigationContainerRef.isReady()) {
      navigationContainerQueue.add(() => {
        navigationContainerRef.navigate(...args);
      });

      return;
    }
    navigationContainerRef.navigate(...args);
  }, []);

  const push = useCallback<Push>((name, params) => {
    if (!navigationContainerRef.isReady()) {
      navigationContainerQueue.add(() => {
        navigationContainerRef.dispatch(StackActions.push(name, params));
      });

      return;
    }
    navigationContainerRef.dispatch(StackActions.push(name, params));
  }, []);

  return {
    navigate,
    push,
  };
};
