import { useQuery } from '@tanstack/react-query';
import { IngredientDTO } from 'api/Ingredients';
import { getAllIngredients } from 'api/Ingredients/ingredients';
import { queryKeys } from 'constants/QueryKeys';

export const useIngredientsContext = () => {
  const {
    data: ingredients, isLoading,
  } = useQuery<IngredientDTO[]>(
    [queryKeys.INGREDIENTS],
    async () => {
      const response = await getAllIngredients();
      return response.data;
    },
    {
      retry: false,
      staleTime: Infinity,
      enabled: true,
    },
  );

  return {
    ingredients,
    isLoading,
  };
};
