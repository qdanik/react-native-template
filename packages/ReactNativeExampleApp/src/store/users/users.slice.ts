import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UsersStateType, UserType } from './users.types';

const usersInitialState: UsersStateType = {
  user: {
    id: '',
    data: null,
    isLoading: false,
    errors: '',
  },
};

export const { actions, reducer } = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    getUserAction: (state: UsersStateType, { payload: id }: PayloadAction<string>) => {
      state.user.isLoading = true;
      state.user.errors = '';
      state.user.id = id;
    },
    getUserSuccessAction: (state: UsersStateType, { payload: user }: PayloadAction<UserType>) => {
      state.user.isLoading = false;
      state.user.data = user;
    },
    getUserErrorAction: (state: UsersStateType, { payload: error }: PayloadAction<string>) => {
      state.user.isLoading = false;
      state.user.errors = error;

      if (!state.user.data) {
        state.user.id = '';
      }
    },
  },
});

export const { getUserAction, getUserSuccessAction, getUserErrorAction } = actions;
export const usersReducer = reducer;
