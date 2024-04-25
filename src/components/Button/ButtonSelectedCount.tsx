import { FC } from 'react';

interface Props {
  count?: number;
}

export const ButtonSelectedCount: FC<Props> = ({ count }) => {
  if (!count) {
    return null;
  }

  return (
    <span className="inline-flex justify-center relative ml-1 leading-sm text-white w-5 before:content-[''] before:h-5 before:w-5 before:-mt-0.5 before:block before:absolute before:inset-0 before:bg-primary before:rounded-full">
      <span className="text-white z-[1] text-xs">{count}</span>
    </span>
  );
};
