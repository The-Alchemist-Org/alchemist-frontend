import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DrinkConfigBody, putDrinkConfig } from 'api/DrinkConfig';
import { useToastNotification } from 'hooks';
import { useDrinkConfigDetail } from 'hooks/useDrinkConfigDetail';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo } from 'react';
import { queryKeys } from 'constants/QueryKeys';
import { DrinkConfigModifierForm, DrinkConfigModifierFormType } from './drinkConfigModifierForm.validation';

export const useDrinkConfigModifierForm = () => {
  const { success, error } = useToastNotification();
  const queryClient = useQueryClient();

  const { data: drinkConfig, isLoading: isLoadingData } = useDrinkConfigDetail();

  const defaultValues = useMemo(() => drinkConfig?.data.map((item) => ({
    amountLeft: item.amountLeft,
    ingredientId: item.ingredient.id,
  })), [drinkConfig]);

  const methods = useForm<DrinkConfigModifierFormType>({
    mode: 'onSubmit',
    defaultValues: {
      config: defaultValues,
    },
    resolver: zodResolver(DrinkConfigModifierForm),
  });

  useEffect(() => {
    if (drinkConfig?.data) {
      methods.reset({
        config: defaultValues,
      });
    }
  }, [drinkConfig]);

  const { isLoading, mutate } = useMutation(
    async (data: DrinkConfigBody) => {
      await putDrinkConfig(data);
      queryClient.invalidateQueries([queryKeys.MIXER]);
    },
    {
      onSuccess: () => {
        success('Successfully updated mixer configuration');
      },
      onError: () => {
        error('Failed to update mixer configuration');
      },
    },
  );

  return {
    isLoadingData,
    isLoading,
    // @ts-ignore
    onSubmit: methods.handleSubmit((data) => mutate(data.config)),
    methods,
  };
};
