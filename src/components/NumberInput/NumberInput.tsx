import { FC } from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { Input } from '../Input';

export interface NumberInputProps extends NumericFormatProps {}

export const NumberInput: FC<NumberInputProps> = (props) => (
  <NumericFormat
    customInput={Input}
    {...props}
  />
);
