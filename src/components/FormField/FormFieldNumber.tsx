import { FC } from 'react';
import { NumberInput, NumberInputProps } from '../NumberInput';
import { FormFieldBase, FormFieldProps } from './FormFieldBase';

export interface FormFieldNumberProps extends FormFieldProps, NumberInputProps { }

export const FormFieldNumber: FC<FormFieldNumberProps> = ({
  label,
  labelSuffix,
  helperText,
  error,
  className,
  ...props
}) => (
  <FormFieldBase
    label={label}
    labelSuffix={labelSuffix}
    helperText={helperText}
    error={error}
    className={className}
  >
    <NumberInput
      className="mt-1"
      {...props}
    />
  </FormFieldBase>
);
