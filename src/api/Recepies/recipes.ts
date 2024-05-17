import { client } from 'api/baseAxios';
import {
  RecipeBody, RecipeDTO, RecipeListParams, RecipeListResponse,
} from './types';

export const getRecipeById = (id: number) => client.get<RecipeDTO>(`/recipes/${id}`);
export const getRecipes = (fetchOptions: RecipeListParams) => client.get<RecipeListResponse>('/recipes/', { params: fetchOptions });
export const deleteRecipe = (id: number) => client.delete(`/recipes/${id}`);
export const createRecipe = (data: RecipeBody) => client.post<RecipeDTO>('/recipes/', data);
export const updateRecipeById = (id: number, data: RecipeBody) => client.put<RecipeDTO>(`/recipes/${id}`, data);
