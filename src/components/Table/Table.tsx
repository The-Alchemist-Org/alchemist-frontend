import React, { HTMLAttributes, forwardRef, TdHTMLAttributes } from 'react';
import { cn } from 'utils/cn';

export const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(({
  className,
  ...props
}, ref) => (
  <table ref={ref} className={cn('border-collapse table-auto shadow rounded-md overflow-hidden w-full', className)} {...props} />
));

export const THead: React.FC<HTMLAttributes<HTMLTableSectionElement>> = ({
  className,
  ...props
}) => (
  <thead className={cn('bg-cool-gray-200', className)} {...props} />
);

export const TBody: React.FC<HTMLAttributes<HTMLTableSectionElement>> = ({
  className,
  ...props
}) => (
  <tbody className={className} {...props} />
);

export const TFooter: React.FC<HTMLAttributes<HTMLTableSectionElement>> = ({
  className,
  ...props
}) => (
  <tfoot className={className} {...props} />
);

export const TRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(({
  className,
  ...props
}, ref) => (
  <tr ref={ref} className={cn('transition group/row bg-white hover:bg-secondary-50 border-b border-gray-50 last-of-type:border-0', className)} {...props} />
));

interface THProps extends HTMLAttributes<HTMLTableCellElement> {
}

export const TH: React.FC<THProps> = ({
  className,
  ...props
}) => {
  const styling = cn('relative py-3 px-4 text-left text-gray-900 font-semibold text-sm leading-lg whitespace-pre', className);

  return <th className={styling} {...props} />;
};

export const TD: React.FC<TdHTMLAttributes<HTMLTableCellElement>> = ({
  className,
  ...props
}) => (
  <td className={cn('p-4 text-gray-600 text-sm leading-lg', className)} {...props} />
);
