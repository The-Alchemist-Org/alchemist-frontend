import { IngredientDTO } from 'api/Ingredients';

export type DrinkConfigBody = {
  amountLeft: number;
  ingredientId: number;
}[];

export type DrinkConfigDTO = {
  id: number;
  amountLeft: number;
  ingredient: IngredientDTO;
}[];
