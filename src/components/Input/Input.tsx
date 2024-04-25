import * as React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import { cn } from '../../utils/cn';

const inputStyles = (hasSuffix: boolean) => cn(
  'block w-full py-2.5 px-4 leading-xl text-sm group-[.error]:pr-8 border border-cool-gray-300 transition rounded-md text-gray-900 ring-cool-gray focus:outline-none focus:ring-2 focus:ring-cool-gray-600 focus:border-transparent group-[.error]:border-error group-[.error]:bg-error-50 group-[.error]:focus:ring-error disabled:bg-cool-gray-100 disabled:border-cool-gray-300',
  {
    '!pr-12 group-[.error]:!pr-16': hasSuffix,
  },
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    suffix,
    ...props
  }, ref) => {
    const hasSuffix = Boolean(suffix);

    return (
      <div className="relative">
        <input
          className={cn(inputStyles(hasSuffix), className)}
          ref={ref}
          {...props}
        />
        <span className="absolute right-2 top-0 gap-1 flex items-center h-full leading-sm">
          <span className="hidden group-[.error]:flex items-center text-error">
            <ErrorIcon style={{ width: '1rem', height: '1rem' }} />
          </span>
          {suffix && (
            <span className="text-sm text-black">
              {suffix}
            </span>
          )}
        </span>
      </div>
    );
  },
);
