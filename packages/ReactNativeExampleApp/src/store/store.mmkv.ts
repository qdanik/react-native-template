import { MMKV, MMKVConfiguration } from 'react-native-mmkv';
import { Storage } from 'redux-persist';

export const createMMKVStorage = (config: MMKVConfiguration): Storage => {
  const storage = new MMKV(config);

  return {
    setItem: (key: string, value: string) => Promise.resolve(storage.set(key, value)),
    getItem: (key: string) => Promise.resolve(storage.getString(key)),
    removeItem: (key: string) => Promise.resolve(storage.delete(key)),
  };
};
