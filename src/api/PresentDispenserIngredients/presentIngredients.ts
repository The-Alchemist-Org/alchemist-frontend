import { client } from '../baseAxios';

export const getPresentIngredients = (body: any) => client.get<any>(`/ingredients/${body}/present`);
