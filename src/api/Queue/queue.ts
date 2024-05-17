import { client } from '../baseAxios';
import { AddToQueueBody } from './types';

export const postQueue = (body: AddToQueueBody) => client.post<any>('/queue/add', body);
