export type UserType = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type UsersStateType = {
  id: string;
  data: UserType | null;
  isLoading: boolean;
  errors: string;
};
