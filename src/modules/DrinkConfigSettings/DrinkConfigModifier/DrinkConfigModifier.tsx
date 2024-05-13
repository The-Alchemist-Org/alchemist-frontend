import {
  Button, Loading, FormFieldNumber, IngredientsPicker,
  FormFieldBase,
} from 'components';
import { Controller, useFieldArray } from 'react-hook-form';
import { Add, Delete } from '@mui/icons-material';
import { useDrinkConfigModifierForm } from './hooks';

export const DrinkConfigModifier = () => {
  const {
    methods, isLoading, isLoadingData, onSubmit,
  } = useDrinkConfigModifierForm();
  const { fields, append, remove } = useFieldArray({ control: methods.control, name: 'config' });

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-900 text-2xl leading-5xl">Drink config</h1>
          <p className="text-cool-gray-700 text-sm leading-lg">
            Manage the drink configuration for the mixer
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            withIcon="left"
            onClick={() => {
              append({
                ingredientId: 0,
                amountLeft: 0,
              });
            }}
            disabled={isLoading}
          >
            <Add />
            Add new ingredient
          </Button>
        </div>
      </div>
      {isLoadingData ? (
        <Loading />
      ) : (
        <form className="grid grid-cols-1 gap-6 mb-4" onSubmit={onSubmit}>
          <div className="flex flex-col gap-4">
            {fields.map((field, index) => (
              <div key={field.id}>
                <h2 className="text-gray-900 text-lg leading-5xl">
                  Ingredient
                  {' '}
                  {index + 1}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <Controller
                    control={methods.control}
                    name={`config.${index}.ingredientId`}
                    render={({ field: f }) => (
                      <FormFieldBase
                        label="Ingredient"
                        error={
                          methods.formState.errors?.config?.[index]?.ingredientId?.message
                        }
                      >
                        <IngredientsPicker
                          value={f.value}
                          placeholder="Select ingredient"
                          className="mt-1"
                          onChange={(ingredientDTO) => ('id' in ingredientDTO
                            ? f.onChange(ingredientDTO.id)
                            : f.onChange(''))}
                        />
                      </FormFieldBase>
                    )}
                  />
                  <FormFieldNumber
                    label="Amount left"
                    placeholder="Input amount left"
                    suffix="cl"
                    error={methods.formState.errors?.config?.[index]?.amountLeft?.message}
                    value={field.amountLeft}
                    onChange={(e) => {
                      const { value } = e.target;
                      methods.setValue(`config.${index}.amountLeft`, Number(value.split('cl')[0]));
                    }}
                  />
                </div>
                <div>
                  <div className="flex flex-col gap-2 justify-end">
                    <Button
                      withIcon="left"
                      onClick={() => remove(index)}
                      className="w-max-content h-11"
                      variant="ghost"
                    >
                      <Delete />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
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
              disabled={isLoading}
            >
              Save changes
            </Button>
          </div>
        </form>
      )}
    </section>
  );
};
