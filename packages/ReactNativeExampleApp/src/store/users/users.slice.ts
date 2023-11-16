import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UsersStateType, UserType } from './users.types';

export const usersInitialState: UsersStateType = {
  id: '',
  data: null,
  isLoading: false,
  errors: '',
};

const { actions, reducer } = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    getUserAction: (state: UsersStateType, { payload: id }: PayloadAction<string>) => {
      state.isLoading = true;
      state.errors = '';
      state.id = id;
    },
    getUserSuccessAction: (state: UsersStateType, { payload: user }: PayloadAction<UserType>) => {
      state.isLoading = false;
      state.data = user;
    },
    getUserErrorAction: (state: UsersStateType, { payload: error }: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = error;

      if (!state.data) {
        state.id = '';
      }
    },
  },
});

export const { getUserAction, getUserSuccessAction, getUserErrorAction } = actions;
export const usersReducer = reducer;
