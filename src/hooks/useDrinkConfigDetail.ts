import { useQuery } from '@tanstack/react-query';
import { getDrinkConfig } from 'api/DrinkConfig';
import { queryKeys } from 'constants/QueryKeys';

export const useDrinkConfigDetail = () => useQuery(
  [queryKeys.MIXER],
  () => getDrinkConfig(),
  { enabled: true },
);
