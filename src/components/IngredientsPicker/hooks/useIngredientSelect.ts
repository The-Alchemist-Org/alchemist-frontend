import { useMemo } from 'react';
import startCase from 'lodash.startcase';
import { SelectedValues } from 'components/SearchSelect';
import { IngredientDTO } from 'api/Ingredients';

type HookParams = {
  value: IngredientDTO['id'];
  ingredients: IngredientDTO[];
  onChange: (ingredient: IngredientDTO | {}) => void;
};

const toggleIngredient = (
  newIngredient: IngredientDTO,
  selectedIngredient?: IngredientDTO,
) => (newIngredient?.id === selectedIngredient?.id ? {} : newIngredient);

export const useIngredientSelect = ({ value, ingredients, onChange }: HookParams) => {
  const onSelectItem = (newIngredient: IngredientDTO) => {
    const selectedIngredient = ingredients.find((ingredient) => ingredient.id === value);
    const toggledIngredient = toggleIngredient(newIngredient, selectedIngredient);
    onChange?.(toggledIngredient);
  };

  const onClearAll = () => {
    onChange({} as IngredientDTO);
  };

  const searchSelectValue = useMemo<SelectedValues>(() => {
    let formattedValue = {};

    if (value) {
      const selectedIngredient = ingredients.find(
        (ingredient) => ingredient.id === value,
      );
      formattedValue = selectedIngredient
        ? { [selectedIngredient.id]: startCase(selectedIngredient.name) }
        : formattedValue;
    }

    return formattedValue;
  }, [value, ingredients]);

  return {
    onSelectItem,
    onClearAll,
    searchSelectValue,
  };
};
