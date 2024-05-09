import {
  Button, Loading, FormFieldNumber, IngredientsPicker,
  FormFieldBase,
} from 'components';
import { Controller, useFieldArray } from 'react-hook-form';
import { Add } from '@mui/icons-material';
import { useDrinkConfigModifierForm } from './hooks';

export const DrinkConfigModifier = () => {
  const { methods, isLoading, isLoadingData } = useDrinkConfigModifierForm();
  const { fields } = useFieldArray({ control: methods.control, name: 'fields' });

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
          <Button withIcon="left" onClick={() => {}} disabled={isLoading}>
            <Add />
            Add new ingredient
          </Button>
        </div>
      </div>
      {isLoadingData ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-4">
          {fields.map((field, index) => (
            <div key={field.id} className="flex flex-row gap-4">
              <Controller
                control={methods.control}
                name={`fields[${index}].ingredient`}
                render={({ field: f }) => (
                  <FormFieldBase label="Ingredient">
                    <IngredientsPicker
                      value={f.value}
                      placeholder="Select ingredient"
                      onChange={(ingredientDTO) => ('id' in ingredientDTO
                        ? f.onChange(ingredientDTO.id)
                        : f.onChange(''))}
                    />
                  </FormFieldBase>
                )}
              />
              <FormFieldNumber
                label="Amount left"
                name={`fields[${index}].amountLeft`}
                placeholder="Input amount left"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
