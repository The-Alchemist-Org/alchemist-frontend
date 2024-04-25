import React from 'react';
import { Input, InputProps } from '../Input';
import { FormFieldBase, FormFieldProps } from './FormFieldBase';

export interface FormFieldTextProps extends FormFieldProps, InputProps {}

export const FormFieldText = React.forwardRef<HTMLInputElement, FormFieldTextProps>(
  ({
    label,
    helperText,
    error,
    className,
    ...props
  }, ref) => (
    <FormFieldBase
      label={label}
      helperText={helperText}
      error={error}
      className={className}
    >
      <Input
        ref={ref}
        className="mt-1"
        {...props}
      />
    </FormFieldBase>
  ),
);
