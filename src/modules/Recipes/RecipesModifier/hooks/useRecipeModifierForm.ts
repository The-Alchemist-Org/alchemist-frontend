import { zodResolver } from '@hookform/resolvers/zod';
import { useToastNotification } from 'hooks';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RecipeBody, createRecipe, updateRecipeById } from 'api/Recepies';
import { queryKeys } from 'constants/QueryKeys';
import { useEffect, useMemo } from 'react';
import { RecipeModifierForm, RecipeModifierFormType } from './utils/recipeModifierForm.validation';
import { useRecipeDetail } from './useRecipeDetail';

interface IUseRecipeModifierFormProps {
  onSuccess?: (message?: string) => void;
  onError?: (message?: string) => void;
}

interface IUseUpdateRecipeFormProps extends IUseRecipeModifierFormProps {
  recipeId: number;
}

export const useRecipeCreateForm = ({
  onSuccess, onError,
}: IUseRecipeModifierFormProps) => {
  const { success, error } = useToastNotification();
  const queryClient = useQueryClient();

  const methods = useForm<RecipeModifierFormType>({
    resolver: zodResolver(RecipeModifierForm),
    mode: 'onSubmit',
  });

  const { isLoading, mutate } = useMutation(
    async (data: RecipeBody) => {
      await createRecipe(data);
    },
    {
      onSuccess: () => {
        success('Successfully created recipe');
        queryClient.invalidateQueries([queryKeys.RECIPES]);
        if (onSuccess) onSuccess();
      },
      onError: () => {
        error('Failed to create recipe');
        if (onError) onError();
      },
    },
  );

  return {
    isLoading,
    isLoadingData: false,
    onSubmit: methods.handleSubmit((data) => mutate(data)),
    methods,
  };
};

export const useRecipeUpdateForm = ({
  onSuccess, onError, recipeId,
}: IUseUpdateRecipeFormProps) => {
  const { success, error } = useToastNotification();
  const queryClient = useQueryClient();

  const { data: recipe, isLoading: isLoadingData } = useRecipeDetail(recipeId);

  const defaultValues = useMemo(() => ({
    ...recipe?.data,
    ingredients: recipe?.data?.ingredients.map((ingredient) => ({
      id: ingredient.ingredientId,
      quantity: ingredient.quantity,
    })),
  }), [recipe]);

  const methods = useForm<RecipeModifierFormType>({
    resolver: zodResolver(RecipeModifierForm),
    defaultValues,
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (recipe?.data) {
      methods.reset(defaultValues);
    }
  }, [recipe]);

  const { isLoading, mutate } = useMutation(
    async (data: RecipeBody) => {
      await updateRecipeById(recipeId, data);
    },
    {
      onSuccess: () => {
        success('Successfully updated recipe');
        queryClient.invalidateQueries([queryKeys.RECIPES]);
        if (onSuccess) onSuccess();
      },
      onError: () => {
        error('Failed to update recipe');
        if (onError) onError();
      },
    },
  );

  return {
    isLoading,
    isLoadingData,
    onSubmit: methods.handleSubmit((data) => mutate(data)),
    methods,
  };
};
