import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { userPersistConfig } from './store.persist';
import { usersInitialState, usersReducer } from './users';

export type StateType = {
  users: typeof usersInitialState;
};

export const rootReducer = combineReducers({
  users: persistReducer(userPersistConfig, usersReducer),
});
