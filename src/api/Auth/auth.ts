import { client } from '../baseAxios';
import {
  LoginBody,
  SignUpBody,
  AuthDTO,
} from './types';

export const postSignUp = (body: SignUpBody) => client.post<AuthDTO>('/auth/signup/', body);
export const postLogin = (body: LoginBody) => client.post<AuthDTO>('/auth/login/', body);
export const getMe = () => client.get<AuthDTO>('/auth/me/');
