import { Link } from 'react-router-dom';
import {
  Button, FormFieldText,
} from 'components';
import { useSignupForm } from './hooks';

export const SignupForm = () => {
  const { isLoading, onSubmit, methods } = useSignupForm();
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-cool-gray-900 mb-9 text-2xl font-semibold">Create a new account</h1>
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
            label="First name"
            placeholder="Enter first name"
            error={methods.formState.errors?.firstName?.message}
            {...methods.register('firstName')}
          />
          <FormFieldText
            label="Last name"
            placeholder="Enter last name"
            error={methods.formState.errors?.lastName?.message}
            {...methods.register('lastName')}
          />
          <FormFieldText
            label="Password"
            type="password"
            placeholder="Enter password"
            error={methods.formState.errors?.password?.message}
            {...methods.register('password')}
          />
          <FormFieldText
            label="Confirm password"
            type="password"
            placeholder="Enter password again"
            error={methods.formState.errors?.confirmedPassword?.message}
            {...methods.register('confirmedPassword')}
          />
        </div>
        <Button
          type="submit"
          className="w-full my-6"
          disabled={isLoading}
        >
          Create account
        </Button>
      </form>
      <p className="text-cool-gray-700 text-xs text-center mt-4">
        Already have an account? &nbsp;
        <Link to="/auth/login" className="text-primary font-semibold">Login</Link>
      </p>
    </div>
  );
};
