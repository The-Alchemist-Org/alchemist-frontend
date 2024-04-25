import * as React from 'react';
import { cn } from 'utils/cn';
import { Button, ButtonProps } from './Button';

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className, ...props
  }, ref) => (
    <Button
      className={cn('px-3 !min-w-0', className)}
      ref={ref}
      {...props}
    />
  ),
);

IconButton.displayName = 'Button';

export { IconButton };
