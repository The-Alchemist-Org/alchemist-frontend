import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Close } from '@mui/icons-material';
import { cn } from 'utils/cn';

const tagVariants = cva(
  'text-gray-900 z-20 px-1 py-0.5 text-xs rounded transition inline-flex items-center gap-1 w-fit',
  {
    variants: {
      variant: {
        default: 'bg-primary-400 hover:bg-primary-500',
        passive: 'bg-cool-gray-50 hover:bg-cool-gray-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface TagProps extends VariantProps<typeof tagVariants> {
  className?: string;
  children: React.ReactNode;
  onRemove?: () => void;
}

export const Tag: React.FC<TagProps> = ({
  variant,
  children,
  className,
  onRemove,
}) => {
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onRemove?.();
  };
  return (
    <span className={cn(tagVariants({ variant, className }))}>
      <span className="truncate max-w-[80px] leading-sm">
        {children}
      </span>
      {onRemove && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button className="h-4 flex" type="button" onClick={onButtonClick}>
          <Close className="!h-4 !w-4" />
        </button>
      )}
    </span>
  );
};
