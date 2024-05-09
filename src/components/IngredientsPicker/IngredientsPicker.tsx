import React, { useEffect, useState } from 'react';
import startCase from 'lodash.startcase';
import { useDebounce } from 'hooks';
import { cn } from 'utils/cn';
import { SearchSelect, SearchSelectItem } from 'components/SearchSelect';
import { useIngredientsContext } from 'context';
import { IngredientDTO } from 'api/Ingredients';
import { useIngredientSelect } from './hooks';

interface Props {
  placeholder?: string;
  value: IngredientDTO['id'];
  onChange: (ingredientDTO: IngredientDTO | {}) => void;
  className?: string;
}

export const IngredientsPicker: React.FC<Props> = ({
  placeholder,
  onChange,
  value,
  className,
}) => {
  const [filter, setFilter] = useState<string>('');
  const debouncedFilter = useDebounce<string>(filter, 500);

  const { ingredients, isLoading } = useIngredientsContext();
  const [filteredIngredients, setFilteredIngredients] = useState<IngredientDTO[]>([]);
  useEffect(() => {
    if (debouncedFilter) {
      const filtered = ingredients?.filter(
        (ingredient) => ingredient.name.toLowerCase().includes(debouncedFilter.toLowerCase()),
      );
      setFilteredIngredients(filtered ?? []);
    } else {
      setFilteredIngredients(ingredients ?? []);
    }
  }, [debouncedFilter]);
  const { onSelectItem, onClearAll, searchSelectValue } = useIngredientSelect({
    value,
    ingredients: ingredients || [],
    onChange,
  });

  return (
    <SearchSelect
      value={searchSelectValue}
      placeholder={placeholder}
      filterCallback={setFilter}
      className={cn('bg-white', className)}
      onClearAll={onClearAll}
      isLoading={isLoading}
      isEmpty={filteredIngredients.length === 0}
      singleSelect
      onSelectCallback={onSelectItem}
    >
      {filteredIngredients?.map((ingredient) => (
        <SearchSelectItem
          key={ingredient.id}
          value={`${ingredient.id}`}
          label={startCase(ingredient.name)}
          customSelectOutputValue={ingredient}
        />
      ))}
    </SearchSelect>
  );
};
