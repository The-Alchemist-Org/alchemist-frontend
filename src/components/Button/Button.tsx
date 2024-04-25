import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-x-1 py-3 px-4 min-w-input rounded-md leading-lg text-sm font-semibold ring-inset ring-offset-primary-800 transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:text-cool-gray-600',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary-700 focus:ring-primary-800 disabled:bg-gray-200 focus-visible:ring-primary-800',
        outline: 'text-primary ring-1 ring-cool-gray-400 bg-transparent hover:text-primary-700 hover:ring-primary hover:ring-2 focus-visible:ring-primary active:ring-2 active:ring-primary-700 active:bg-primary-50 active:text-primary-800',
        ghost: 'text-primary hover:bg-primary hover:bg-opacity-[.08] focus-visible:bg-primary focus-visible:bg-opacity-[0.16] focus-visible:ring-primary-light active:ring-2 active:ring-primary',
      },
      withIcon: {
        default: '',
        left: 'pl-3',
        right: 'pr-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      withIcon: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className, variant, withIcon, ...props
  }, ref) => (
    <button
      className={cn(buttonVariants({ variant, withIcon, className }))}
      ref={ref}
      type="button"
      {...props}
    />
  ),
);

Button.displayName = 'Button';

export { Button, buttonVariants };
