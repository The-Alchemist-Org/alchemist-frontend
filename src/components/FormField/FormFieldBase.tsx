import React from 'react';
import { cn } from 'utils/cn';
import { Label } from '../Label';

export interface FormFieldProps {
  label?: string;
  labelSuffix?: string;
  helperText?: string;
  error?: string;
  children?: React.ReactNode;
  className?: string;
}

export const FormFieldBase: React.FC<FormFieldProps> = ({
  label,
  labelSuffix,
  helperText,
  error,
  children,
  className,
}) => {
  const hasTextBelow = helperText || error;

  return (
    <div className={cn('group', { error: !!error }, className)}>
      <Label>{label}</Label>
      {labelSuffix
        ? <span className="ml-1 text-xs text-gray-600">{labelSuffix}</span>
        : null}
      {children}
      <p className={cn('mt-1 h-3 text-xs leading-sm text-gray-600 hidden group-[.error]:text-error', { block: hasTextBelow })}>
        {error || helperText}
      </p>
    </div>
  );
};
