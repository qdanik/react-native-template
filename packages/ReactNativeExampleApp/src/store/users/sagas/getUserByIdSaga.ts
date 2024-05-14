import { PayloadAction } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';

import { getUserErrorAction, getUserSuccessAction } from '../users.slice';
import { UserType } from '../users.types';

export function* getUserByIdSaga({ payload: id }: PayloadAction<string>) {
  try {
    // make api call
    const response: { data: UserType } = yield Promise.resolve({
      data: {
        id,
        name: 'John',
        lastName: 'Doe',
        email: '',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    yield put(getUserSuccessAction(response.data));
  } catch (error) {
    yield put(getUserErrorAction(error));
  }
}
