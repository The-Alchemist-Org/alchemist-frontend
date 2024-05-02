import React from 'react';
import { Loading as LoadingIcon } from 'assets';
import { cn } from 'utils/cn';

interface Props {
  className?: string;
}

export const Loading: React.FC<Props> = ({ className }) => (
  <LoadingIcon className={cn('animate-spin w-8', className)} />
);
