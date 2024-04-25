import { Link } from 'react-router-dom';
import {
  Button, FormFieldText,
} from 'components';
import { useLoginForm } from './hooks';

export const LoginForm = () => {
  const { isLoading, onSubmit, methods } = useLoginForm();
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-cool-gray-900 mb-9 text-2xl font-semibold">Log in to your account</h1>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <FormFieldText
            label="Email"
            type="email"
            placeholder="Enter email"
            error={methods.formState.errors?.email?.message}
            {...methods.register('email')}
          />
          <FormFieldText
            label="Password"
            type="password"
            placeholder="Enter Password"
            error={methods.formState.errors?.password?.message}
            {...methods.register('password')}
          />
          <div className="flex justify-between items-center">
            <Link to="/auth/forgot-password" className="text-sm text-primary font-semibold ">Forgot Password?</Link>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full my-6"
          disabled={isLoading}
        >
          Login
        </Button>
      </form>
      <p className="text-cool-gray-700 text-xs text-center mt-4">
        Don&apos;t have an account? &nbsp;
        <Link to="/auth/signup" className="text-primary font-semibold">Sign up</Link>
      </p>
    </div>
  );
};
