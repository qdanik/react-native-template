import { createMMKVStorage } from './store.mmkv';

export const userPersistConfig = {
  key: 'user',
  storage: createMMKVStorage({
    id: 'user',
  }),
  whitelist: ['id'],
};
