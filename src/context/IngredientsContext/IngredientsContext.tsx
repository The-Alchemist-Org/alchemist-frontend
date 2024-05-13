import { IngredientDTO } from 'api/Ingredients';
import { createContext, useContext, useMemo } from 'react';
import { useIngredientsContext as useIngredientsContextInternalState } from './hooks';

interface Props {
  children: React.ReactNode;
}

type IngredientsContextInterface = {
  ingredients?: IngredientDTO[];
  isLoading: boolean;
};

const IngredientsContext = createContext<IngredientsContextInterface>({
  ingredients: undefined,
  isLoading: true,
});

export const useIngredientsContext = () => useContext(IngredientsContext);

export const IngredientsContextProvider = ({ children }: Props) => {
  const ingredientsContext = useIngredientsContextInternalState();

  const contextValue = useMemo(() => (ingredientsContext), [ingredientsContext]);

  return (
    <IngredientsContext.Provider value={contextValue}>
      {children}
    </IngredientsContext.Provider>
  );
};
