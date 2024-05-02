import { useState } from 'react';

export const useSearchSelect = () => {
  const [filter, setFilter] = useState<string>('');

  return {
    filter,
    setFilter,
  };
};
