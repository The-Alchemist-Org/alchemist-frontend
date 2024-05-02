import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from '@mui/icons-material';
import { cn } from 'utils/cn';

const Checkbox = React.forwardRef<
React.ElementRef<typeof CheckboxPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'h-5 w-5 p-0 shrink-0 appearance-none rounded border flex items-center justify-center border-cool-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-inset focus-visible:border-none data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white disabled:cursor-not-allowed disabled:!text-cool-gray-400 disabled:!bg-cool-gray-100 disabled:!border-cool-gray-100',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className="text-inherit leading-lg"
    >
      <Check className="!h-5 !w-5" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
