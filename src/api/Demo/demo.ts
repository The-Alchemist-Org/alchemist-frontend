import { client } from '../baseAxios';

export const postQueue = (body: any) => client.post<any>('/queue/add', body);
