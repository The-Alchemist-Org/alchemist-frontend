import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context';
import { useForm } from 'react-hook-form';
import { useToastNotification } from 'hooks';
import { AuthDTO, LoginBody } from 'api/Auth/types';
import { postLogin } from 'api/Auth';
import { LoginFormType, LoginValidation } from './loginForm.validation';

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { setToken } = useAuthContext();
  const { error } = useToastNotification();

  const methods = useForm<LoginFormType>({
    mode: 'onSubmit',
    resolver: zodResolver(LoginValidation),
    shouldFocusError: true,
  });

  const { isLoading, mutate } = useMutation(
    async (data: LoginBody) => {
      const { data: response } = await postLogin(data);
      return response;
    },
    {
      onSuccess: (data: AuthDTO) => {
        setToken(data.token || '');
        navigate('/home');
      },
      onError: () => {
        error('Failed to login');
      },
    },
  );

  return {
    isLoading,
    onSubmit: methods.handleSubmit((data) => mutate(data)),
    methods,
  };
};
