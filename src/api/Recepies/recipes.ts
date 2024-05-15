import { client } from 'api/baseAxios';
import { RecipeDTO, RecipeListParams, RecipeListResponse } from './types';

export const getRecipeById = (id: number) => client.get<RecipeDTO>(`/recipes/${id}`);
export const getRecipes = (fetchOptions: RecipeListParams) => client.get<RecipeListResponse>('/recipes/', { params: fetchOptions });
export const deleteRecipe = (id: number) => client.delete(`/recipes/${id}`);
