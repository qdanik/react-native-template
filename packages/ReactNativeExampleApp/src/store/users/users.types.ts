// TODO: will be removed
export type UserType = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type IUserState = {
  id: string;
  data: UserType | null;
  isLoading: boolean;
  errors: string;
};

export type UsersStateType = {
  user: IUserState;
};
