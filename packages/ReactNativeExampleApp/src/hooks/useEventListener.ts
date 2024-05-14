import { useCallback } from 'react';
import { NativeEventEmitter } from 'react-native';

export const useEventListener = <
  Emitter extends NativeEventEmitter,
  ListenerParameters extends Parameters<Emitter['addListener']>,
  Params extends ListenerParameters[0],
  Callback extends ListenerParameters[1],
>(
  emitter: Emitter,
  event: Params,
  callback: Callback,
  enabled = true,
) =>
  useCallback(() => {
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
