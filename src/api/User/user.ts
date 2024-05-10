import { AuthDTO } from 'api/Auth/types';
import { client } from 'api/baseAxios';
import { UserUpdateBody } from './types';

export const putUser = (body: UserUpdateBody, userId: number) => client.put<AuthDTO>(`/users/${userId}`, body);
