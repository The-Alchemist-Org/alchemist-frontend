import { useQuery } from '@tanstack/react-query';
import { getRecipeById } from 'api/Recepies';
import { queryKeys } from 'constants/QueryKeys';

export const useRecipeDetail = (id: number) => useQuery(
  [queryKeys.RECIPES, id],
  () => getRecipeById(id),
  { enabled: !!id },
);
