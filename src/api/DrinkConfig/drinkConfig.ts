import { client } from 'api/baseAxios';
import { DrinkConfigBody, DrinkConfigDTO } from './types';

const { VITE_MIXER_ID: mixerId } = import.meta.env;
export const getDrinkConfig = () => client.get<DrinkConfigDTO>(`/drinkConfig/${mixerId}`);
export const putDrinkConfig = (body: DrinkConfigBody) => client.put<DrinkConfigDTO>(`/drinkConfig/${mixerId}`, body);
