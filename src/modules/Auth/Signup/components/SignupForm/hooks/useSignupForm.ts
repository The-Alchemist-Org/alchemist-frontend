import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context';
import { useForm } from 'react-hook-form';
import { useToastNotification } from 'hooks';
import { AuthDTO, SignUpBody } from 'api/Auth/types';
import { postSignUp } from 'api/Auth';
import { AxiosError } from 'axios';
import { SignupFormType, SignupValidation } from './signupForm.validation';

export const useSignupForm = () => {
  const navigate = useNavigate();
  const { setToken } = useAuthContext();
  const { error } = useToastNotification();

  const methods = useForm<SignupFormType>({
    mode: 'onSubmit',
    resolver: zodResolver(SignupValidation),
    shouldFocusError: true,
  });

  const { isLoading, mutate } = useMutation(
    async (data: SignUpBody) => {
      const { data: response } = await postSignUp(data);
      return response;
    },
    {
      onSuccess: (data: AuthDTO) => {
        setToken(data.token || '');
        navigate('/home');
      },
      onError: (e: AxiosError) => {
        if (e.response?.status === 409) {
          error('Account with this email already exists');
        } else {
          error('Failed to create account');
        }
      },
    },
  );

  return {
    isLoading,
    onSubmit: methods.handleSubmit((data) => mutate(data)),
    methods,
  };
};
