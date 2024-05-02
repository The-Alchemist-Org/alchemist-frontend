import React, {
  createContext, useContext, useEffect, useMemo,
} from 'react';
import { useSearchSelect } from './hooks';
import { SelectedValues } from './types';

interface ISearchSelectContext {
  filter: string;
  setFilter: (value: string) => void;
  onSelectCallback?: (value: any) => void;
  selectedValues: SelectedValues;
  singleSelect: boolean;
}

const DEFAULT_SEARCH_SELECT_CONTEXT: ISearchSelectContext = {
  selectedValues: {},
  singleSelect: false,
  filter: '',
  setFilter: () => { },
  onSelectCallback: () => { },
};

const SearchSelectContext = createContext<ISearchSelectContext>(
  DEFAULT_SEARCH_SELECT_CONTEXT,
);

export const useSearchSelectContext = () => useContext(SearchSelectContext);

interface Props {
  children: React.ReactNode;
  filterCallback?: (value: string) => void;
  onSelectCallback?: (value: any) => void;
  selectedValues: SelectedValues;
  singleSelect: boolean;
}

export const SearchSelectContextProvider: React.FC<Props> = ({
  children,
  filterCallback,
  onSelectCallback,
  selectedValues,
  singleSelect,
}) => {
  const { filter, setFilter } = useSearchSelect();

  useEffect(() => {
    filterCallback?.(filter);
  }, [filter, filterCallback]);

  const contextValue = useMemo<ISearchSelectContext>(
    () => ({
      filter,
      setFilter,
      selectedValues,
      singleSelect,
      onSelectCallback,
    }),
    [filter, setFilter, selectedValues, singleSelect, onSelectCallback],
  );

  return (
    <SearchSelectContext.Provider value={contextValue}>
      {children}
    </SearchSelectContext.Provider>
  );
};
