import React, { useEffect, useMemo } from 'react';
import { cn } from 'utils/cn';
import { Error, Close } from '@mui/icons-material';
import { useSearchSelectContext } from './SearchSelectContext';
import { Tag } from '../Tag';
import { Input } from '../Input';

const triggerStyle = 'flex gap-1 items-center w-full py-2.5 leading-xl text-sm pr-3 pl-9 overflow-hidden border border-cool-gray-300 transition rounded-md text-gray-900 ring-cool-gray focus:outline-none focus:ring-2 focus:ring-cool-gray-600 focus:border-transparent data-[placeholder]:text-gray-400 group-[.error]:border-error group-[.error]:bg-error-50 group-[.error]:focus:ring-error disabled:text-gray-500 disabled:bg-cool-gray-100 disabled:border-cool-gray-300';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  pillsToShowWhileClosed: number;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  onClearAll?: () => void;
}

export const Trigger: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  pillsToShowWhileClosed,
  disabled,
  placeholder,
  className,
  onClearAll,
}) => {
  const {
    selectedValues,
    filter,
    setFilter,
    singleSelect,
  } = useSearchSelectContext();

  useEffect(() => {
    if (!isOpen) {
      setFilter('');
    }
  }, [isOpen, setFilter]);

  const selectedCount = useMemo(() => Object.keys(selectedValues).length, [selectedValues]);
  const selectedFirstValue = useMemo(() => Object.values(selectedValues)?.[0], [selectedValues]);
  const isEmpty = useMemo(() => selectedCount === 0, [selectedCount]);

  const onClearAllClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClearAll?.();
  };

  const pillsPassiveView = useMemo(() => {
    if (selectedCount === 0) {
      return null;
    }

    const separatePills = Object.entries(selectedValues)
      .slice(0, pillsToShowWhileClosed)
      .map(([key, label]) => (
        <Tag key={key} className="my-[1px]">
          {label}
        </Tag>
      ));

    const remainingItems = selectedCount - pillsToShowWhileClosed;

    return (
      <>
        {separatePills}
        {remainingItems > 0 && (
          <Tag className="mb-[1px]">{`${remainingItems} more`}</Tag>
        )}
      </>
    );
  }, [selectedValues, pillsToShowWhileClosed, selectedCount]);

  if (!isOpen) {
    return (
      <div className="relative">
        <button
          type="button"
          className={cn(
            triggerStyle,
            { 'p-0 border-0 shadow-none hidden': isOpen },
            className,
          )}
          onClick={() => setIsOpen(true)}
          disabled={disabled}
        >
          {singleSelect
            ? (<span>{selectedFirstValue ?? placeholder}</span>)
            : (pillsPassiveView ?? placeholder)}
        </button>
        <span className="absolute right-2 top-0 gap-1 flex items-center h-full leading-sm">
          <span className="hidden group-[.error]:flex items-center text-error">
            <Error style={{ width: '1rem', height: '1rem' }} />
          </span>
          {selectedCount > 0 && (
            <button type="button" onClick={onClearAllClick} aria-label="Close" disabled={disabled}>
              <Close className="flex !h-4" />
            </button>
          )}
        </span>
      </div>
    );
  }

  return (
    <div className="relative">
      {!isEmpty && !singleSelect && (
        <Tag
          variant="passive"
          className="absolute transform top-3 left-9"
          onRemove={onClearAll}
        >
          {`${selectedCount} selected`}
        </Tag>
      )}
      <Input
        autoFocus
        placeholder="Search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={cn(
          triggerStyle,
          { 'pl-32': !isEmpty && !singleSelect },
          className,
        )}
      />
    </div>
  );
};
