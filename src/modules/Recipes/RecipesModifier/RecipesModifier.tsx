import {
  Button,
  FormFieldBase,
  FormFieldNumber, FormFieldText, IngredientsPicker, Loading, Modal, ModalContent,
  ModalFooter, ModalHeader,
  ModalTitle,
} from 'components';
import { FC, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Controller, useFieldArray } from 'react-hook-form';
import { Add, Delete } from '@mui/icons-material';
import { useRecipeCreateForm, useRecipeUpdateForm } from './hooks';

interface Props {
  isEdit?: boolean;
}

export const RecipesModifier:FC<Props> = ({ isEdit }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const onModalClose = useCallback(() => navigate('/recipes', { replace: true }), [navigate]);

  const createForm = useRecipeCreateForm({ onSuccess: onModalClose });
  const updateForm = useRecipeUpdateForm({ onSuccess: onModalClose, recipeId: Number(id) });

  const {
    onSubmit, isLoading, isLoadingData, methods,
  } = isEdit ? updateForm : createForm;

  const { fields, append, remove } = useFieldArray({ control: methods.control, name: 'ingredients' });

  return (
    <Modal open>
      <ModalContent closeHandler={onModalClose} className="max-w-none w-10/12 ">
        <form onSubmit={onSubmit}>
          <ModalHeader>
            <ModalTitle>{isEdit ? 'Edit recipe' : 'Create recipe'}</ModalTitle>
          </ModalHeader>
          <div className="px-6 h-[60vh] overflow-auto pb-4 pt-4">
            {isLoadingData ? <Loading /> : (
              <div className="grid grid-cols-1 gap-6 mb-4">
                <FormFieldText
                  label="Name"
                  placeholder="Input recipe name"
                  error={methods.formState.errors.name?.message}
                  {...methods.register('name')}
                />
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
                          name={`ingredients.${index}.id`}
                          render={({ field: f }) => (
                            <FormFieldBase
                              label="Ingredient"
                              error={
                                methods.formState.errors?.ingredients?.[index]?.id?.message
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
                          error={methods.formState.errors?.ingredients?.[index]?.quantity?.message}
                          value={field.quantity}
                          onChange={(e) => {
                            const { value } = e.target;
                            methods.setValue(`ingredients.${index}.quantity`, Number(value.split('cl')[0]));
                          }}
                        />
                        <div>
                          <Button
                            onClick={() => remove(index)}
                            variant="outline"
                            withIcon="left"
                          >
                            <Delete />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <Button
                    withIcon="left"
                    onClick={() => {
                      append({
                        id: 0,
                        quantity: 0,
                      });
                    }}
                    disabled={isLoading}
                  >
                    <Add />
                    Add new ingredient
                  </Button>
                </div>
              </div>
            )}
          </div>
          <ModalFooter>
            <Button onClick={onModalClose} variant="outline">Cancel</Button>
            <Button type="submit">Save</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
