export type SignUpBody = {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
};

export type LoginBody = {
  email: string;
  password: string;
};

export type AuthDTO = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  token?: string;
  createdAt: Date;
  updatedAt: Date;
};
