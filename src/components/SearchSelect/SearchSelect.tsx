import React, { useState, useRef } from 'react';
import { Search } from '@mui/icons-material';
import { useHandleClickOutside } from 'hooks';
import { Loading } from 'components/Loading';
import { SearchSelectContextProvider } from './SearchSelectContext';
import { Trigger } from './Trigger';
import { SelectedValues } from './types';

export interface SearchSelectProps {
  className?: string;
  placeholder?: string;
  value?: SelectedValues;
  disabled?: boolean;
  children: React.ReactNode;
  pillsToShowWhileClosed?: number;
  singleSelect?: boolean;
  filterCallback?: (value: string) => void;
  onClearAll?: () => void;
  onSelectCallback?: (value: any) => void;
  isLoading?: boolean;
  isEmpty?: boolean;
}

export const SearchSelect: React.FC<SearchSelectProps> = ({
  className,
  placeholder,
  value = {},
  children,
  disabled = false,
  pillsToShowWhileClosed = 2,
  singleSelect = false,
  filterCallback,
  onClearAll,
  onSelectCallback,
  isLoading,
  isEmpty,
}) => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useHandleClickOutside({
    ref: containerRef,
    callback: () => setIsOpen(false),
  });

  const onSelectHandler = (val: any) => {
    if (singleSelect && value) {
      setIsOpen(false);
    }
    onSelectCallback?.(val);
  };

  return (
    <SearchSelectContextProvider
      filterCallback={filterCallback}
      onSelectCallback={onSelectHandler}
      selectedValues={value}
      singleSelect={singleSelect}
    >
      <div className="relative" ref={containerRef}>
        <span className="absolute left-3 h-full flex items-center z-10">
          <Search className="!h-4 !w-4 text-cool-gray" />
        </span>
        <Trigger
          disabled={disabled}
          placeholder={placeholder}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          className={className}
          pillsToShowWhileClosed={pillsToShowWhileClosed}
          onClearAll={onClearAll}
        />
        {isOpen && (
          <div className="absolute bg-white overflow-auto shadow rounded w-full mt-1 max-h-56 z-50">
            {isLoading && (
              <div className="flex justify-center mb-2">
                <Loading className="h-10" />
              </div>
            )}
            {isEmpty && (
              <p className="text-gray text-sm p-2">No results found.</p>
            )}
            {children}
          </div>
        )}
      </div>
    </SearchSelectContextProvider>
  );
};
