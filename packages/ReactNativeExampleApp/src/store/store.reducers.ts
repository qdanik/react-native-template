import { usersReducer, UsersStateType } from './users';

export type StateType = {
  users: UsersStateType;
};

export const rootReducers = {
  users: usersReducer,
};
