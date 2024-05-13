import { client } from 'api/baseAxios';
import { IngredientDTO } from './types';

export const getAllIngredients = () => client.get<IngredientDTO[]>('/ingredients/');
