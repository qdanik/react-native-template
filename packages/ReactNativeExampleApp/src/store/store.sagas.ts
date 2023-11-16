import { all, fork } from 'redux-saga/effects';

import { watchUsersSagas } from './users';

export function* rootSaga() {
  yield all([fork(watchUsersSagas)]);
}
