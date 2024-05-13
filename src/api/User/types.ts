export type UserUpdateBody = {
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  confirmedPassword?: string;
};
