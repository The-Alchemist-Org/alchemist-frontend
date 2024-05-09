import { useMutation } from '@tanstack/react-query';
import { DrinkConfigBody, putDrinkConfig } from 'api/DrinkConfig';
import { useToastNotification } from 'hooks';
import { useDrinkConfigDetail } from 'hooks/useDrinkConfigDetail';
import { useForm } from 'react-hook-form';

export const useDrinkConfigModifierForm = () => {
  const { success, error } = useToastNotification();

  const { data: drinkConfig, isLoading: isLoadingData } = useDrinkConfigDetail();

  const defaultValues = drinkConfig?.data.map((item) => ({
    id: item.id,
    amountLeft: item.amountLeft,
    ingredient: item.ingredient,
  }));

  const methods = useForm<any>({
    mode: 'onSubmit',
    defaultValues: {
      config: defaultValues,
    },
  });

  const { isLoading, mutate } = useMutation(
    async (data: DrinkConfigBody) => {
      await putDrinkConfig(data);
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
    onSubmit: methods.handleSubmit((data) => mutate(data)),
    methods,
  };
};
