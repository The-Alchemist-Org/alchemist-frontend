/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';
import { cn } from 'utils/cn';
import { useSearchSelectContext } from './SearchSelectContext';
import { Checkbox } from '../Checkbox';

interface SelectItemProps {
  value: string;
  label: string;
  children?: React.ReactNode;
  customSelectOutputValue?: any;
}

export const SearchSelectItem: React.FC<SelectItemProps> = ({
  value,
  label,
  children,
  customSelectOutputValue = value,
}) => {
  const { selectedValues, singleSelect, onSelectCallback } = useSearchSelectContext();

  return (
    <div
      className={cn((singleSelect && !!selectedValues[value]) ? 'font-bold bg-primary text-white hover:!none' : 'hover:bg-primary-50', 'flex items-center gap-3 relative select-none transition px-4 py-3 leading-sm text-sm hover:outline-none data-[state=checked]:!bg-primary data-[state=checked]:text-white cursor-pointer')}
      onClick={() => onSelectCallback?.(customSelectOutputValue)}
    >
      {!singleSelect && <Checkbox checked={!!selectedValues[value]} />}
      {children ?? label}
    </div>
  );
};
