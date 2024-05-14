import { takeLatest } from 'redux-saga/effects';

import { getUserByIdSaga } from './sagas';
import { getUserAction } from './users.slice';

export function* watchUsersSagas() {
  yield takeLatest(getUserAction.type, getUserByIdSaga);
}
