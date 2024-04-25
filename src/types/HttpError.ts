import type { AxiosError } from 'axios';

export type HttpError = AxiosError<{ message?: string }>;
