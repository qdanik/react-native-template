import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, Tuple } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './store.reducers';
import { rootSaga } from './store.sagas';

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(sagaMiddleware),
});
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
