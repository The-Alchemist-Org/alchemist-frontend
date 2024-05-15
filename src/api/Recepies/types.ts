import { IngredientDTO } from 'api/Ingredients';

export interface IRecipeToIngredient {
  id: number;
  recipeId: number;
  ingredient: IngredientDTO;
  ingredientId: number;
  quantity: number;
}

export type RecipeDTO = {
  id: number,
  name: string,
  uploadedBy: number,
  ingredients: IRecipeToIngredient[]
};

export type RecipeListParams = {
  page?: number;
  limit?: number;
  search?: string;
  filter?: number[];
};

export type RecipeListResponse = {
  results: RecipeDTO[];
  page: number;
  pageSize: number;
  totalPages: number;
};
