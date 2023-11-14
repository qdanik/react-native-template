import { useCallback } from 'react';
import { NativeEventEmitter } from 'react-native';

export const useEventListener = <
  Emmiter extends NativeEventEmitter,
  ListenerParameters extends Parameters<Emmiter['addListener']>,
  Params extends ListenerParameters[0],
  Callback extends ListenerParameters[1],
>(
  emitter: Emmiter,
  event: Params,
  callback: Callback,
  enabled = true,
) => {
  return useCallback(() => {
    if (!enabled) {
      return () => {};
    }
    const listener = emitter.addListener(event, callback);

    return () => {
      if ('remove' in listener) {
        listener.remove();
      }
    };
  }, [callback, emitter, enabled, event]);
};
