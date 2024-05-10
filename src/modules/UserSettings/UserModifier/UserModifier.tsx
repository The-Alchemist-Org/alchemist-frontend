import { Button, FormFieldText, Loading } from 'components';
import { useUserSettingsModifierForm } from './hooks';

export const UserModifier = () => {
  const {
    methods, isLoadingData, isLoading, onSubmit,
  } = useUserSettingsModifierForm();

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-900 text-2xl leading-5xl">User settings</h1>
          <p className="text-cool-gray-700 text-sm leading-lg">
            Manage your account settings
          </p>
        </div>
      </div>
      {isLoadingData ? (
        <Loading />
      ) : (
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="flex flex-col gap-4">
              <FormFieldText
                label="Email"
                type="email"
                placeholder="Enter email"
                error={methods.formState.errors?.email?.message}
                {...methods.register('email')}
                disabled
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
            </div>
            <div className="flex flex-col gap-4">
              <FormFieldText
                label="Password"
                type="password"
                placeholder="********"
                error={methods.formState.errors?.password?.message}
                {...methods.register('password')}
              />
              <FormFieldText
                label="Confirm password"
                type="password"
                placeholder="********"
                error={methods.formState.errors?.confirmedPassword?.message}
                {...methods.register('confirmedPassword')}
              />
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <Button
              variant="outline"
              disabled={!methods.formState.isDirty}
              onClick={() => methods.reset()}
            >
              Discard changes
            </Button>
            <Button
              type="submit"
              disabled={isLoading || !methods.formState.isDirty}
            >
              Save changes
            </Button>
          </div>
        </form>
      )}
    </section>
  );
};
