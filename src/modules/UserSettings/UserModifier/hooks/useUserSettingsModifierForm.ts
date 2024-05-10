import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from 'context';
import { useForm } from 'react-hook-form';
import { useToastNotification } from 'hooks';
import { AuthDTO } from 'api/Auth/types';
import { AxiosError } from 'axios';
import { UserUpdateBody, putUser } from 'api/User';
import { queryKeys } from 'constants/QueryKeys';
import { useEffect } from 'react';
import { UpdateUserFormType, UpdateUserValidation } from './updateUserForm.validation';

export const useUserSettingsModifierForm = () => {
  const { setToken, user, loadingUser } = useAuthContext();
  const { error, success } = useToastNotification();
  const queryClient = useQueryClient();

  const methods = useForm<UpdateUserFormType>({
    mode: 'onSubmit',
    resolver: zodResolver(UpdateUserValidation),
  });

  useEffect(() => {
    if (user) {
      methods.reset({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      });
    }
  }, [user]);

  const { isLoading, mutate } = useMutation(
    async (data: UserUpdateBody) => {
      const payload = data;
      if (data.password === '' || data.password === undefined) {
        delete payload.password;
      }
      const { data: response } = await putUser(payload, user?.id || 0);
      return response;
    },
    {
      onSuccess: (data: AuthDTO) => {
        setToken(data.token || '');
        queryClient.invalidateQueries([queryKeys.VERIFY_TOKEN]);
        success('Updated account successfully');
      },
      onError: (_e: AxiosError) => {
        error('Failed to update account');
      },
    },
  );

  return {
    isLoading,
    onSubmit: methods.handleSubmit((data) => mutate(data)),
    isLoadingData: loadingUser,
    methods,
  };
};
