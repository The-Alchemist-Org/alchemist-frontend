import { useQuery } from '@tanstack/react-query';
import { RecipeListParams, getRecipes } from 'api/Recepies';
import { queryKeys } from 'constants/QueryKeys';

export const useRecipesList = (
  fetchOptions?: RecipeListParams,
) => useQuery(
  [queryKeys.RECIPES, fetchOptions],
  () => getRecipes(fetchOptions || {}),
);
